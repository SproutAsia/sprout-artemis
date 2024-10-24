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
const lodash_1 = require("lodash");
const ConvertEnum_1 = __importDefault(require("./ConvertEnum"));
const ErrorForConvert_enum_1 = __importStar(require("./ErrorForConvert.enum"));
const Formatter_1 = __importDefault(require("./Formatter"));
const ConvertToRequest = {
    toCorporateCustomer(args) {
        var _a, _b, _c, _d, _e, _f, _g;
        // handle missing mandatory
        if (!args.assigneeId)
            throw new Error(ErrorForConvert_enum_1.default.enum["Assignee ID cannot be empty"]);
        if (!args.application.company.companyName)
            throw new Error(ErrorForConvert_enum_1.default.enum["Company name cannot be empty"]);
        if (!args.application.company.legalDetails.companyType)
            throw new Error(ErrorForConvert_enum_1.default.enum["Entity type cannot be empty"]);
        // artemis use full name of industry code instead of just code so that's why we use description
        if (!args.application.company.ssic.primary.description)
            throw new Error(ErrorForConvert_enum_1.default.enum["Industry code cannot be empty"]);
        if (!args.application.company.riskProfileAssessment.onboardingMode)
            throw new Error(ErrorForConvert_enum_1.default.enum["Onboarding mode cannot be empty"]);
        if (!args.application.company.riskProfileAssessment.ownershipStructureLayers)
            throw new Error(ErrorForConvert_enum_1.default.enum["Ownership structure layer cannot be empty"]);
        if (!args.application.company.riskProfileAssessment.paymentModes)
            throw new Error(ErrorForConvert_enum_1.default.enum["Payment mode cannot be empty"]);
        if (!args.application.company.riskProfileAssessment.productServiceComplexity)
            throw new Error(ErrorForConvert_enum_1.default.enum["Product service complexity cannot be empty"]);
        let countryOfOperation = [];
        if ((0, lodash_1.get)(args, 'application.company.riskProfileAssessment.countryOfOperations')) {
            args.application.company.riskProfileAssessment.countryOfOperations.forEach((c) => {
                var _a, _b;
                countryOfOperation.push(((_b = (_a = args.customFn) === null || _a === void 0 ? void 0 : _a.parseCountry) === null || _b === void 0 ? void 0 : _b.call(_a, c.toUpperCase())) ||
                    c.toUpperCase());
            });
        }
        if ((0, lodash_1.get)(args, 'application.company.addresses.principalPlaceOfBusiness.country')) {
            countryOfOperation.push(((_b = (_a = args.customFn) === null || _a === void 0 ? void 0 : _a.parseCountry) === null || _b === void 0 ? void 0 : _b.call(_a, args.application.company.addresses.principalPlaceOfBusiness.country.toUpperCase())) ||
                args.application.company.addresses.principalPlaceOfBusiness.country.toUpperCase());
        }
        countryOfOperation = Array.from(new Set(countryOfOperation));
        if (!countryOfOperation.length)
            throw new Error(ErrorForConvert_enum_1.default.enum["Country of operations cannot be empty"]);
        // new if no service
        const isNewIncorp = Boolean(args.application.services.incorporation);
        return {
            type: "CORPORATE",
            assigneeId: args.assigneeId,
            domainId: [
                process.env.ARTEMIS_DOMAIN_ID
            ],
            other: {
                entityType: args.application.company.legalDetails.companyType,
                corporateWebsite: "",
                fatfjurisdiction: "",
                industry: ConvertEnum_1.default.ssic(args.application.company.ssic.primary.code),
                onBoardingMode: ConvertEnum_1.default.onboarding(args.application.company.riskProfileAssessment.onboardingMode),
                ownershipStructureLayer: args.application.company.riskProfileAssessment.ownershipStructureLayers,
                paymentMode: args.application.company.riskProfileAssessment.paymentModes,
                productServiceComplexity: args.application.company.riskProfileAssessment.productServiceComplexity,
                sourceOfFunds: "",
                natureOfBusinessRelationship: "",
                bankAccount: [],
                additionalInformation: ((_c = args.additional) === null || _c === void 0 ? void 0 : _c.additionalInformation) || "",
            },
            particular: {
                incorporated: true,
                name: args.application.company.companyName,
                alias: args.application.company.legalDetails.entityName ? [args.application.company.legalDetails.entityName] : undefined,
                formerName: args.application.company.legalDetails.historyName ? [args.application.company.legalDetails.historyName] : [],
                countryOfIncorporation: ((_e = (_d = args.customFn) === null || _d === void 0 ? void 0 : _d.parseCountry) === null || _e === void 0 ? void 0 : _e.call(_d, args.application.company.addresses.registeredAddress.country)) || ConvertEnum_1.default.shortCountry(args.application.company.addresses.registeredAddress.country),
                countryOfOperation,
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
                dateOfIncorporation: isNewIncorp ? undefined : args.application.company.legalDetails.registrationDate,
                email: [],
                imonumber: "",
                incorporateNumber: isNewIncorp ? "" : args.application.company.legalDetails.uen
            },
            profileReferenceId: ((_g = (_f = args.customFn) === null || _f === void 0 ? void 0 : _f.customerId) === null || _g === void 0 ? void 0 : _g.call(_f, args.application.company.companyName)) || args.application.company.companyName,
            referenceId: args.application.company.legalDetails.uen,
            active: true
        };
    },
    toSingleIndividualCrp(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
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
        const mandatory = {
            type: "INDIVIDUAL",
            roles: roles,
            other: {
                ownershipPercentage: member.sharesDetails.reduce((cur, next) => cur + next.sharePercentage, 0),
                bankAccount: [],
                sourceOfFunds: ConvertEnum_1.default.sourceOfFund((_a = member.personDetails.riskProfileAssessment) === null || _a === void 0 ? void 0 : _a.sourceOfFunds),
                status: "CURRENT",
                undischargedBankrupt: false,
                otherSourceOfFunds: (_b = args.additional) === null || _b === void 0 ? void 0 : _b.otherSourceOfFunds,
                additionalInformation: ((_c = args.additional) === null || _c === void 0 ? void 0 : _c.additionalInformation) || ""
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
                email: [],
                phone: [],
                formerName: ((_d = args.additional) === null || _d === void 0 ? void 0 : _d.formerName) || [],
                name: member.personDetails.personalDetails.fullName,
                dateOfBirth: member.personDetails.personalDetails.dateOfBirth,
                countryOfBirth: ((_f = (_e = args.customFn) === null || _e === void 0 ? void 0 : _e.parseCountry) === null || _f === void 0 ? void 0 : _f.call(_e, member.personDetails.personalDetails.countryOfBirth)) || ConvertEnum_1.default.shortCountry(member.personDetails.personalDetails.countryOfBirth),
                gender: (_g = member.personDetails.personalDetails.gender) === null || _g === void 0 ? void 0 : _g.toUpperCase(),
                identityDocumentType: documentType,
                // it should be fill or not listed in field. undefined when being parsed will gone.
                identityExpiryDate: documentType === "INTERNATIONAL PASSPORT" ? member.personDetails.personalDetails.idDocument.dateOfExpiration : undefined,
                identityIssuedDate: member.personDetails.personalDetails.idDocument.dateOfIssuance,
                identityNumber: member.personDetails.personalDetails.idDocument.idNumber,
                nationality: [
                    ((_j = (_h = args.customFn) === null || _h === void 0 ? void 0 : _h.parseCountry) === null || _j === void 0 ? void 0 : _j.call(_h, member.personDetails.personalDetails.nationality)) || ConvertEnum_1.default.shortCountry(member.personDetails.personalDetails.nationality)
                ],
                countryOfResidence: ((_l = (_k = args.customFn) === null || _k === void 0 ? void 0 : _k.parseCountry) === null || _l === void 0 ? void 0 : _l.call(_k, member.personDetails.address.country)) || ConvertEnum_1.default.shortCountry(member.personDetails.address.country),
                salutation: "",
            },
            profileReferenceId: ((_o = (_m = args.customFn) === null || _m === void 0 ? void 0 : _m.customerId) === null || _o === void 0 ? void 0 : _o.call(_m, member.personDetails.personalDetails.idDocument.idNumber)) || member.personDetails.personalDetails.idDocument.idNumber,
            active: true,
        };
        if ((_p = member.personDetails.contactDetails) === null || _p === void 0 ? void 0 : _p.email)
            mandatory.particular.email.push((_q = member.personDetails.contactDetails) === null || _q === void 0 ? void 0 : _q.email);
        if ((_r = member.personDetails.contactDetails) === null || _r === void 0 ? void 0 : _r.phoneNumber)
            mandatory.particular.phone.push((_s = member.personDetails.contactDetails) === null || _s === void 0 ? void 0 : _s.phoneNumber);
        return mandatory;
    },
    toSingleCorporateCrp(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
        let countryOfOperation = [];
        if ((0, lodash_1.get)(member, 'companyDetails.addresses.principalPlaceOfBusiness.country')) {
            countryOfOperation.push((_b = (_a = args.customFn) === null || _a === void 0 ? void 0 : _a.parseCountry) === null || _b === void 0 ? void 0 : _b.call(_a, member.companyDetails.addresses.principalPlaceOfBusiness.country));
        }
        countryOfOperation = Array.from(new Set(countryOfOperation));
        if (!countryOfOperation.length)
            throw new Error(ErrorForConvert_enum_1.default.enum["Country of operations cannot be empty"]);
        const mandatory = {
            type: "CORPORATE",
            roles: roles,
            other: {
                entityType: member.companyDetails.legalDetails.companyType,
                bankAccountNumber: [],
                ownershipStructureLayer: member.companyDetails.riskProfileAssessment.ownershipStructureLayers,
                status: "CURRENT",
                additionalInformation: ((_c = args.additional) === null || _c === void 0 ? void 0 : _c.additionalInformation) || "",
                ownershipPercentage: (_d = member.sharesDetails) === null || _d === void 0 ? void 0 : _d.reduce((cur, next) => cur + next.sharePercentage, 0),
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
                countryOfIncorporation: ((_f = (_e = args.customFn) === null || _e === void 0 ? void 0 : _e.parseCountry) === null || _f === void 0 ? void 0 : _f.call(_e, member.companyDetails.legalDetails.countryOfRegisteredBusiness)) || ConvertEnum_1.default.shortCountry(member.companyDetails.legalDetails.countryOfRegisteredBusiness),
                countryOfOperation,
                dateOfIncorporation: member.companyDetails.legalDetails.registrationDate,
                email: [],
                phone: [],
                formerName: ((_g = args.additional) === null || _g === void 0 ? void 0 : _g.formerName) || [],
                imonumber: '',
                incorporated: true,
                incorporateNumber: member.companyDetails.legalDetails.businessRegistrationNumber,
                name: member.companyDetails.companyName,
            },
            profileReferenceId: ((_j = (_h = args.customFn) === null || _h === void 0 ? void 0 : _h.customerId) === null || _j === void 0 ? void 0 : _j.call(_h, member.companyDetails.companyName)) || member.companyDetails.companyName,
            active: true
        };
        // === add optional === //
        if ((_k = member.personDetails.contactDetails) === null || _k === void 0 ? void 0 : _k.email)
            mandatory.particular.email.push(member.personDetails.contactDetails.email);
        if ((_l = member.personDetails.contactDetails) === null || _l === void 0 ? void 0 : _l.phoneNumber)
            mandatory.particular.phone.push((_m = member.personDetails.contactDetails) === null || _m === void 0 ? void 0 : _m.phoneNumber);
        return mandatory;
    }
};
exports.default = ConvertToRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydFRvUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9ncm9mLWFydGVtaXMvdjMvdXRpbHMvQ29udmVydFRvUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQTRCO0FBTzVCLGdFQUFnRDtBQUNoRCwrRUFBaUg7QUFDakgsNERBQW1DO0FBRW5DLE1BQU0sZ0JBQWdCLEdBQUc7SUFDckIsbUJBQW1CLENBQUMsSUFXbkI7O1FBQ0csMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQWUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFBO1FBRTFGLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7UUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7UUFDNUgsK0ZBQStGO1FBQy9GLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUFlLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQTtRQUM5SCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsY0FBYztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQWUsQ0FBQyxJQUFJLENB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