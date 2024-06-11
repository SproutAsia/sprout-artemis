"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postIndividualCustomer_v3_1 = __importDefault(require("../../artemis/v3/api/customer/_post/individual/postIndividualCustomer.v3"));
/**
 * @description
 */
async function postIndividualCustomerFromGrof(args) {
    const { grof } = args;
    return (0, postIndividualCustomer_v3_1.default)({
        auth: args.auth,
        req: {
            type: "INDIVIDUAL",
            active: true,
            assigneeId: "",
            domainId: [],
            other: {
                additionalInformation: "",
                bankAccount: [],
                industry: "",
                natureOfBusinessRelationship: "",
                occupation: "",
                onBoardingMode: "",
                paymentMode: [],
                productServiceComplexity: "",
                sourceOfFunds: ""
            },
            particular: {
                address: [],
                alias: [],
                countryOfBirth: "",
                countryOfResidence: "",
                dateOfBirth: "",
                email: [],
                formerName: [],
                gender: "",
                identityDocumentType: "",
                identityExpiryDate: "",
                identityIssuedDate: "",
                identityNumber: "",
                name: "",
                nationality: [],
                phone: [],
                salutation: ""
            },
            profileReferenceId: ""
        }
    });
}
exports.default = postIndividualCustomerFromGrof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdEluZGl2aWR1YWxDdXN0b21lci52My5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncm9mLWFydGVtaXMvdjMvcG9zdEluZGl2aWR1YWxDdXN0b21lci52My50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlJQUE2RztBQUk3Rzs7R0FFRztBQUNZLEtBQUssVUFBVSw4QkFBOEIsQ0FBQyxJQU81RDtJQUNHLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUE7SUFFckIsT0FBTyxJQUFBLG1DQUFzQixFQUFDO1FBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLEdBQUcsRUFBRTtZQUNELElBQUksRUFBRSxZQUFZO1lBQ2xCLE1BQU0sRUFBRSxJQUFJO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLEtBQUssRUFBRTtnQkFDSCxxQkFBcUIsRUFBRSxFQUFFO2dCQUN6QixXQUFXLEVBQUUsRUFBRTtnQkFDZixRQUFRLEVBQUUsRUFBRTtnQkFDWiw0QkFBNEIsRUFBRSxFQUFFO2dCQUNoQyxVQUFVLEVBQUUsRUFBRTtnQkFDZCxjQUFjLEVBQUUsRUFBRTtnQkFDbEIsV0FBVyxFQUFFLEVBQUU7Z0JBQ2Ysd0JBQXdCLEVBQUUsRUFBRTtnQkFDNUIsYUFBYSxFQUFFLEVBQUU7YUFDcEI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsY0FBYyxFQUFFLEVBQUU7Z0JBQ2xCLGtCQUFrQixFQUFFLEVBQUU7Z0JBQ3RCLFdBQVcsRUFBRSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFVBQVUsRUFBRSxFQUFFO2dCQUNkLE1BQU0sRUFBRSxFQUFFO2dCQUNWLG9CQUFvQixFQUFFLEVBQUU7Z0JBQ3hCLGtCQUFrQixFQUFFLEVBQUU7Z0JBQ3RCLGtCQUFrQixFQUFFLEVBQUU7Z0JBQ3RCLGNBQWMsRUFBRSxFQUFFO2dCQUNsQixJQUFJLEVBQUUsRUFBRTtnQkFDUixXQUFXLEVBQUUsRUFBRTtnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxVQUFVLEVBQUUsRUFBRTthQUNqQjtZQUNELGtCQUFrQixFQUFFLEVBQUU7U0FDekI7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBakRELGlEQWlEQyJ9