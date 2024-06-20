"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisEnum_1 = require("./ArtemisEnum");
const ConvertToArtemisEnum = {
    documentType: (type) => {
        switch (type) {
            case "Passport": return "INTERNATIONAL PASSPORT";
            case "NRIC": return "NATIONAL ID";
            default: {
                throw new Error("Document type is unknown");
            }
        }
    },
    sourceOfFund: (source) => {
        if (!source)
            return null;
        switch (source) {
            case "Salary":
            case "Employment Income":
                return "SALARY";
            case "Business income": return "BUSINESS REVENUE";
            case "Investment income": return "INVESTMENT GAIN";
            default: return "OTHERS";
        }
    },
    companySourceOfFund: (source) => {
        switch (source) {
            case "Business income": return "BUSINESS REVENUE";
            case "Investment income": return "INVESTMENT GAIN";
            case "Debt financing": return "LOAN";
            // case "Shareholder capital": return "shareholder capital"; // TODO it's not exist in Artemis
            case "Others. Please specify": return "OTHERS";
            default: return "OTHERS";
        }
    },
    role: (memberRole) => {
        switch (memberRole) {
            case "Director":
            case "Chief Executive Officer":
            case "Public Accountant Employee":
            case "Auditor":
            case "Officer":
            case "Manager":
            case "Managing Director":
            case "Agent":
            case "Secretary":
                return "DIRECTOR";
            case "Alternate Director":
                return "DIRECTOR (ALTERNATE)";
            case "Nominee Director":
            case "Employee":
                return "DIRECTOR (NOMINEE)";
            case "Director under Section 17(3)(d) of the Accountants Act":
            case "Member":
                return "SHAREHOLDER";
            case "Beneficial Owner":
            case "Authorized Person":
                return "ULTIMATE BENEFICIAL OWNER";
            case "Nominator":
                return "NOMINEE/TRUSTEE";
            default: {
                throw new Error("Role is unknown");
            }
        }
    },
    entityType: (entityType, country) => {
        if (country !== "SG")
            return "FOREIGN ENTITY NOT REGISTERED WITH ACRA";
        if (!ArtemisEnum_1.ArtemisEnum.entityType.includes(entityType))
            return "UNKNOWN";
        return entityType;
    },
    shortCountry: (country) => {
        switch (country) {
            case "SG": return "SINGAPORE";
            case "MY": return "MALAYSIA";
            case "ID": return "INDONESIA";
            default: return country;
        }
    }
};
exports.default = ConvertToArtemisEnum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydEVudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZ3JvZi1hcnRlbWlzL3YzL3V0aWxzL0NvbnZlcnRFbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTRDO0FBRTVDLE1BQU0sb0JBQW9CLEdBQUc7SUFDekIsWUFBWSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDM0IsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLFVBQVUsQ0FBQyxDQUFDLE9BQU8sd0JBQXdCLENBQUM7WUFDakQsS0FBSyxNQUFNLENBQUMsQ0FBQyxPQUFPLGFBQWEsQ0FBQztZQUNsQyxPQUFPLENBQUMsQ0FBQztnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUE7YUFDOUM7U0FDSjtJQUNMLENBQUM7SUFDRCxZQUFZLEVBQUUsQ0FBQyxNQUFlLEVBQUUsRUFBRTtRQUM5QixJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRXpCLFFBQVEsTUFBTSxFQUFFO1lBQ1osS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLG1CQUFtQjtnQkFDcEIsT0FBTyxRQUFRLENBQUM7WUFDcEIsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sa0JBQWtCLENBQUM7WUFDbEQsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8saUJBQWlCLENBQUM7WUFDbkQsT0FBTyxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUE7U0FDM0I7SUFDTCxDQUFDO0lBQ0QsbUJBQW1CLEVBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRTtRQUNwQyxRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssaUJBQWlCLENBQUMsQ0FBQyxPQUFPLGtCQUFrQixDQUFDO1lBQ2xELEtBQUssbUJBQW1CLENBQUMsQ0FBQyxPQUFPLGlCQUFpQixDQUFDO1lBQ25ELEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQztZQUNyQyw4RkFBOEY7WUFDOUYsS0FBSyx3QkFBd0IsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLFVBQWtCLEVBQUUsRUFBRTtRQUN6QixRQUFRLFVBQVUsRUFBRTtZQUNoQixLQUFLLFVBQVUsQ0FBQztZQUNoQixLQUFLLHlCQUF5QixDQUFDO1lBQy9CLEtBQUssNEJBQTRCLENBQUM7WUFDbEMsS0FBSyxTQUFTLENBQUM7WUFDZixLQUFLLFNBQVMsQ0FBQztZQUNmLEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxtQkFBbUIsQ0FBQztZQUN6QixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssV0FBVztnQkFDWixPQUFPLFVBQVUsQ0FBQztZQUN0QixLQUFLLG9CQUFvQjtnQkFDckIsT0FBTyxzQkFBc0IsQ0FBQztZQUNsQyxLQUFLLGtCQUFrQixDQUFDO1lBQ3hCLEtBQUssVUFBVTtnQkFDWCxPQUFPLG9CQUFvQixDQUFDO1lBQ2hDLEtBQUssd0RBQXdELENBQUM7WUFDOUQsS0FBSyxRQUFRO2dCQUNULE9BQU8sYUFBYSxDQUFDO1lBQ3pCLEtBQUssa0JBQWtCLENBQUM7WUFDeEIsS0FBSyxtQkFBbUI7Z0JBQ3BCLE9BQU8sMkJBQTJCLENBQUM7WUFDdkMsS0FBSyxXQUFXO2dCQUNaLE9BQU8saUJBQWlCLENBQUM7WUFDN0IsT0FBTyxDQUFDLENBQUM7Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2FBQ3JDO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsVUFBVSxFQUFFLENBQUMsVUFBa0IsRUFBRSxPQUFlLEVBQUUsRUFBRTtRQUNoRCxJQUFJLE9BQU8sS0FBSyxJQUFJO1lBQUUsT0FBTyx5Q0FBeUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMseUJBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ2xFLE9BQU8sVUFBVSxDQUFBO0lBQ3JCLENBQUM7SUFDRCxZQUFZLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRTtRQUM5QixRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxXQUFXLENBQUM7WUFDOUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLFVBQVUsQ0FBQztZQUM3QixLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sV0FBVyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFBO1NBQzFCO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUFFRCxrQkFBZSxvQkFBb0IsQ0FBQSJ9