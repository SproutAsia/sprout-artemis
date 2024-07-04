"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisEnum_1 = require("./ArtemisEnum");
const ConvertToArtemisEnum = {
    appointmentToRole: (appointments) => {
        const roles = appointments.reduce((a, b) => {
            try {
                const position = ConvertToArtemisEnum.role(b.position);
                return [...a, {
                        role: position,
                        appointedDate: b.appointmentDate,
                        resignedDate: b.resignedDate
                    }];
            }
            catch (e) {
                return a;
            }
        }, []);
        return roles;
    },
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
                return "DIRECTOR";
            case "Nominee Director":
                return "DIRECTOR (NOMINEE)";
            case "Member":
                return "SHAREHOLDER";
            case "Nominator":
                return "NOMINEE/TRUSTEE";
            case "Corporate Representative":
                // it should be other, and "other" in artemis can add free text role
                return memberRole;
            default: {
                throw new Error("Role is unknown");
            }
        }
    },
    entityType: (entityType, country) => {
        if (country !== "SG")
            return "FOREIGN ENTITY NOT REGISTERED WITH ACRA";
        // "UNKNOWN" is from Artemis Enum
        if (!ArtemisEnum_1.ArtemisEnum.entityType.includes(entityType))
            return "UNKNOWN";
        return entityType;
    },
    /**
     * @deprecated we should use enum from system variable instead
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydEVudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZ3JvZi1hcnRlbWlzL3YzL3V0aWxzL0NvbnZlcnRFbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTRDO0FBRTVDLE1BQU0sb0JBQW9CLEdBQUc7SUFDekIsaUJBQWlCLEVBQUUsQ0FBQyxZQUFtQixFQUFFLEVBQUU7UUFDdkMsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJO2dCQUNBLE1BQU0sUUFBUSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDVixJQUFJLEVBQUUsUUFBUTt3QkFDZCxhQUFhLEVBQUUsQ0FBQyxDQUFDLGVBQWU7d0JBQ2hDLFlBQVksRUFBRSxDQUFDLENBQUMsWUFBWTtxQkFDL0IsQ0FBQyxDQUFBO2FBQ0w7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsQ0FBQTthQUNYO1FBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ04sT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUNELFlBQVksRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFO1FBQzNCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxVQUFVLENBQUMsQ0FBQyxPQUFPLHdCQUF3QixDQUFDO1lBQ2pELEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxhQUFhLENBQUM7WUFDbEMsT0FBTyxDQUFDLENBQUM7Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO2FBQzlDO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsWUFBWSxFQUFFLENBQUMsTUFBZSxFQUFFLEVBQUU7UUFDOUIsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLElBQUksQ0FBQztRQUV6QixRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxtQkFBbUI7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDO1lBQ3BCLEtBQUssaUJBQWlCLENBQUMsQ0FBQyxPQUFPLGtCQUFrQixDQUFDO1lBQ2xELEtBQUssbUJBQW1CLENBQUMsQ0FBQyxPQUFPLGlCQUFpQixDQUFDO1lBQ25ELE9BQU8sQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFBO1NBQzNCO0lBQ0wsQ0FBQztJQUNELG1CQUFtQixFQUFFLENBQUMsTUFBYyxFQUFFLEVBQUU7UUFDcEMsUUFBUSxNQUFNLEVBQUU7WUFDWixLQUFLLGlCQUFpQixDQUFDLENBQUMsT0FBTyxrQkFBa0IsQ0FBQztZQUNsRCxLQUFLLG1CQUFtQixDQUFDLENBQUMsT0FBTyxpQkFBaUIsQ0FBQztZQUNuRCxLQUFLLGdCQUFnQixDQUFDLENBQUMsT0FBTyxNQUFNLENBQUM7WUFDckMsOEZBQThGO1lBQzlGLEtBQUssd0JBQXdCLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQztZQUMvQyxPQUFPLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxVQUFrQixFQUFFLEVBQUU7UUFDekIsUUFBUSxVQUFVLEVBQUU7WUFDaEIsS0FBSyxVQUFVO2dCQUNYLE9BQU8sVUFBVSxDQUFDO1lBQ3RCLEtBQUssa0JBQWtCO2dCQUNuQixPQUFPLG9CQUFvQixDQUFDO1lBQ2hDLEtBQUssUUFBUTtnQkFDVCxPQUFPLGFBQWEsQ0FBQztZQUN6QixLQUFLLFdBQVc7Z0JBQ1osT0FBTyxpQkFBaUIsQ0FBQztZQUM3QixLQUFLLDBCQUEwQjtnQkFDM0Isb0VBQW9FO2dCQUNwRSxPQUFPLFVBQVUsQ0FBQztZQUN0QixPQUFPLENBQUMsQ0FBQztnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUE7YUFDckM7U0FDSjtJQUNMLENBQUM7SUFDRCxVQUFVLEVBQUUsQ0FBQyxVQUFrQixFQUFFLE9BQWUsRUFBRSxFQUFFO1FBQ2hELElBQUksT0FBTyxLQUFLLElBQUk7WUFBRSxPQUFPLHlDQUF5QyxDQUFBO1FBQ3RFLGlDQUFpQztRQUNqQyxJQUFJLENBQUMseUJBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ2xFLE9BQU8sVUFBVSxDQUFBO0lBQ3JCLENBQUM7SUFDRDs7T0FFRztJQUNILFlBQVksRUFBRSxDQUFDLE9BQWUsRUFBRSxFQUFFO1FBQzlCLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLFdBQVcsQ0FBQztZQUM5QixLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sVUFBVSxDQUFDO1lBQzdCLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxXQUFXLENBQUM7WUFDOUIsT0FBTyxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUE7U0FDMUI7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQUVELGtCQUFlLG9CQUFvQixDQUFBIn0=