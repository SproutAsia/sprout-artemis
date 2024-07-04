
import { TReqPostCustomerCorporate } from "../../../artemis/v3/api/customer/_post/corporate/TReqPostCustomerCorporate.v3"
import { TReqPostCorporateCrp } from "../../../artemis/v3/api/customer/{customer_id}/crp/_post/corporate/TReqPostCorporateCrp.v3"
import { TReqPostIndividualCrp } from "../../../artemis/v3/api/customer/{customer_id}/crp/_post/individual/TReqPostIndividualCrp.v3"
import { TGrofApplication } from "../../../grof/types/TGrofApplication"

import ConvertToArtemisEnum from "./ConvertEnum"
import ErrorForConvert, { ErrorForConvertToCorporate, ErrorForConvertToIndividual } from "./ErrorForConvert.enum"
import Formatter from "./Formatter"


const ConvertToRequest = {
    toCorporateCustomer(args: {
        application: TGrofApplication
        additional?: {
            referenceId?: string
            additionalInformation?: string
        }
    }) {
        // handle missing mandatory
        if (!args.application.company.riskProfileAssessment.countryOfOperations) throw new Error(ErrorForConvert.enum["Country of operations cannot be empty"])
        if (!args.application.company.companyName) throw new Error(ErrorForConvert.enum["Company name cannot be empty"])
        if (!args.application.company.legalDetails.entityType) throw new Error(ErrorForConvert.enum["Entity type cannot be empty"])
        if (!args.application.company.ssic.primary.code) throw new Error(ErrorForConvert.enum["Industry code cannot be empty"])
        if (!args.application.company.riskProfileAssessment.onboardingMode) throw new Error(ErrorForConvert.enum["Onboarding mode cannot be empty"])
        if (!args.application.company.riskProfileAssessment.ownershipStructureLayers) throw new Error(ErrorForConvert.enum["Ownership structure layer cannot be empty"])
        if (!args.application.company.riskProfileAssessment.paymentModes) throw new Error(ErrorForConvert.enum["Payment mode cannot be empty"])
        if (!args.application.company.riskProfileAssessment.productServiceComplexity) throw new Error(ErrorForConvert.enum["Product service complexity cannot be empty"])

        // new if no service
        const isNewIncorp = Boolean(args.application.services.incorporation)
        // transferIn service is 
        const isTransferIn = Boolean(args.application.services.corpSec)

        // convert country of operations
        const countryOfOperations = args.application.company.riskProfileAssessment.countryOfOperations.map((c) => c.toUpperCase())

        return {
            type: "CORPORATE",
            assigneeId: process.env.ARTEMIS_USER_ID,
            domainId: [
                process.env.ARTEMIS_DOMAIN_ID
            ],
            other: {
                entityType: ConvertToArtemisEnum.entityType(args.application.company.legalDetails.entityType, args.application.company.addresses.registeredAddress.country),
                corporateWebsite: "",
                fatfjurisdiction: "",
                industry: args.application.company.ssic.primary.code + " - " + args.application.company.ssic.primary.description,
                onBoardingMode: args.application.company.riskProfileAssessment.onboardingMode,
                ownershipStructureLayer: args.application.company.riskProfileAssessment.ownershipStructureLayers,
                paymentMode: args.application.company.riskProfileAssessment.paymentModes,
                productServiceComplexity: args.application.company.riskProfileAssessment.productServiceComplexity,
                sourceOfFunds: "",
                natureOfBusinessRelationship: "",
                bankAccount: [], // Free Text
                additionalInformation: args.additional?.additionalInformation || "",
            },
            particular: {
                incorporated: args.application.company.isIncorporated,
                name: args.application.company.companyName,
                alias: [args.application.company.legalDetails.entityName],
                formerName: args.application.company.legalDetails.historyName ? [args.application.company.legalDetails.historyName] : [],
                countryOfIncorporation: ConvertToArtemisEnum.shortCountry(args.application.company.addresses.registeredAddress.country),
                countryOfOperation: countryOfOperations,
                address: Formatter.toGrofAddress({
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
        } as TReqPostCustomerCorporate
    },
    toSingleIndividualCrp(args: {
        member: TGrofApplication['company']['members'][0]
        additional?: {
            additionalInformation?: string
            otherSourceOfFunds?: string
            formerName?: string[]
        }
    }) {
        const member = args.member

        // handle missing mandatory
        if (!member.personDetails.personalDetails.fullName) throw new Error(ErrorForConvertToIndividual.enum['Name cannot be empty'])
        if (!member.personDetails.personalDetails.nationality) throw new Error(ErrorForConvertToIndividual.enum['Nationality cannot be empty'])
        if (!member.personDetails.address.country) throw new Error(ErrorForConvertToIndividual.enum['Country of residence cannot be empty'])

        // pre-parse
        const documentType = ConvertToArtemisEnum.documentType(member.personDetails.personalDetails.idDocument.type)

        // roles
        const roles = ConvertToArtemisEnum.appointmentToRole(member.appointments)
        if (!roles.length) throw new Error(ErrorForConvertToIndividual.enum['Role cannot be empty'])

        const req = {
            type: "INDIVIDUAL",
            roles: roles,
            other: {
                ownershipPercentage: member.sharesDetails.reduce((cur, next) => cur + next.sharePercentage, 0),
                bankAccount: [],
                sourceOfFunds: ConvertToArtemisEnum.sourceOfFund(member.personDetails.riskProfileAssessment.sourceOfIncome),
                status: "CURRENT",
                undischargedBankrupt: false,
                otherSourceOfFunds: args.additional?.otherSourceOfFunds,
                additionalInformation: args.additional?.additionalInformation || ""
            },
            particular: {
                address: Formatter.toGrofAddress({
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
                formerName: args.additional?.formerName || [],
                name: member.personDetails.personalDetails.fullName,
                dateOfBirth: member.personDetails.personalDetails.dateOfBirth,
                countryOfBirth: ConvertToArtemisEnum.shortCountry(member.personDetails.personalDetails.countryOfBirth),
                gender: member.personDetails.personalDetails.gender.toUpperCase(),
                identityDocumentType: documentType,
                // it should be fill or not listed in field. undefined when being parsed will gone.
                identityExpiryDate: documentType === "INTERNATIONAL PASSPORT" ? member.personDetails.personalDetails.idDocument.dateOfExpiration : undefined,
                identityIssuedDate: member.personDetails.personalDetails.idDocument.dateOfIssuance,
                identityNumber: member.personDetails.personalDetails.idDocument.idNumber,
                nationality: [
                    ConvertToArtemisEnum.shortCountry(member.personDetails.personalDetails.nationality)
                ],
                countryOfResidence: ConvertToArtemisEnum.shortCountry(member.personDetails.address.country),
                salutation: "",
            },
            profileReferenceId: member.companyDetails.companyName,
            active: true
        } as TReqPostIndividualCrp

        return req
    },
    toSingleCorporateCrp(args: {
        member: TGrofApplication['company']['members'][0]
        additional?: {
            additionalInformation?: string
            formerName?: string[]
            otherSourceOfFunds?: string
        }
    }) {
        const member = args.member

        const roles = member.appointments.map((a) => {
            return {
                role: "SHAREHOLDER",
                appointedDate: a.appointmentDate,
                resignedDate: a.resignedDate
            } as TReqPostCorporateCrp['roles'][0]
        })

        // handle empty mandatory field
        if (!member.companyDetails.legalDetails.countryOfRegisteredBusiness) throw new Error(ErrorForConvertToCorporate.enum['Country of incorporation cannot be empty'])
        if (!member.companyDetails.riskProfileAssessment.countryOfOperations) throw new Error(ErrorForConvertToCorporate.enum['Country of operation cannot be empty'])
        if (!member.companyDetails.legalDetails.entityType) throw new Error(ErrorForConvertToCorporate.enum['Entity type cannot be empty'])
        if (!member.companyDetails.companyName) throw new Error(ErrorForConvertToCorporate.enum['Company name cannot be empty'])

        return {
            type: "CORPORATE",
            roles: roles,
            other: {
                entityType: ConvertToArtemisEnum.entityType(member.companyDetails.legalDetails.entityType, member.companyDetails.addresses.registeredAddress.country),
                bankAccountNumber: [],
                ownershipStructureLayer: member.companyDetails.riskProfileAssessment.ownershipStructureLayers,
                status: "CURRENT",
                additionalInformation: args.additional?.additionalInformation || ""
            },
            particular: {
                address: Formatter.toGrofAddress({
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
                countryOfIncorporation: ConvertToArtemisEnum.shortCountry(member.companyDetails.legalDetails.countryOfRegisteredBusiness),
                countryOfOperation: member.companyDetails.riskProfileAssessment.countryOfOperations.map((c) => c.toUpperCase()),
                dateOfIncorporation: member.companyDetails.legalDetails.registrationDate,
                email: [],
                phone: [],
                formerName: args.additional?.formerName || [],
                imonumber: '',
                incorporated: true,
                incorporateNumber: member.companyDetails.legalDetails.businessRegistrationNumber,
                name: member.companyDetails.companyName,
            },
            profileReferenceId: member.companyDetails.companyName,
            active: true
        } as TReqPostCorporateCrp
    }
}

export default ConvertToRequest