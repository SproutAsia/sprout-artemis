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
            assigneeId: process.env.ARTEMIS_USER_ID,
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
                entityType: member.companyDetails.legalDetails.entityType,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydFRvUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9ncm9mLWFydGVtaXMvdjMvdXRpbHMvQ29udmVydFRvUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQTRCO0FBTzVCLGdFQUFnRDtBQUNoRCwrRUFBaUg7QUFDakgsNERBQW1DO0FBRW5DLE1BQU0sZ0JBQWdCLEdBQUc7SUFDckIsbUJBQW1CLENBQUMsSUFVbkI7O1FBQ0csMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7UUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7UUFDNUgsK0ZBQStGO1FBQy9GLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUFlLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQTtRQUM5SCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsY0FBYztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFBO1FBQzVJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0I7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUFlLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQTtRQUNoSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsWUFBWTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQWUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFBO1FBQ3ZJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0I7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUFlLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQTtRQUVqSyxJQUFJLGtCQUFrQixHQUFHLEVBQUUsQ0FBQTtRQUMzQixJQUFJLElBQUEsWUFBRyxFQUFDLElBQUksRUFBRSwrREFBK0QsQ0FBQyxFQUFFO1lBQzVFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFOztnQkFDN0Usa0JBQWtCLENBQUMsSUFBSSxDQUNuQixDQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxZQUFZLG1EQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDOUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUNsQixDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDTDtRQUNELElBQUksSUFBQSxZQUFHLEVBQUMsSUFBSSxFQUFFLGdFQUFnRSxDQUFDLEVBQUU7WUFDN0Usa0JBQWtCLENBQUMsSUFBSSxDQUNuQixDQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxZQUFZLG1EQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2hILElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQ3BGLENBQUE7U0FDSjtRQUNELGtCQUFrQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUE7UUFFOUcsb0JBQW9CO1FBQ3BCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUVwRSxPQUFPO1lBQ0gsSUFBSSxFQUFFLFdBQVc7WUFDakIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZTtZQUN2QyxRQUFRLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUI7YUFDaEM7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXO2dCQUM3RCxnQkFBZ0IsRUFBRSxFQUFFO2dCQUNwQixnQkFBZ0IsRUFBRSxFQUFFO2dCQUNwQixRQUFRLEVBQUUscUJBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUMvRSxjQUFjLEVBQUUscUJBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQztnQkFDOUcsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsd0JBQXdCO2dCQUNoRyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsWUFBWTtnQkFDeEUsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsd0JBQXdCO2dCQUNqRyxhQUFhLEVBQUUsRUFBRTtnQkFDakIsNEJBQTRCLEVBQUUsRUFBRTtnQkFDaEMsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YscUJBQXFCLEVBQUUsQ0FBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLHFCQUFxQixLQUFJLEVBQUU7YUFDdEU7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXO2dCQUMxQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7Z0JBQ3hILFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDeEgsc0JBQXNCLEVBQUUsQ0FBQSxNQUFBLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsWUFBWSxtREFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUkscUJBQW9CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ROLGtCQUFrQjtnQkFDbEIsT0FBTyxFQUFFLG1CQUFTLENBQUMsYUFBYSxDQUFDO29CQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLE9BQU87b0JBQ3JFLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsVUFBVTtvQkFDM0UsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO29CQUMvRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUs7b0JBQ2pFLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsVUFBVTtvQkFDM0UsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVO29CQUMzRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUk7b0JBQy9ELFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsWUFBWTtvQkFDL0UsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO2lCQUNsRixDQUFDO2dCQUNGLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCO2dCQUNyRyxLQUFLLEVBQUUsRUFBRTtnQkFDVCxTQUFTLEVBQUUsRUFBRTtnQkFDYixpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUc7YUFDbEY7WUFDRCxrQkFBa0IsRUFBRSxDQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxVQUFVLG1EQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDN0gsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHO1lBQ3RELE1BQU0sRUFBRSxJQUFJO1NBQ2MsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QscUJBQXFCLENBQUMsSUFXckI7O1FBQ0csTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUUxQiwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFFBQVE7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUEyQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7UUFDN0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFdBQVc7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUEyQixDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7UUFDdkksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU87WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUEyQixDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUE7UUFFcEksWUFBWTtRQUNaLE1BQU0sWUFBWSxHQUFHLHFCQUFvQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFNUcsUUFBUTtRQUNSLE1BQU0sS0FBSyxHQUFHLHFCQUFvQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN6RSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUEyQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7UUFFNUYsTUFBTSxTQUFTLEdBQUc7WUFDZCxJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRTtnQkFDSCxtQkFBbUIsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztnQkFDOUYsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsYUFBYSxFQUFFLHFCQUFvQixDQUFDLFlBQVksQ0FBQyxNQUFBLE1BQU0sQ0FBQyxhQUFhLENBQUMscUJBQXFCLDBDQUFFLGFBQWEsQ0FBQztnQkFDM0csTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLG9CQUFvQixFQUFFLEtBQUs7Z0JBQzNCLGtCQUFrQixFQUFFLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsa0JBQWtCO2dCQUN2RCxxQkFBcUIsRUFBRSxDQUFBLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUscUJBQXFCLEtBQUksRUFBRTthQUN0RTtZQUNELFVBQVUsRUFBRTtnQkFDUixPQUFPLEVBQUUsbUJBQVMsQ0FBQyxhQUFhLENBQUM7b0JBQzdCLFVBQVUsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVO29CQUNuRCxZQUFZLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWTtvQkFDdkQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU87b0JBQzdDLEtBQUssRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLO29CQUN6QyxVQUFVLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVTtvQkFDbkQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVU7b0JBQ25ELElBQUksRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2lCQUMxQyxDQUFDO2dCQUNGLEtBQUssRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLO2dCQUNqRCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxVQUFVLEVBQUUsQ0FBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLFVBQVUsS0FBSSxFQUFFO2dCQUM3QyxJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUTtnQkFDbkQsV0FBVyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFdBQVc7Z0JBQzdELGNBQWMsRUFBRSxDQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxZQUFZLG1EQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxLQUFJLHFCQUFvQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUM7Z0JBQzVMLE1BQU0sRUFBRSxNQUFBLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sMENBQUUsV0FBVyxFQUFFO2dCQUNsRSxvQkFBb0IsRUFBRSxZQUFZO2dCQUNsQyxtRkFBbUY7Z0JBQ25GLGtCQUFrQixFQUFFLFlBQVksS0FBSyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTO2dCQUM1SSxrQkFBa0IsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsY0FBYztnQkFDbEYsY0FBYyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUN4RSxXQUFXLEVBQUU7b0JBQ1QsQ0FBQSxNQUFBLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsWUFBWSxtREFBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSSxxQkFBb0IsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO2lCQUN6SztnQkFDRCxrQkFBa0IsRUFBRSxDQUFBLE1BQUEsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxZQUFZLG1EQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFJLHFCQUFvQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ2xLLFVBQVUsRUFBRSxFQUFFO2FBQ2pCO1lBQ0Qsa0JBQWtCLEVBQUUsQ0FBQSxNQUFBLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsVUFBVSxtREFBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFDckssTUFBTSxFQUFFLElBQUk7U0FDVSxDQUFBO1FBRTFCLElBQUksTUFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsMENBQUUsS0FBSztZQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFBLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYywwQ0FBRSxLQUFLLENBQUMsQ0FBQTtRQUMzSCxJQUFJLE1BQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLDBDQUFFLFdBQVc7WUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2pGLE1BQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLDBDQUFFLFdBQVcsQ0FDbkQsQ0FBQTtRQUVELE9BQU8sU0FBUyxDQUFBO0lBQ3BCLENBQUM7SUFDRCxvQkFBb0IsQ0FBQyxJQVdwQjs7UUFDRyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBRTFCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsT0FBTztnQkFDSCxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsYUFBYSxFQUFFLENBQUMsQ0FBQyxlQUFlO2dCQUNoQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLFlBQVk7YUFDSyxDQUFBO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO1FBRUYsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQywyQkFBMkI7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUEwQixDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUE7UUFDakssSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsbUJBQW1CO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBMEIsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFBO1FBQzlKLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBMEIsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFBO1FBQ25JLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVc7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUEwQixDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUE7UUFFeEgsSUFBSSxrQkFBa0IsR0FBRyxFQUFFLENBQUE7UUFDM0IsSUFBSSxJQUFBLFlBQUcsRUFBQyxNQUFNLEVBQUUsMkRBQTJELENBQUMsRUFBRTtZQUMxRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBQSxNQUFBLElBQUksQ0FBQyxRQUFRLDBDQUFFLFlBQVksbURBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUMzSDtRQUNELGtCQUFrQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBZSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUE7UUFFOUcsTUFBTSxTQUFTLEdBQUc7WUFDZCxJQUFJLEVBQUUsV0FBVztZQUNqQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRTtnQkFDSCxVQUFVLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsVUFBVTtnQkFDekQsaUJBQWlCLEVBQUUsRUFBRTtnQkFDckIsdUJBQXVCLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0I7Z0JBQzdGLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixxQkFBcUIsRUFBRSxDQUFBLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUscUJBQXFCLEtBQUksRUFBRTtnQkFDbkUsbUJBQW1CLEVBQUUsTUFBQSxNQUFNLENBQUMsYUFBYSwwQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7YUFDbEc7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLG1CQUFTLENBQUMsYUFBYSxDQUFDO29CQUM3QixVQUFVLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsVUFBVTtvQkFDeEUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFlBQVk7b0JBQzVFLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLO29CQUM5RCxVQUFVLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsVUFBVTtvQkFDeEUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVU7b0JBQ3hFLElBQUksRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJO29CQUM1RCxPQUFPLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsT0FBTztvQkFDbEUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFlBQVk7b0JBQzVFLFlBQVksRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO2lCQUMvRSxDQUFDO2dCQUNGLEtBQUssRUFBRTtvQkFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVc7aUJBQ3BDO2dCQUNELHNCQUFzQixFQUFFLENBQUEsTUFBQSxNQUFBLElBQUksQ0FBQyxRQUFRLDBDQUFFLFlBQVksbURBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUMsS0FBSSxxQkFBb0IsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsMkJBQTJCLENBQUM7Z0JBQzFOLGtCQUFrQjtnQkFDbEIsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCO2dCQUN4RSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxVQUFVLEVBQUUsQ0FBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLFVBQVUsS0FBSSxFQUFFO2dCQUM3QyxTQUFTLEVBQUUsRUFBRTtnQkFDYixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsMEJBQTBCO2dCQUNoRixJQUFJLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXO2FBQzFDO1lBQ0Qsa0JBQWtCLEVBQUUsQ0FBQSxNQUFBLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsVUFBVSxtREFBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVztZQUN2SCxNQUFNLEVBQUUsSUFBSTtTQUNTLENBQUE7UUFFekIsMEJBQTBCO1FBQzFCLElBQUksTUFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsMENBQUUsS0FBSztZQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxSCxJQUFJLE1BQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLDBDQUFFLFdBQVc7WUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2pGLE1BQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLDBDQUFFLFdBQVcsQ0FDbkQsQ0FBQTtRQUVELE9BQU8sU0FBUyxDQUFBO0lBQ3BCLENBQUM7Q0FDSixDQUFBO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUEifQ==