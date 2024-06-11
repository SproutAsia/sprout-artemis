"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postCorporateCrp_1 = __importDefault(require("../../artemis/v3/api/customer/{customer_id}/crp/_post/corporate/postCorporateCrp"));
/**
 * @description
 */
async function postCorporateCrpFromGrof(args) {
    const { member } = args.grof.application.company;
    return (0, postCorporateCrp_1.default)({
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
    });
}
exports.default = postCorporateCrpFromGrof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdENvcnBvcmF0ZUNycEZyb21Hcm9mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2dyb2YtYXJ0ZW1pcy92My9wb3N0Q29ycG9yYXRlQ3JwRnJvbUdyb2YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3SUFBK0c7QUFJL0c7O0dBRUc7QUFDWSxLQUFLLFVBQVUsd0JBQXdCLENBQUMsSUFXdEQ7SUFDRyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFBO0lBRWhELE9BQU8sSUFBQSwwQkFBZ0IsRUFBQztRQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixHQUFHLEVBQUU7WUFDRCxJQUFJLEVBQUUsV0FBVztZQUNqQixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRTtnQkFDSCxVQUFVLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsVUFBVTtnQkFDekQsaUJBQWlCLEVBQUUsRUFBRTtnQkFDckIsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDcEIscUJBQXFCLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO2dCQUM1RCxlQUFlLEVBQUUsRUFBRTtnQkFDbkIsdUJBQXVCLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0I7Z0JBQzdGLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixNQUFNLEVBQUUsRUFBRTtnQkFDVixvQkFBb0IsRUFBRSxFQUFFO2dCQUN4QixzQkFBc0IsRUFBRSxFQUFFO2FBQzdCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLE9BQU8sRUFBRTtvQkFDTCxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO29CQUM5RCxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO2lCQUNqRTtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXO2lCQUNwQztnQkFDRCxzQkFBc0IsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQywyQkFBMkI7Z0JBQ3RGLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsbUJBQW1CO2dCQUNuRixtQkFBbUIsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0I7Z0JBQ3hFLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxFQUFFO2dCQUNULFVBQVUsRUFBRSxFQUFFO2dCQUNkLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFlBQVksRUFBRSxFQUFFO2dCQUNoQixpQkFBaUIsRUFBRSxFQUFFO2dCQUNyQixJQUFJLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXO2FBQzFDO1lBQ0Qsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixNQUFNLEVBQUUsSUFBSTtTQUNmO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQXRERCwyQ0FzREMifQ==