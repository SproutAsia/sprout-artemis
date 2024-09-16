
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
        },
        customFn?: {
            parseCountry?: (country: string) => string,
            customerId?: (customerId: string) => string
        }
    }) {
        // handle missing mandatory
        if (!args.application.company.riskProfileAssessment.countryOfOperations) throw new Error(ErrorForConvert.enum["Country of operations cannot be empty"])
        if (!args.application.company.companyName) throw new Error(ErrorForConvert.enum["Company name cannot be empty"])
        if (!args.application.company.legalDetails.companyType) throw new Error(ErrorForConvert.enum["Entity type cannot be empty"])
        // artemis use full name of industry code instead of just code so that's why we use description
        if (!args.application.company.ssic.primary.description) throw new Error(ErrorForConvert.enum["Industry code cannot be empty"])
        if (!args.application.company.riskProfileAssessment.onboardingMode) throw new Error(ErrorForConvert.enum["Onboarding mode cannot be empty"])
        if (!args.application.company.riskProfileAssessment.ownershipStructureLayers) throw new Error(ErrorForConvert.enum["Ownership structure layer cannot be empty"])
        if (!args.application.company.riskProfileAssessment.paymentModes) throw new Error(ErrorForConvert.enum["Payment mode cannot be empty"])
        if (!args.application.company.riskProfileAssessment.productServiceComplexity) throw new Error(ErrorForConvert.enum["Product service complexity cannot be empty"])

        // new if no service
        const isNewIncorp = Boolean(args.application.services.incorporation)

        // convert country of operations
        const countryOfOperations = args.application.company.riskProfileAssessment.countryOfOperations.map((c) => ConvertToArtemisEnum.country(c.toUpperCase()))

        return {
            type: "CORPORATE",
            assigneeId: process.env.ARTEMIS_USER_ID,
            domainId: [
                process.env.ARTEMIS_DOMAIN_ID
            ],
            other: {
                entityType: ConvertToArtemisEnum.entityType(args.application.company.legalDetails.companyType, args.application.company.addresses.registeredAddress.country),
                corporateWebsite: "",
                fatfjurisdiction: "",
                industry: ConvertToArtemisEnum.ssic(args.application.company.ssic.primary.code),
                onBoardingMode: ConvertToArtemisEnum.onboarding(args.application.company.riskProfileAssessment.onboardingMode),
                ownershipStructureLayer: args.application.company.riskProfileAssessment.ownershipStructureLayers,
                paymentMode: args.application.company.riskProfileAssessment.paymentModes,
                productServiceComplexity: args.application.company.riskProfileAssessment.productServiceComplexity,
                sourceOfFunds: "",
                natureOfBusinessRelationship: "",
                bankAccount: [], // Free Text
                additionalInformation: args.additional?.additionalInformation || "",
            },
            particular: {
                incorporated: true,
                name: args.application.company.companyName,
                alias: args.application.company.legalDetails.entityName ? [args.application.company.legalDetails.entityName] : undefined,
                formerName: args.application.company.legalDetails.historyName ? [args.application.company.legalDetails.historyName] : [],
                countryOfIncorporation: args.customFn?.parseCountry?.(args.application.company.addresses.registeredAddress.country) || ConvertToArtemisEnum.shortCountry(args.application.company.addresses.registeredAddress.country),
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
                dateOfIncorporation: isNewIncorp ? undefined : args.application.company.legalDetails.registrationDate,
                email: [],
                imonumber: "",
                incorporateNumber: isNewIncorp ? "" : args.application.company.legalDetails.uen
            },
            profileReferenceId: args.customFn?.customerId?.(args.application.company.companyName) || args.application.company.companyName,
            referenceId: args.application.company.legalDetails.uen,
            active: true
        } as TReqPostCustomerCorporate
    },
    toSingleIndividualCrp(args: {
        member: TGrofApplication['company']['members'][0]
        additional?: {
            additionalInformation?: string
            otherSourceOfFunds?: string
            formerName?: string[]
        },
        customFn?: {
            parseCountry?: (country: string) => string,
            customerId?: (customerId: string) => string
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

        const mandatory = {
            type: "INDIVIDUAL",
            roles: roles,
            other: {
                ownershipPercentage: member.sharesDetails.reduce((cur, next) => cur + next.sharePercentage, 0),
                bankAccount: [],
                sourceOfFunds: ConvertToArtemisEnum.sourceOfFund(member.personDetails.riskProfileAssessment?.sourceOfFunds),
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
                email: [],
                phone: [],
                formerName: args.additional?.formerName || [],
                name: member.personDetails.personalDetails.fullName,
                dateOfBirth: member.personDetails.personalDetails.dateOfBirth,
                countryOfBirth: args.customFn?.parseCountry?.(member.personDetails.personalDetails.countryOfBirth) || ConvertToArtemisEnum.shortCountry(member.personDetails.personalDetails.countryOfBirth),
                gender: member.personDetails.personalDetails.gender?.toUpperCase(),
                identityDocumentType: documentType,
                // it should be fill or not listed in field. undefined when being parsed will gone.
                identityExpiryDate: documentType === "INTERNATIONAL PASSPORT" ? member.personDetails.personalDetails.idDocument.dateOfExpiration : undefined,
                identityIssuedDate: member.personDetails.personalDetails.idDocument.dateOfIssuance,
                identityNumber: member.personDetails.personalDetails.idDocument.idNumber,
                nationality: [
                    args.customFn?.parseCountry?.(member.personDetails.personalDetails.nationality) || ConvertToArtemisEnum.shortCountry(member.personDetails.personalDetails.nationality)
                ],
                countryOfResidence: args.customFn?.parseCountry?.(member.personDetails.address.country) || ConvertToArtemisEnum.shortCountry(member.personDetails.address.country),
                salutation: "",
            },
            profileReferenceId: args.customFn?.customerId?.(member.personDetails.personalDetails.idDocument.idNumber) || member.personDetails.personalDetails.idDocument.idNumber,
            active: true,
        } as TReqPostIndividualCrp

        if (member.personDetails.contactDetails?.email) mandatory.particular.email.push(member.personDetails.contactDetails?.email)
        if (member.personDetails.contactDetails?.phoneNumber) mandatory.particular.phone.push(
            member.personDetails.contactDetails?.phoneNumber
        )

        return mandatory
    },
    toSingleCorporateCrp(args: {
        member: TGrofApplication['company']['members'][0]
        additional?: {
            additionalInformation?: string
            formerName?: string[]
            otherSourceOfFunds?: string
        },
        customFn?: {
            parseCountry?: (country: string) => string,
            customerId?: (customerId: string) => string
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

        const mandatory = {
            type: "CORPORATE",
            roles: roles,
            other: {
                entityType: ConvertToArtemisEnum.entityType(member.companyDetails.legalDetails.entityType, member.companyDetails.addresses.registeredAddress.country),
                bankAccountNumber: [],
                ownershipStructureLayer: member.companyDetails.riskProfileAssessment.ownershipStructureLayers,
                status: "CURRENT",
                additionalInformation: args.additional?.additionalInformation || "",
                ownershipPercentage: member.sharesDetails?.reduce((cur, next) => cur + next.sharePercentage, 0),
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
                countryOfIncorporation: args.customFn?.parseCountry?.(member.companyDetails.legalDetails.countryOfRegisteredBusiness) || ConvertToArtemisEnum.shortCountry(member.companyDetails.legalDetails.countryOfRegisteredBusiness),
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
            profileReferenceId: args.customFn?.customerId?.(member.companyDetails.companyName) || member.companyDetails.companyName,
            active: true
        } as TReqPostCorporateCrp

        // === add optional === //
        if (member.personDetails.contactDetails?.email) mandatory.particular.email.push(member.personDetails.contactDetails.email)
        if (member.personDetails.contactDetails?.phoneNumber) mandatory.particular.phone.push(
            member.personDetails.contactDetails?.phoneNumber
        )

        return mandatory
    }
}

export default ConvertToRequest