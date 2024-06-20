"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postCustomer_1 = __importDefault(require("../../artemis/v2/api/customers/_post/postCustomer"));
/**
 * @description
 */
async function postCustomerFromGrof(args) {
    const { grof } = args;
    return (0, postCustomer_1.default)({
        auth: args.auth,
        req: {
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
            isActiveCustomer: false,
            natureOfBusinessRelationship: "",
            onboardingMode: "",
            paymentModes: [],
            productServiceComplexity: "",
            profileType: "",
            referenceId: "",
            users: []
        }
    });
}
exports.default = postCustomerFromGrof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdEN1c3RvbWVyRnJvbUdyb2YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZ3JvZi1hcnRlbWlzL3YyL3Bvc3RDdXN0b21lckZyb21Hcm9mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUdBQTRFO0FBSTVFOztHQUVHO0FBQ1ksS0FBSyxVQUFVLG9CQUFvQixDQUFDLElBT2xEO0lBQ0csTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQTtJQUVyQixPQUFPLElBQUEsc0JBQVksRUFBQztRQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixHQUFHLEVBQUU7WUFDRCxpQkFBaUIsRUFBRTtnQkFDZjtvQkFDSSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXO29CQUNuQyxTQUFTLEVBQUU7d0JBQ1AsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7cUJBQzdIO29CQUNELFVBQVUsRUFBRSxFQUFFO29CQUNkLFlBQVksRUFBRSxFQUFFO29CQUNoQixjQUFjLEVBQUUsRUFBRTtvQkFDbEIsa0JBQWtCLEVBQUUsRUFBRTtvQkFDdEIsV0FBVyxFQUFFLEVBQUU7b0JBQ2YsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUM7b0JBQ3hFLE1BQU0sRUFBRSxFQUFFO29CQUNWLFlBQVksRUFBRSxFQUFFO29CQUNoQixXQUFXLEVBQUUsRUFBRTtvQkFDZixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsRUFBRTtvQkFDVixRQUFRLEVBQUUsRUFBRTtvQkFDWixXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsZUFBZTtvQkFDOUQsVUFBVSxFQUFFLEVBQUU7b0JBQ2QsWUFBWSxFQUFFO3dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLG1CQUFtQjtxQkFDbEg7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsYUFBYSxFQUFFLEVBQUU7b0JBQ2pCLEtBQUssRUFBRSxFQUFFO2lCQUNaO2FBQ0o7WUFDRCxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsZ0JBQWdCLEVBQUUsS0FBSztZQUN2Qiw0QkFBNEIsRUFBRSxFQUFFO1lBQ2hDLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHdCQUF3QixFQUFFLEVBQUU7WUFDNUIsV0FBVyxFQUFFLEVBQUU7WUFDZixXQUFXLEVBQUUsRUFBRTtZQUNmLEtBQUssRUFBRSxFQUFFO1NBQ1o7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBckRELHVDQXFEQyJ9