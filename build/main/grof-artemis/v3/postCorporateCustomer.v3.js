"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postCorporateCustomer_v3_1 = __importDefault(require("../../artemis/v3/api/customer/_post/corporate/postCorporateCustomer.v3"));
/**
 * @description
 */
async function postCorporateCustomerFromGrof(args) {
    const { grof } = args;
    return (0, postCorporateCustomer_v3_1.default)({
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
                bankAccount: [],
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
    });
}
exports.default = postCorporateCustomerFromGrof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdENvcnBvcmF0ZUN1c3RvbWVyLnYzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2dyb2YtYXJ0ZW1pcy92My9wb3N0Q29ycG9yYXRlQ3VzdG9tZXIudjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzSUFBMEc7QUFJMUc7O0dBRUc7QUFDWSxLQUFLLFVBQVUsNkJBQTZCLENBQUMsSUFPM0Q7SUFDRyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFBO0lBRXJCLE9BQU8sSUFBQSxrQ0FBcUIsRUFBQztRQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixHQUFHLEVBQUU7WUFDRCxJQUFJLEVBQUUsV0FBVztZQUNqQixVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFO2dCQUNILFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVTtnQkFDNUQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDbEQsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7Z0JBQzlHLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjO2dCQUM3RSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0I7Z0JBQ2hHLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZO2dCQUN4RSx3QkFBd0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0I7Z0JBQ2pHLGFBQWEsRUFBRSxFQUFFO2dCQUNqQiw0QkFBNEIsRUFBRSxFQUFFO2dCQUNoQyxXQUFXLEVBQUUsRUFBRTtnQkFDZixxQkFBcUIsRUFBRSxXQUFXO2FBQ3JDO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxjQUFjO2dCQUNyRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVztnQkFDMUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztnQkFDMUQsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFDOUQsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLE9BQU87Z0JBQ3BGLGtCQUFrQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQjtnQkFDdEYsT0FBTyxFQUFFO29CQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO29CQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsWUFBWTtpQkFDcEU7Z0JBQ0QsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQjtnQkFDM0UseUJBQXlCLEVBQUUsRUFBRTtnQkFDN0IsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHO2FBQzFDO1lBQ0Qsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixNQUFNLEVBQUUsSUFBSTtTQUNmO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQW5ERCxnREFtREMifQ==