"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertEnum_1 = __importDefault(require("./ConvertEnum"));
const Formatter_1 = __importDefault(require("./Formatter"));
const ConvertToRequest = {
    toCorporateCustomer(args) {
        var _a, _b;
        // new if no service
        const isNewIncorp = Boolean(args.application.services.incorporation);
        // transferIn service is 
        const isTransferIn = Boolean(args.application.services.corpSec);
        // convert country of operations
        const countryOfOperations = args.application.company.riskProfileAssessment.countryOfOperations.map((c) => c.toUpperCase());
        const referenceId = isTransferIn ? args.application.company.legalDetails.uen : args.additional.referenceId;
        if (!referenceId)
            throw new Error("Reference ID cannot be null");
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
                formerName: ((_b = args.additional) === null || _b === void 0 ? void 0 : _b.formerName) || [],
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
            referenceId: isTransferIn ? args.application.company.legalDetails.uen : args.additional.referenceId,
            active: true
        };
    },
    toSingleIndividualCrp(args) {
        var _a, _b, _c;
        const member = args.member;
        // null check
        if (!member.companyDetails.companyName)
            throw new Error("Company name cannot be blank.");
        // pre-parse
        const documentType = ConvertEnum_1.default.documentType(member.personDetails.personalDetails.idDocument.type);
        // roles
        const roles = member.appointments.map((a) => {
            return {
                role: ConvertEnum_1.default.role(a.position),
                appointedDate: a.appointmentDate,
                resignedDate: a.resignedDate
            };
        });
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
                    country: ConvertEnum_1.default.shortCountry(member.personDetails.address.country),
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
                    country: ConvertEnum_1.default.shortCountry(member.companyDetails.addresses.registeredAddress.country),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydFRvUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9ncm9mLWFydGVtaXMvdjMvdXRpbHMvQ29udmVydFRvUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU1BLGdFQUFnRDtBQUNoRCw0REFBbUM7QUFHbkMsTUFBTSxnQkFBZ0IsR0FBRztJQUNyQixtQkFBbUIsQ0FBQyxJQU9uQjs7UUFDRyxvQkFBb0I7UUFDcEIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3BFLHlCQUF5QjtRQUN6QixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFL0QsZ0NBQWdDO1FBQ2hDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUUxSCxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFBO1FBQzFHLElBQUksQ0FBQyxXQUFXO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1FBRWhFLE9BQU87WUFDSCxJQUFJLEVBQUUsV0FBVztZQUNqQixVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlO1lBQ3ZDLFFBQVEsRUFBRTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQjthQUNoQztZQUNELEtBQUssRUFB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