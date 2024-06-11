import postCorporateCustomer from "../../artemis/v3/api/customer/_post/corporate/postCorporateCustomer.v3"
import { TGrofApplication } from "../../grof/types/TGrofApplication"


/**
 * @description 
 */
export default async function postCorporateCustomerFromGrof(args: {
    auth: {
        token: string
    }
    grof: {
        application: TGrofApplication
    }
}) {
    const { grof } = args

    return postCorporateCustomer({
        auth: args.auth,
        req: {
            type: "CORPORATE",
            assigneeId: "",
            domainId: [],
            other: {
                entityType: grof.application.company.legalDetails.entityType,
                corporateWebsite: grof.application.company.website,
                fatfjurisdiction: "",
                industry: grof.application.company.ssic.primary.code + "-" + grof.application.company.ssic.primary.description,
                onBoardingMode: grof.application.company.riskProfileAssessment.onboardingMode,
                ownershipStructureLayer: grof.application.company.riskProfileAssessment.ownershipStructureLayers,
                paymentMode: grof.application.company.riskProfileAssessment.paymentModes,
                productServiceComplexity: grof.application.company.riskProfileAssessment.productServiceComplexity,
                sourceOfFunds: "",
                natureOfBusinessRelationship: "",
                bankAccount: [], // Free Text
                additionalInformation: "free text",
            },
            particular: {
                incorporated: grof.application.company.isIncorporated,
                name: grof.application.company.companyName,
                alias: [grof.application.company.legalDetails.historyName],
                formerName: [grof.application.company.legalDetails.entityName],
                countryOfIncorporation: grof.application.company.addresses.registeredAddress.country,
                countryOfOperation: grof.application.company.riskProfileAssessment.countryOfOperations,
                address: [
                    grof.application.company.addresses.registeredAddress.addressLine1,
                    grof.application.company.addresses.registeredAddress.addressLine2,
                ],
                dateOfIncorporation: grof.application.company.legalDetails.registrationDate,
                dateOfIncorporationExpiry: "",
                email: [],
                imonumber: "",
                incorporateNumber: grof.application.uen
            },
            profileReferenceId: "",
            active: true
        }
    })
}