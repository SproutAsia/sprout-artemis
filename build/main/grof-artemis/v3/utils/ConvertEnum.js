"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArtemisSsic_1 = require("../../../artemis/v3/shared/ArtemisSsic");
const ConvertToArtemisEnum = {
    ssic: (code) => {
        return ArtemisSsic_1.ArtemisSsic.find((ssic) => ssic.includes(code));
    },
    country: (country) => {
        if (country === "UNITED STATES")
            return "UNITED STATES OF AMERICA";
        return country;
    },
    onboarding: (args) => {
        if (args === "FACE TO FACE")
            return "FACE-TO-FACE";
        return args;
    },
    appointmentToRole: (appointments) => {
        const allowedPosition = [
            'Director',
            'Nominee Director',
            'Member',
            'Corporate Representative',
            'Nominator',
        ];
        const roles = appointments.reduce((a, b) => {
            try {
                if (allowedPosition.includes(b.position)) {
                    const position = ConvertToArtemisEnum.role(b.position);
                    return [...a, {
                            role: position,
                            appointedDate: b.appointmentDate,
                            resignedDate: b.resignedDate
                        }];
                }
                else {
                    return a;
                }
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
    /**
     *
     * @param entityType - is companyType in grof
     */
    entityType: (entityType, country) => {
        if (country !== "SG")
            return "FOREIGN ENTITY NOT REGISTERED WITH ACRA";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydEVudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZ3JvZi1hcnRlbWlzL3YzL3V0aWxzL0NvbnZlcnRFbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0VBQW9FO0FBRXBFLE1BQU0sb0JBQW9CLEdBQUc7SUFDekIsSUFBSSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDbkIsT0FBTyx5QkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFDRCxPQUFPLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRTtRQUN6QixJQUFJLE9BQU8sS0FBSyxlQUFlO1lBQUUsT0FBTywwQkFBMEIsQ0FBQTtRQUNsRSxPQUFPLE9BQU8sQ0FBQTtJQUNsQixDQUFDO0lBQ0QsVUFBVSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDekIsSUFBSSxJQUFJLEtBQUssY0FBYztZQUFFLE9BQU8sY0FBYyxDQUFBO1FBQ2xELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNELGlCQUFpQixFQUFFLENBQUMsWUFBbUIsRUFBRSxFQUFFO1FBQ3ZDLE1BQU0sZUFBZSxHQUFHO1lBQ3BCLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsUUFBUTtZQUNSLDBCQUEwQjtZQUMxQixXQUFXO1NBQ2QsQ0FBQztRQUNGLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSTtnQkFDQSxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUN0QyxNQUFNLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUN0RCxPQUFPLENB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