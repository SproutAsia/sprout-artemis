import postIndividualCrp from "../../artemis/v3/api/customer/{customer_id}/crp/_post/individual/postIndividualCrp"
import { Member } from "../../grof/types/TGrofApplication"


/**
 * @description 
 */
export default async function postIndividualCrpFromGrof(args: {
    auth: {
        token: string
    }
    grof: {
        application: {
            company: {
                members: Member
            }
        }
    }
}) {
    const { members } = args.grof.application.company

    return postIndividualCrp({
        auth: args.auth,
        req: {
            type: "INDIVIDUAL",
            roles: [],
            other: {
                ownershipPercentage: members.sharesDetails[0].sharePercentage,
                bankAccountNumber: [],
                sourceOfFunds: members.personDetails.riskProfileAssessment.sourceOfIncome,
                status: "",
                undischargedBankrupt: false,
            },
            particular: {
                address: [
                    members.personDetails.address.addressLine1,
                    members.personDetails.address.addressLine2,
                ],
                alias: [
                    members.personDetails.personalDetails.alias
                ],
                email: [
                    members.personDetails.contactDetails.email
                ],
                phone: [
                    members.personDetails.contactDetails.phoneNumber
                ],
                formerName: [],
                name: members.personDetails.callFirstName + " " + members.personDetails.callLastName,
                dateOfBirth: members.personDetails.personalDetails.dateOfBirth,
                countryOfBirth: members.personDetails.personalDetails.countryOfBirth,
                gender: members.personDetails.personalDetails.gender,
                identityDocumentType: members.personDetails.personalDetails.idDocument.type,
                identityExpiryDate: members.personDetails.personalDetails.idDocument.dateOfExpiration,
                identityIssuedDate: members.personDetails.personalDetails.idDocument.dateOfIssuance,
                identityNumber: members.personDetails.personalDetails.idDocument.idNumber,
                nationality: [members.personDetails.personalDetails.nationality],
                countryOfResidence: members.personDetails.address.country,
                salutation: ""
            },
            profileReferenceId: "",
            active: true
        }
    })
}