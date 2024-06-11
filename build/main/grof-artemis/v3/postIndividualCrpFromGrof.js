"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postIndividualCrp_1 = __importDefault(require("../../artemis/v3/api/customer/{customer_id}/crp/_post/individual/postIndividualCrp"));
/**
 * @description
 */
async function postIndividualCrpFromGrof(args) {
    const { members } = args.grof.application.company;
    return (0, postIndividualCrp_1.default)({
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
    });
}
exports.default = postIndividualCrpFromGrof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdEluZGl2aWR1YWxDcnBGcm9tR3JvZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncm9mLWFydGVtaXMvdjMvcG9zdEluZGl2aWR1YWxDcnBGcm9tR3JvZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJJQUFrSDtBQUlsSDs7R0FFRztBQUNZLEtBQUssVUFBVSx5QkFBeUIsQ0FBQyxJQVd2RDtJQUNHLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7SUFFakQsT0FBTyxJQUFBLDJCQUFpQixFQUFDO1FBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLEdBQUcsRUFBRTtZQUNELElBQUksRUFBRSxZQUFZO1lBQ2xCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFO2dCQUNILG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTtnQkFDN0QsaUJBQWlCLEVBQUUsRUFBRTtnQkFDckIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsY0FBYztnQkFDekUsTUFBTSxFQUFFLEVBQUU7Z0JBQ1Ysb0JBQW9CLEVBQUUsS0FBSzthQUM5QjtZQUNELFVBQVUsRUFBRTtnQkFDUixPQUFPLEVBQUU7b0JBQ0wsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWTtvQkFDMUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWTtpQkFDN0M7Z0JBQ0QsS0FBSyxFQUFFO29CQUNILE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEtBQUs7aUJBQzlDO2dCQUNELEtBQUssRUFBRTtvQkFDSCxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxLQUFLO2lCQUM3QztnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsT0FBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsV0FBVztpQkFDbkQ7Z0JBQ0QsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVk7Z0JBQ3BGLFdBQVcsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxXQUFXO2dCQUM5RCxjQUFjLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsY0FBYztnQkFDcEUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU07Z0JBQ3BELG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJO2dCQUMzRSxrQkFBa0IsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCO2dCQUNyRixrQkFBa0IsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsY0FBYztnQkFDbkYsY0FBYyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUN6RSxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2hFLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3pELFVBQVUsRUFBRSxFQUFFO2FBQ2pCO1lBQ0Qsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixNQUFNLEVBQUUsSUFBSTtTQUNmO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQXpERCw0Q0F5REMifQ==