"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertEnum_1 = __importDefault(require("./ConvertEnum"));
const ErrorForConvert_enum_1 = __importStar(require("./ErrorForConvert.enum"));
const Formatter_1 = __importDefault(require("./Formatter"));
const ConvertToRequest = {
    toCorporateCustomer(args) {
        var _a, _b, _c;
        // handle missing mandatory
        if (!args.application.company.riskProfileAssessment.countryOfOperations)
            throw new Error(ErrorForConvert_enum_1.default.enum["Country of operations cannot be empty"]);
        if (!args.application.company.companyName)
            throw new Error(ErrorForConvert_enum_1.default.enum["Company name cannot be empty"]);
        if (!args.application.company.legalDetails.entityType)
            throw new Error(ErrorForConvert_enum_1.default.enum["Entity type cannot be empty"]);
        if (!args.application.company.ssic.primary.code)
            throw new Error(ErrorForConvert_enum_1.default.enum["Industry code cannot be empty"]);
        if (!args.application.company.riskProfileAssessment.onboardingMode)
            throw new Error(ErrorForConvert_enum_1.default.enum["Onboarding mode cannot be empty"]);
        if (!args.application.company.riskProfileAssessment.ownershipStructureLayers)
            throw new Error(ErrorForConvert_enum_1.default.enum["Ownership structure layer cannot be empty"]);
        if (!args.application.company.riskProfileAssessment.paymentModes)
            throw new Error(ErrorForConvert_enum_1.default.enum["Payment mode cannot be empty"]);
        if (!args.application.company.riskProfileAssessment.productServiceComplexity)
            throw new Error(ErrorForConvert_enum_1.default.enum["Product service complexity cannot be empty"]);
        // new if no service
        const isNewIncorp = Boolean(args.application.services.incorporation);
        // convert country of operations
        const countryOfOperations = args.application.company.riskProfileAssessment.countryOfOperations.map((c) => c.toUpperCase());
        return {
            type: "CORPORATE",
            assigneeId: process.env.ARTEMIS_USER_ID,
            domainId: [
                process.env.ARTEMIS_DOMAIN_ID
            ],
            other: {
                entityType: ConvertEnum_1.default.entityType(args.application.company.legalDetails.entityType, args.application.company.addresses.registeredAddress.country),
                corporateWebsite: "",
                fatfjurisdiction: "",
                industry: args.application.company.ssic.primary.code + " - " + args.application.company.ssic.primary.description,
                onBoardingMode: args.application.company.riskProfileAssessment.onboardingMode,
                ownershipStructureLayer: args.application.company.riskProfileAssessment.ownershipStructureLayers,
                paymentMode: args.application.company.riskProfileAssessment.paymentModes,
                productServiceComplexity: args.application.company.riskProfileAssessment.productServiceComplexity,
                sourceOfFunds: "",
                natureOfBusinessRelationship: "",
                bankAccount: [],
                additionalInformation: ((_a = args.additional) === null || _a === void 0 ? void 0 : _a.additionalInformation) || "",
            },
            particular: {
                incorporated: args.application.company.isIncorporated,
                name: args.application.company.companyName,
                alias: [args.application.company.legalDetails.entityName],
                formerName: args.application.company.legalDetails.historyName ? [args.application.company.legalDetails.historyName] : [],
                countryOfIncorporation: ((_c = (_b = args.customFn) === null || _b === void 0 ? void 0 : _b.parseCountry) === null || _c === void 0 ? void 0 : _c.call(_b, args.application.company.addresses.registeredAddress.country)) || ConvertEnum_1.default.shortCountry(args.application.company.addresses.registeredAddress.country),
                countryOfOperation: countryOfOperations,
                address: Formatter_1.default.toGrofAddress({
                    country: args.application.company.addresses.registeredAddress.country,
                    blockHouse: args.application.company.addresses.registeredAddress.blockHouse,
                    buildingName: args.application.company.addresses.registeredAddress.buildingName,
                    level: args.application.company.addresses.registeredAddress.level,
                    postalCode: args.application.company.addresses.registeredAddress.postalCode,
                    streetName: args.application.company.addresses.registeredAddress.streetName,
                    unit: args.application.company.addresses.registeredAddress.unit,
                    addressLine1: args.application.company.addresses.registeredAddress.addressLine1,
                    addressLine2: args.application.company.addresses.registeredAddress.addressLine2,
                }),
                dateOfIncorporation: isNewIncorp || args.application.company.legalDetails.registrationDate,
                email: [],
                imonumber: "",
                incorporateNumber: isNewIncorp ? "" : args.application.company.legalDetails.uen
            },
            profileReferenceId: args.application.company.companyName,
            referenceId: args.application.company.companyName,
            active: true
        };
    },
    toSingleIndividualCrp(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const member = args.member;
        // handle missing mandatory
        if (!member.personDetails.personalDetails.fullName)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToIndividual.enum['Name cannot be empty']);
        if (!member.personDetails.personalDetails.nationality)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToIndividual.enum['Nationality cannot be empty']);
        if (!member.personDetails.address.country)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToIndividual.enum['Country of residence cannot be empty']);
        // pre-parse
        const documentType = ConvertEnum_1.default.documentType(member.personDetails.personalDetails.idDocument.type);
        // roles
        const roles = ConvertEnum_1.default.appointmentToRole(member.appointments);
        if (!roles.length)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToIndividual.enum['Role cannot be empty']);
        const req = {
            type: "INDIVIDUAL",
            roles: roles,
            other: {
                ownershipPercentage: member.sharesDetails.reduce((cur, next) => cur + next.sharePercentage, 0),
                bankAccount: [],
                sourceOfFunds: ConvertEnum_1.default.sourceOfFund(member.personDetails.riskProfileAssessment.sourceOfIncome),
                status: "CURRENT",
                undischargedBankrupt: false,
                otherSourceOfFunds: (_a = args.additional) === null || _a === void 0 ? void 0 : _a.otherSourceOfFunds,
                additionalInformation: ((_b = args.additional) === null || _b === void 0 ? void 0 : _b.additionalInformation) || ""
            },
            particular: {
                address: Formatter_1.default.toGrofAddress({
                    blockHouse: member.personDetails.address.blockHouse,
                    buildingName: member.personDetails.address.buildingName,
                    country: member.personDetails.address.country,
                    level: member.personDetails.address.level,
                    postalCode: member.personDetails.address.postalCode,
                    streetName: member.personDetails.address.streetName,
                    unit: member.personDetails.address.unit
                }),
                alias: member.personDetails.personalDetails.alias,
                email: [
                    member.personDetails.contactDetails.email
                ],
                phone: [
                    member.personDetails.contactDetails.phoneNumber
                ],
                formerName: ((_c = args.additional) === null || _c === void 0 ? void 0 : _c.formerName) || [],
                name: member.personDetails.personalDetails.fullName,
                dateOfBirth: member.personDetails.personalDetails.dateOfBirth,
                countryOfBirth: ((_e = (_d = args.customFn) === null || _d === void 0 ? void 0 : _d.parseCountry) === null || _e === void 0 ? void 0 : _e.call(_d, member.personDetails.personalDetails.countryOfBirth)) || ConvertEnum_1.default.shortCountry(member.personDetails.personalDetails.countryOfBirth),
                gender: member.personDetails.personalDetails.gender.toUpperCase(),
                identityDocumentType: documentType,
                // it should be fill or not listed in field. undefined when being parsed will gone.
                identityExpiryDate: documentType === "INTERNATIONAL PASSPORT" ? member.personDetails.personalDetails.idDocument.dateOfExpiration : undefined,
                identityIssuedDate: member.personDetails.personalDetails.idDocument.dateOfIssuance,
                identityNumber: member.personDetails.personalDetails.idDocument.idNumber,
                nationality: [
                    ((_g = (_f = args.customFn) === null || _f === void 0 ? void 0 : _f.parseCountry) === null || _g === void 0 ? void 0 : _g.call(_f, member.personDetails.personalDetails.nationality)) || ConvertEnum_1.default.shortCountry(member.personDetails.personalDetails.nationality)
                ],
                countryOfResidence: ((_j = (_h = args.customFn) === null || _h === void 0 ? void 0 : _h.parseCountry) === null || _j === void 0 ? void 0 : _j.call(_h, member.personDetails.address.country)) || ConvertEnum_1.default.shortCountry(member.personDetails.address.country),
                salutation: "",
            },
            profileReferenceId: member.companyDetails.companyName,
            active: true
        };
        return req;
    },
    toSingleCorporateCrp(args) {
        var _a, _b, _c, _d;
        const member = args.member;
        const roles = member.appointments.map((a) => {
            return {
                role: "SHAREHOLDER",
                appointedDate: a.appointmentDate,
                resignedDate: a.resignedDate
            };
        });
        // handle empty mandatory field
        if (!member.companyDetails.legalDetails.countryOfRegisteredBusiness)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToCorporate.enum['Country of incorporation cannot be empty']);
        if (!member.companyDetails.riskProfileAssessment.countryOfOperations)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToCorporate.enum['Country of operation cannot be empty']);
        if (!member.companyDetails.legalDetails.entityType)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToCorporate.enum['Entity type cannot be empty']);
        if (!member.companyDetails.companyName)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToCorporate.enum['Company name cannot be empty']);
        return {
            type: "CORPORATE",
            roles: roles,
            other: {
                entityType: ConvertEnum_1.default.entityType(member.companyDetails.legalDetails.entityType, member.companyDetails.addresses.registeredAddress.country),
                bankAccountNumber: [],
                ownershipStructureLayer: member.companyDetails.riskProfileAssessment.ownershipStructureLayers,
                status: "CURRENT",
                additionalInformation: ((_a = args.additional) === null || _a === void 0 ? void 0 : _a.additionalInformation) || ""
            },
            particular: {
                address: Formatter_1.default.toGrofAddress({
                    blockHouse: member.companyDetails.addresses.registeredAddress.blockHouse,
                    buildingName: member.companyDetails.addresses.registeredAddress.buildingName,
                    level: member.companyDetails.addresses.registeredAddress.level,
                    postalCode: member.companyDetails.addresses.registeredAddress.postalCode,
                    streetName: member.companyDetails.addresses.registeredAddress.streetName,
                    unit: member.companyDetails.addresses.registeredAddress.unit,
                    country: member.companyDetails.addresses.registeredAddress.country,
                    addressLine1: member.companyDetails.addresses.registeredAddress.addressLine1,
                    addressLine2: member.companyDetails.addresses.registeredAddress.addressLine2
                }),
                alias: [
                    member.companyDetails.companyName
                ],
                countryOfIncorporation: ((_c = (_b = args.customFn) === null || _b === void 0 ? void 0 : _b.parseCountry) === null || _c === void 0 ? void 0 : _c.call(_b, member.companyDetails.legalDetails.countryOfRegisteredBusiness)) || ConvertEnum_1.default.shortCountry(member.companyDetails.legalDetails.countryOfRegisteredBusiness),
                countryOfOperation: member.companyDetails.riskProfileAssessment.countryOfOperations.map((c) => c.toUpperCase()),
                dateOfIncorporation: member.companyDetails.legalDetails.registrationDate,
                email: [],
                phone: [],
                formerName: ((_d = args.additional) === null || _d === void 0 ? void 0 : _d.formerName) || [],
                imonumber: '',
                incorporated: true,
                incorporateNumber: member.companyDetails.legalDetails.businessRegistrationNumber,
                name: member.companyDetails.companyName,
            },
            profileReferenceId: member.companyDetails.companyName,
            active: true
        };
    }
};
exports.default = ConvertToRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydFRvUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9ncm9mLWFydGVtaXMvdjMvdXRpbHMvQ29udmVydFRvUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsZ0VBQWdEO0FBQ2hELCtFQUFpSDtBQUNqSCw0REFBbUM7QUFHbkMsTUFBTSxnQkFBZ0IsR0FBRztJQUNyQixtQkFBbUIsQ0FBQyxJQVNuQjs7UUFDRywyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQjtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQWUsQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZKLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7UUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7UUFDM0gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQWUsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFBO1FBQ3ZILElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFD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