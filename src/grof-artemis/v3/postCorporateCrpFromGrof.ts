import postCorporateCrp from "../../artemis/v3/api/customer/{customer_id}/crp/_post/corporate/postCorporateCrp"
import { Member } from "../../grof/types/TGrofApplication"


/**
 * @description 
 */
export default async function postCorporateCrpFromGrof(args: {
    auth: {
        token: string
    }
    grof: {
        application: {
            company: {
                member: Member
            }
        }
    }
}) {
    const { member } = args.grof.application.company

    return postCorporateCrp({
        auth: args.auth,
        req: {
            type: "CORPORATE",
            roles: [],
            other: {
                entityType: member.companyDetails.legalDetails.entityType,
                bankAccountNumber: [],
                corporateWebsite: '',
                businessCessationDate: member.sharesDetails[0].cessationDate,
                otherEntityType: "",
                ownershipStructureLayer: member.companyDetails.riskProfileAssessment.ownershipStructureLayers,
                sourceOfFunds: "",
                status: "",
                undischargedBankrupt: "",
                variableCapitalCompany: ""
            },
            particular: {
                address: [
                    member.companyDetails.addresses.registeredAddress.addressLine1,
                    member.companyDetails.addresses.registeredAddress.addressLine2,
                ],
                alias: [
                    member.companyDetails.companyName
                ],
                countryOfIncorporation: member.companyDetails.legalDetails.countryOfRegisteredBusiness,
                countryOfOperation: member.companyDetails.riskProfileAssessment.countryOfOperations,
                dateOfIncorporation: member.companyDetails.legalDetails.registrationDate,
                email: [],
                phone: [],
                formerName: [],
                imonumber: '',
                incorporated: "",
                incorporateNumber: "",
                name: member.companyDetails.companyName,
            },
            profileReferenceId: "",
            active: true
        }
    })
}