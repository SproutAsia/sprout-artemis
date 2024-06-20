import postIndividualCustomer from "../../artemis/v3/api/customer/_post/individual/postIndividualCustomer.v3"
import { TGrofApplication } from "../../grof/types/TGrofApplication"


/**
 * @description 
 */
export default async function postIndividualCustomerFromGrof(args: {
    auth: {
        token: string
    }
    grof: {
        application: TGrofApplication
    }
}) {
    const { grof } = args

    return postIndividualCustomer({
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
    })
}