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
        var _a;
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
        // transferIn service is 
        const isTransferIn = Boolean(args.application.services.corpSec);
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
                countryOfIncorporation: ConvertEnum_1.default.shortCountry(args.application.company.addresses.registeredAddress.country),
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
        var _a, _b, _c;
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
                countryOfBirth: ConvertEnum_1.default.shortCountry(member.personDetails.personalDetails.countryOfBirth),
                gender: member.personDetails.personalDetails.gender.toUpperCase(),
                identityDocumentType: documentType,
                // it should be fill or not listed in field. undefined when being parsed will gone.
                identityExpiryDate: documentType === "INTERNATIONAL PASSPORT" ? member.personDetails.personalDetails.idDocument.dateOfExpiration : undefined,
                identityIssuedDate: member.personDetails.personalDetails.idDocument.dateOfIssuance,
                identityNumber: member.personDetails.personalDetails.idDocument.idNumber,
                nationality: [
                    ConvertEnum_1.default.shortCountry(member.personDetails.personalDetails.nationality)
                ],
                countryOfResidence: ConvertEnum_1.default.shortCountry(member.personDetails.address.country),
                salutation: "",
            },
            profileReferenceId: member.companyDetails.companyName,
            active: true
        };
        return req;
    },
    toSingleCorporateCrp(args) {
        var _a, _b;
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
                countryOfIncorporation: ConvertEnum_1.default.shortCountry(member.companyDetails.legalDetails.countryOfRegisteredBusiness),
                countryOfOperation: member.companyDetails.riskProfileAssessment.countryOfOperations.map((c) => c.toUpperCase()),
                dateOfIncorporation: member.companyDetails.legalDetails.registrationDate,
                email: [],
                phone: [],
                formerName: ((_b = args.additional) === null || _b === void 0 ? void 0 : _b.formerName) || [],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydFRvUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9ncm9mLWFydGVtaXMvdjMvdXRpbHMvQ29udmVydFRvUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsZ0VBQWdEO0FBQ2hELCtFQUFpSDtBQUNqSCw0REFBbUM7QUFHbkMsTUFBTSxnQkFBZ0IsR0FBRztJQUNyQixtQkFBbUIsQ0FBQyxJQU1uQjs7UUFDRywyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQjtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQWUsQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZKLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7UUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7UUFDM0gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQWUsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFBO1FBQ3ZILElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFD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