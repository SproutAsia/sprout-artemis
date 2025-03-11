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
const ConvertToRequest = {
    toCorporateCustomer(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        // handle missing mandatory
        if (!args.assigneeId)
            throw new Error(ErrorForConvert_enum_1.default.enum['Assignee ID cannot be empty']);
        if (!args.application.company.companyName)
            throw new Error(ErrorForConvert_enum_1.default.enum['Company name cannot be empty']);
        if (!args.application.company.legalDetails.companyType)
            throw new Error(ErrorForConvert_enum_1.default.enum['Entity type cannot be empty']);
        // artemis use full name of industry code instead of just code so that's why we use description
        if (!args.application.company.ssic.primary.description)
            throw new Error(ErrorForConvert_enum_1.default.enum['Industry code cannot be empty']);
        if (!args.application.company.riskProfileAssessment.onboardingMode)
            throw new Error(ErrorForConvert_enum_1.default.enum['Onboarding mode cannot be empty']);
        if (!args.application.company.riskProfileAssessment.ownershipStructureLayers)
            throw new Error(ErrorForConvert_enum_1.default.enum['Ownership structure layer cannot be empty']);
        if (!args.application.company.riskProfileAssessment.paymentModes)
            throw new Error(ErrorForConvert_enum_1.default.enum['Payment mode cannot be empty']);
        if (!args.application.company.riskProfileAssessment.productServiceComplexity)
            throw new Error(ErrorForConvert_enum_1.default.enum['Product service complexity cannot be empty']);
        let countryOfOperation = [];
        if ((0, lodash_1.get)(args, 'application.company.riskProfileAssessment.countryOfOperations', [])) {
            args.application.company.riskProfileAssessment.countryOfOperations.forEach((c) => {
                var _a, _b;
                countryOfOperation.push(((_b = (_a = args.customFn) === null || _a === void 0 ? void 0 : _a.parseCountry) === null || _b === void 0 ? void 0 : _b.call(_a, c.toUpperCase())) || c.toUpperCase());
            });
        }
        // Nadia request transactionCountries to be mapped to countryOfOperation
        if ((0, lodash_1.get)(args, 'application.company.riskProfileAssessment.transactionCountries', [])) {
            args.application.company.riskProfileAssessment.transactionCountries.forEach((c) => {
                var _a, _b;
                countryOfOperation.push(((_b = (_a = args.customFn) === null || _a === void 0 ? void 0 : _a.parseCountry) === null || _b === void 0 ? void 0 : _b.call(_a, c.toUpperCase())) || c.toUpperCase());
            });
        }
        if ((0, lodash_1.get)(args, 'application.company.addresses.principalPlaceOfBusiness.country')) {
            countryOfOperation.push(((_b = (_a = args.customFn) === null || _a === void 0 ? void 0 : _a.parseCountry) === null || _b === void 0 ? void 0 : _b.call(_a, args.application.company.addresses.principalPlaceOfBusiness.country.toUpperCase())) ||
                args.application.company.addresses.principalPlaceOfBusiness.country.toUpperCase());
        }
        countryOfOperation = Array.from(new Set(countryOfOperation));
        if (!countryOfOperation.length)
            throw new Error(ErrorForConvert_enum_1.default.enum['Country of operations cannot be empty']);
        // new if no service
        const isIncorporated = !args.application.services.incorporation;
        return {
            type: 'CORPORATE',
            assigneeId: args.assigneeId,
            domainId: [process.env.ARTEMIS_DOMAIN_ID],
            other: {
                entityType: args.application.company.legalDetails.companyType,
                corporateWebsite: '',
                fatfjurisdiction: '',
                industry: ConvertEnum_1.default.ssic(args.application.company.ssic.primary.code),
                onBoardingMode: ConvertEnum_1.default.onboarding(args.application.company.riskProfileAssessment.onboardingMode),
                ownershipStructureLayer: args.application.company.riskProfileAssessment
                    .ownershipStructureLayers,
                paymentMode: args.application.company.riskProfileAssessment.paymentModes,
                productServiceComplexity: args.application.company.riskProfileAssessment
                    .productServiceComplexity,
                sourceOfFunds: '',
                natureOfBusinessRelationship: '',
                bankAccount: [],
                additionalInformation: ((_c = args.additional) === null || _c === void 0 ? void 0 : _c.additionalInformation) || '',
            },
            particular: {
                incorporated: isIncorporated,
                name: args.application.company.companyName,
                alias: 
                // not necessary to map alias name
                // https://sproutasiacom-my.sharepoint.com/:fl:/g/personal/caiyu_low_grof_co/EZdgJdxXULtAgZn_H8IFfN8BoAtZpvxa3NcP-5yTZc2-og?e=9YHtik&nav=cz0lMkZwZXJzb25hbCUyRmNhaXl1X2xvd19ncm9mX2NvJmQ9YiUyMW5JSDkzaW1NMmtDSGdMb2RnemtqZ3NYUk1hTzZrc1JKa28zbTlPTEQzeGg0a004SDB5MGRRWmtyWlhqRHgyaEwmZj0wMVREQTY2UDRYTUFTNVlWMlFYTkFJREdQN0Q3QkFLN0c3JmM9JTJGJTNGbWluaWZpZWQlM0Q1MWQwMWNhOS0zZGY5LTQ5YTYtOTI1OC0wYmQxYTM3NjYwNzUlMjZzZXElM0QxMTAzMyZhPUxvb3BBcHAmcD0lNDBmbHVpZHglMkZsb29wLXBhZ2UtY29udGFpbmVy
                // args.application.company.legalDetails.entityName
                //   ? [args.application.company.legalDetails.entityName]
                //   :
                undefined,
                formerName: args.application.company.legalDetails.historyName
                    ? [args.application.company.legalDetails.historyName]
                    : [],
                countryOfIncorporation: ((_e = (_d = args.customFn) === null || _d === void 0 ? void 0 : _d.parseCountry) === null || _e === void 0 ? void 0 : _e.call(_d, args.application.company.addresses.registeredAddress.country)) ||
                    ConvertEnum_1.default.shortCountry(args.application.company.addresses.registeredAddress.country),
                countryOfOperation,
                // no need to send address anymore
                // https://sproutasiacom-my.sharepoint.com/:fl:/r/personal/caiyu_low_grof_co/Documents/Microsoft%20Teams%20Chat%20Files/Svc%20x%20engr%20tracker.loop?d=wdc256097505740bb8199ff1fc2057cdf&csf=1&web=1&e=NxlLFg&nav=cz0lMkZwZXJzb25hbCUyRmNhaXl1X2xvd19ncm9mX2NvJmQ9YiUyMW5JSDkzaW1NMmtDSGdMb2RnemtqZ3NYUk1hTzZrc1JKa28zbTlPTEQzeGg0a004SDB5MGRRWmtyWlhqRHgyaEwmZj0wMVREQTY2UDRYTUFTNVlWMlFYTkFJREdQN0Q3QkFLN0c3JmM9JTJGJTNGbWluaWZpZWQlM0QzMGExOWI3Zi05MTllLTQ1ZTUtYmJhNS1hMDQ1ZDE1MGQ5ZmUlMjZzZXElM0QyMDc2NyZhPUxvb3BBcHAmcD0lNDBmbHVpZHglMkZsb29wLXBhZ2UtY29udGFpbmVy
                // https://gro-engineer.atlassian.net/browse/G10-3397
                // address: Formatter.toGrofAddress({
                //   country: args.application.company.addresses.registeredAddress.country,
                //   blockHouse:
                //     args.application.company.addresses.registeredAddress.blockHouse,
                //   buildingName:
                //     args.application.company.addresses.registeredAddress.buildingName,
                //   level: args.application.company.addresses.registeredAddress.level,
                //   postalCode:
                //     args.application.company.addresses.registeredAddress.postalCode,
                //   streetName:
                //     args.application.company.addresses.registeredAddress.streetName,
                //   unit: args.application.company.addresses.registeredAddress.unit,
                //   addressLine1:
                //     args.application.company.addresses.registeredAddress.addressLine1,
                //   addressLine2:
                //     args.application.company.addresses.registeredAddress.addressLine2,
                // }),
                dateOfIncorporation: isIncorporated
                    ? args.application.company.legalDetails.registrationDate
                    : undefined,
                email: [],
                imonumber: '',
                incorporateNumber: isIncorporated
                    ? args.application.company.legalDetails.uen
                    : '',
            },
            profileReferenceId: ((_g = (_f = args.customFn) === null || _f === void 0 ? void 0 : _f.customerId) === null || _g === void 0 ? void 0 : _g.call(_f, args.application.company.companyName)) ||
                args.application.company.companyName,
            referenceId: isIncorporated
                ? ((_j = (_h = args.customFn) === null || _h === void 0 ? void 0 : _h.customerId) === null || _j === void 0 ? void 0 : _j.call(_h, args.application.company.legalDetails.uen)) || args.application.company.legalDetails.uen
                : ((_l = (_k = args.customFn) === null || _k === void 0 ? void 0 : _k.customerId) === null || _l === void 0 ? void 0 : _l.call(_k, args.application.company.companyName)) ||
                    args.application.company.companyName,
            // use company.isActiveCustomer for mapping
            // https://sproutasiacom-my.sharepoint.com/:fl:/r/personal/caiyu_low_grof_co/Documents/Microsoft%20Teams%20Chat%20Files/Svc%20x%20engr%20tracker.loop?d=wdc256097505740bb8199ff1fc2057cdf&csf=1&web=1&e=TrSXn9&nav=cz0lMkZwZXJzb25hbCUyRmNhaXl1X2xvd19ncm9mX2NvJmQ9YiUyMW5JSDkzaW1NMmtDSGdMb2RnemtqZ3NYUk1hTzZrc1JKa28zbTlPTEQzeGg0a004SDB5MGRRWmtyWlhqRHgyaEwmZj0wMVREQTY2UDRYTUFTNVlWMlFYTkFJREdQN0Q3QkFLN0c3JmM9JTJGJTNGbWluaWZpZWQlM0RiYjhmMGExMS01ZjVkLTQ3OTEtODEwMy0yZmYzN2JiYTVlYzIlMjZzZXElM0QxNjUwOSZhPUxvb3BBcHAmcD0lNDBmbHVpZHglMkZsb29wLXBhZ2UtY29udGFpbmVy
            active: args.application.company.isActiveCustomer,
        };
    },
    toSingleIndividualCrp(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        const member = args.member;
        // handle missing mandatory
        if (!member.personDetails.personalDetails.fullName)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToIndividual.enum['Name cannot be empty']);
        const nationalities = [];
        if (member.personDetails.personalDetails.nationality) {
            nationalities.push((_b = (_a = args.customFn) === null || _a === void 0 ? void 0 : _a.parseCountry) === null || _b === void 0 ? void 0 : _b.call(_a, member.personDetails.personalDetails.nationality));
        }
        if (Array.isArray((_d = (_c = member.personDetails) === null || _c === void 0 ? void 0 : _c.riskProfileAssessment) === null || _d === void 0 ? void 0 : _d.nationalities) &&
            ((_f = (_e = member.personDetails) === null || _e === void 0 ? void 0 : _e.riskProfileAssessment) === null || _f === void 0 ? void 0 : _f.isMultipleNationalities)) {
            (_h = (_g = member.personDetails) === null || _g === void 0 ? void 0 : _g.riskProfileAssessment) === null || _h === void 0 ? void 0 : _h.nationalities.forEach((n) => {
                var _a, _b, _c, _d;
                const country = (_b = (_a = args.customFn) === null || _a === void 0 ? void 0 : _a.parseCountry) === null || _b === void 0 ? void 0 : _b.call(_a, n);
                if (country && !nationalities.includes(country))
                    nationalities.push((_d = (_c = args.customFn) === null || _c === void 0 ? void 0 : _c.parseCountry) === null || _d === void 0 ? void 0 : _d.call(_c, n));
            });
        }
        if (!nationalities.length)
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
            type: 'INDIVIDUAL',
            roles: roles,
            other: {
                ownershipPercentage: member.sharesDetails.reduce((cur, next) => cur + next.sharePercentage, 0),
                bankAccount: [],
                // not required to send sourceOfFunds anymore
                // https://www.notion.so/sproutasia/Update-ekyc-fields-admin-and-user-app-1127be0883d2800fa4e6f3a974f1a2b7?pvs=4
                // sourceOfFunds: ConvertToArtemisEnum.sourceOfFund(
                //   member.personDetails.riskProfileAssessment?.sourceOfFunds
                // ),
                status: 'CURRENT',
                undischargedBankrupt: false,
                // not required to send sourceOfFunds anymore
                // otherSourceOfFunds: args.additional?.otherSourceOfFunds,
                additionalInformation: ((_j = args.additional) === null || _j === void 0 ? void 0 : _j.additionalInformation) || '',
            },
            particular: {
                // not required to send address anymore
                // https://sproutasiacom-my.sharepoint.com/:fl:/r/personal/caiyu_low_grof_co/Documents/Microsoft%20Teams%20Chat%20Files/Svc%20x%20engr%20tracker.loop?d=wdc256097505740bb8199ff1fc2057cdf&csf=1&web=1&e=GQPXp2&nav=cz0lMkZwZXJzb25hbCUyRmNhaXl1X2xvd19ncm9mX2NvJmQ9YiUyMW5JSDkzaW1NMmtDSGdMb2RnemtqZ3NYUk1hTzZrc1JKa28zbTlPTEQzeGg0a004SDB5MGRRWmtyWlhqRHgyaEwmZj0wMVREQTY2UDRYTUFTNVlWMlFYTkFJREdQN0Q3QkFLN0c3JmM9JTJGJTNGbWluaWZpZWQlM0QzMDRjMjNjYy04M2UyLTRlMWMtODk3Ny0yMWQ3OWY0YmE3YjYlMjZzZXElM0QxNjUwMCZhPUxvb3BBcHAmcD0lNDBmbHVpZHglMkZsb29wLXBhZ2UtY29udGFpbmVy
                // https://www.notion.so/sproutasia/Update-ekyc-fields-admin-and-user-app-1127be0883d2800fa4e6f3a974f1a2b7?pvs=4
                // address: Formatter.toGrofAddress({
                //   blockHouse: member.personDetails.address.blockHouse,
                //   buildingName: member.personDetails.address.buildingName,
                //   country: member.personDetails.address.country,
                //   level: member.personDetails.address.level,
                //   postalCode: member.personDetails.address.postalCode,
                //   streetName: member.personDetails.address.streetName,
                //   unit: member.personDetails.address.unit,
                // }),
                alias: ((_l = (_k = member.personDetails.personalDetails) === null || _k === void 0 ? void 0 : _k.alias) === null || _l === void 0 ? void 0 : _l.filter((alias) => alias)) || [],
                email: [],
                phone: [],
                formerName: ((_m = args.additional) === null || _m === void 0 ? void 0 : _m.formerName) || [],
                name: member.personDetails.personalDetails.fullName,
                dateOfBirth: member.personDetails.personalDetails.dateOfBirth,
                countryOfBirth: ((_p = (_o = args.customFn) === null || _o === void 0 ? void 0 : _o.parseCountry) === null || _p === void 0 ? void 0 : _p.call(_o, member.personDetails.personalDetails.countryOfBirth)) ||
                    ConvertEnum_1.default.shortCountry(member.personDetails.personalDetails.countryOfBirth),
                gender: (_q = member.personDetails.personalDetails.gender) === null || _q === void 0 ? void 0 : _q.toUpperCase(),
                identityDocumentType: documentType,
                // it should be fill or not listed in field. undefined when being parsed will gone.
                identityExpiryDate: documentType === 'INTERNATIONAL PASSPORT'
                    ? member.personDetails.personalDetails.idDocument.dateOfExpiration
                    : undefined,
                identityIssuedDate: member.personDetails.personalDetails.idDocument.dateOfIssuance,
                identityNumber: member.personDetails.personalDetails.idDocument.idNumber,
                nationality: nationalities,
                countryOfResidence: ((_s = (_r = args.customFn) === null || _r === void 0 ? void 0 : _r.parseCountry) === null || _s === void 0 ? void 0 : _s.call(_r, member.personDetails.address.country)) ||
                    ConvertEnum_1.default.shortCountry(member.personDetails.address.country),
                salutation: '',
            },
            profileReferenceId: ((_u = (_t = args.customFn) === null || _t === void 0 ? void 0 : _t.customerId) === null || _u === void 0 ? void 0 : _u.call(_t, member.personDetails.personalDetails.idDocument.idNumber)) || member.personDetails.personalDetails.idDocument.idNumber,
            active: false, // individual crp value must be false
        };
        // if (member.personDetails.contactDetails?.email)
        //   mandatory.particular.email.push(
        //     member.personDetails.contactDetails?.email
        //   );
        // if (member.personDetails.contactDetails?.phoneNumber)
        //   mandatory.particular.phone.push(
        //     member.personDetails.contactDetails?.phoneNumber
        //   );
        return mandatory;
    },
    toSingleCorporateCrp(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const member = args.member;
        const roles = member.appointments.map((a) => {
            return {
                role: 'SHAREHOLDER',
                appointedDate: a.appointmentDate,
                resignedDate: a.resignedDate,
            };
        });
        // handle empty mandatory field
        if (!member.companyDetails.legalDetails.countryOfRegisteredBusiness)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToCorporate.enum['Country of incorporation cannot be empty']);
        if (!member.companyDetails.riskProfileAssessment.countryOfOperations)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToCorporate.enum['Country of operation cannot be empty']);
        if (!member.companyDetails.legalDetails.companyType)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToCorporate.enum['Entity type cannot be empty']);
        if (!member.companyDetails.companyName)
            throw new Error(ErrorForConvert_enum_1.ErrorForConvertToCorporate.enum['Company name cannot be empty']);
        let countryOfOperation = [];
        if ((0, lodash_1.get)(member, 'companyDetails.addresses.principalPlaceOfBusiness.country')) {
            countryOfOperation.push((_b = (_a = args.customFn) === null || _a === void 0 ? void 0 : _a.parseCountry) === null || _b === void 0 ? void 0 : _b.call(_a, member.companyDetails.addresses.principalPlaceOfBusiness.country));
        }
        if ((0, lodash_1.get)(member, 'companyDetails.legalDetails.countryOfRegisteredBusiness')) {
            countryOfOperation.push((_d = (_c = args.customFn) === null || _c === void 0 ? void 0 : _c.parseCountry) === null || _d === void 0 ? void 0 : _d.call(_c, member.companyDetails.legalDetails.countryOfRegisteredBusiness));
        }
        countryOfOperation = Array.from(new Set(countryOfOperation));
        if (!countryOfOperation.length)
            throw new Error(ErrorForConvert_enum_1.default.enum['Country of operations cannot be empty']);
        const mandatory = {
            type: 'CORPORATE',
            roles: roles,
            other: {
                entityType: ConvertEnum_1.default.entityType(member.companyDetails.legalDetails.companyType),
                bankAccountNumber: [],
                ownershipStructureLayer: member.companyDetails.riskProfileAssessment.ownershipStructureLayers,
                status: 'CURRENT',
                additionalInformation: ((_e = args.additional) === null || _e === void 0 ? void 0 : _e.additionalInformation) || '',
                ownershipPercentage: (_f = member.sharesDetails) === null || _f === void 0 ? void 0 : _f.reduce((cur, next) => cur + next.sharePercentage, 0),
            },
            particular: {
                // not required to send address anymore
                // https://sproutasiacom-my.sharepoint.com/:fl:/r/personal/caiyu_low_grof_co/Documents/Microsoft%20Teams%20Chat%20Files/Svc%20x%20engr%20tracker.loop?d=wdc256097505740bb8199ff1fc2057cdf&csf=1&web=1&e=GQPXp2&nav=cz0lMkZwZXJzb25hbCUyRmNhaXl1X2xvd19ncm9mX2NvJmQ9YiUyMW5JSDkzaW1NMmtDSGdMb2RnemtqZ3NYUk1hTzZrc1JKa28zbTlPTEQzeGg0a004SDB5MGRRWmtyWlhqRHgyaEwmZj0wMVREQTY2UDRYTUFTNVlWMlFYTkFJREdQN0Q3QkFLN0c3JmM9JTJGJTNGbWluaWZpZWQlM0QzMDRjMjNjYy04M2UyLTRlMWMtODk3Ny0yMWQ3OWY0YmE3YjYlMjZzZXElM0QxNjUwMCZhPUxvb3BBcHAmcD0lNDBmbHVpZHglMkZsb29wLXBhZ2UtY29udGFpbmVy
                // https://www.notion.so/sproutasia/Update-ekyc-fields-admin-and-user-app-1127be0883d2800fa4e6f3a974f1a2b7?pvs=4
                // address: Formatter.toGrofAddress({
                //   blockHouse:
                //     member.companyDetails.addresses.registeredAddress.blockHouse,
                //   buildingName:
                //     member.companyDetails.addresses.registeredAddress.buildingName,
                //   level: member.companyDetails.addresses.registeredAddress.level,
                //   postalCode:
                //     member.companyDetails.addresses.registeredAddress.postalCode,
                //   streetName:
                //     member.companyDetails.addresses.registeredAddress.streetName,
                //   unit: member.companyDetails.addresses.registeredAddress.unit,
                //   country: member.companyDetails.addresses.registeredAddress.country,
                //   addressLine1:
                //     member.companyDetails.addresses.registeredAddress.addressLine1,
                //   addressLine2:
                //     member.companyDetails.addresses.registeredAddress.addressLine2,
                // }),
                /** NOTE: Removed the alias name because it is not necessary */
                alias: [],
                countryOfIncorporation: ((_h = (_g = args.customFn) === null || _g === void 0 ? void 0 : _g.parseCountry) === null || _h === void 0 ? void 0 : _h.call(_g, member.companyDetails.legalDetails.countryOfRegisteredBusiness)) ||
                    ConvertEnum_1.default.shortCountry(member.companyDetails.legalDetails.countryOfRegisteredBusiness),
                countryOfOperation,
                dateOfIncorporation: member.companyDetails.legalDetails.registrationDate,
                email: [],
                phone: [],
                formerName: ((_j = args.additional) === null || _j === void 0 ? void 0 : _j.formerName) || [],
                imonumber: '',
                incorporated: true,
                incorporateNumber: member.companyDetails.legalDetails.businessRegistrationNumber,
                name: member.companyDetails.companyName,
            },
            profileReferenceId: ((_l = (_k = args.customFn) === null || _k === void 0 ? void 0 : _k.customerId) === null || _l === void 0 ? void 0 : _l.call(_k, member.companyDetails.companyName)) ||
                member.companyDetails.companyName,
            active: true,
        };
        // === add optional === //
        // if (member.personDetails.contactDetails?.email)
        //   mandatory.particular.email.push(
        //     member.personDetails.contactDetails.email
        //   );
        // if (member.personDetails.contactDetails?.phoneNumber)
        //   mandatory.particular.phone.push(
        //     member.personDetails.contactDetails?.phoneNumber
        //   );
        return mandatory;
    },
};
exports.default = ConvertToRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydFRvUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9ncm9mLWFydGVtaXMvdjMvdXRpbHMvQ29udmVydFRvUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTZCO0FBTzdCLGdFQUFpRDtBQUNqRCwrRUFHZ0M7QUFFaEMsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixtQkFBbUIsQ0FBQyxJQVduQjs7UUFDQywyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQWUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQWUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVztZQUNwRCxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUFlLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUN2RSwrRkFBK0Y7UUFDL0YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNwRCxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUFlLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsY0FBYztZQUNoRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUFlLENBQUMsSUFBSSxDQUFDLGlDQUFp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