import postCustomer from "../artemis/v2/api/customers/_post/postCustomer"
import { TGrofOrganization } from "../grof/types/TGrofOrganization"


/**
 * @description 
 */
export default async function postCustomerFromGrof(args: {
    auth: {
        token: string
    }
    grof: {
        organization: TGrofOrganization
    }
}) {
    const { grof } = args

    return postCustomer({
        auth: args.auth,
        req: {
            // purposelly write undefined to aware about what field is exist
            individualRecords: [
                {
                    name: grof.organization.companyName,
                    addresses: [
                        [grof.organization.businessDetails.businessAddressLine1, grof.organization.businessDetails.businessAddressLine2].join(" ")
                    ],
                    aliasNames: [],
                    bankAccounts: [],
                    countryOfBirth: "",
                    countryOfResidence: "",
                    dateOfBirth: "",
                    emailAddresses: [grof.organization.businessDetails.businessEmailAddress],
                    gender: "",
                    idExpiryDate: "",
                    idIssueDate: "",
                    idNumber: "",
                    idType: "",
                    industry: "",
                    nationality: grof.organization.businessDetails.businessCountry,
                    occupation: "",
                    phoneNumbers: [
                        grof.organization.businessDetails.businessPhoneDialCode + grof.organization.businessDetails.businessPhoneNumber
                    ],
                    primary: "",
                    sourceOfFunds: "",
                    title: ""
                }
            ],
            corporateRecords: [],
            domains: [],
            isActiveCustomer: false, // TODO CHECK WHAT IS IT LATER
            natureOfBusinessRelationship: "",
            onboardingMode: "",
            paymentModes: [],
            productServiceComplexity: "",
            profileType: "",
            referenceId: "",
            users: []
        }
    })
}