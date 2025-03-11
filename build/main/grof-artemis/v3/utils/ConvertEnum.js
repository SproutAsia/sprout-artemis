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
            'Authorized Person',
            'Beneficial Owner',
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
            case "Salary": return "SALARY";
            case "Investment Revenue": return "INVESTMENT GAIN";
            case "Business Revenue": return "BUSINESS REVENUE";
            case "Business Income": return "BUSINESS REVENUE";
            case "Investment Gain": return "INVESTMENT GAIN";
            case "Investment Income": return "INVESTMENT GAIN";
            case "Shareholder Capital": return "INVESTMENT GAIN";
            case "Loan": return "LOAN";
            case "Debt Financing": return "LOAN";
            case "Others, please specify": return "OTHERS";
            default: return null;
        }
    },
    companySourceOfFund: (source) => {
        switch (source) {
            case "Business Revenue": return "BUSINESS REVENUE";
            case "Investment Gain": return "INVESTMENT GAIN";
            case "Loan": return "LOAN";
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
            case "Beneficial Owner":
                return "ULTIMATE BENEFICIAL OWNER";
            case "Corporate Representative":
            case "Authorized Person":
                // it should be other, and "other" in artemis can add free text role
                return "AUTHORIZED PERSON";
            default: {
                throw new Error("Role is unknown");
            }
        }
    },
    /**
     * @param entityType - is companyType in grof
     */
    entityType: (entityType) => {
        switch (entityType) {
            case 'FOREIGN ENTITY NOT REGISTERED WITH ACRA':
                return 'FOREIGN COMPANY';
            case 'EXEMPT PRIVATE COMPANY':
                return 'EXEMPT PRIVATE COMPANY LIMITED BY SHARES';
            default:
                return entityType;
        }
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
    },
    /**
     * Converts an address to Singapore address format
     * @param address - The address object to convert
     * @returns The formatted Singapore address string
     */
    toSingaporeAddress: (address) => {
        return `${address.blockHouse} ${address.streetName}${address.buildingName ? (`, ${address.buildingName}`) : ''} #${address.level || ""}-${address.unit || ""} ${address.postalCode || ""} Singapore`;
    },
};
exports.default = ConvertToArtemisEnum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydEVudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZ3JvZi1hcnRlbWlzL3YzL3V0aWxzL0NvbnZlcnRFbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0VBQW9FO0FBRXBFLE1BQU0sb0JBQW9CLEdBQUc7SUFDekIsSUFBSSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDbkIsT0FBTyx5QkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFDRCxPQUFPLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRTtRQUN6QixJQUFJLE9BQU8sS0FBSyxlQUFlO1lBQUUsT0FBTywwQkFBMEIsQ0FBQTtRQUNsRSxPQUFPLE9BQU8sQ0FBQTtJQUNsQixDQUFDO0lBQ0QsVUFBVSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDekIsSUFBSSxJQUFJLEtBQUssY0FBYztZQUFFLE9BQU8sY0FBYyxDQUFBO1FBQ2xELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNELGlCQUFpQixFQUFFLENBQUMsWUFBbUIsRUFBRSxFQUFFO1FBQ3ZDLE1BQU0sZUFBZSxHQUFHO1lBQ3BCLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsUUFBUTtZQUNSLDBCQUEwQjtZQUMxQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGtCQUFrQjtTQUNyQixDQUFDO1FBQ0YsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJO2dCQUNBLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3RDLE1BQU0sUUFBUSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFB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