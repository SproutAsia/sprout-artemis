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
            case "Investment Revenue": return "INVESTMENT REVENUE";
            case "Business Revenue": return "BUSINESS REVENUE";
            case "Investment Gain": return "INVESTMENT GAIN";
            case "Loan": return "LOAN";
            case "Others, please specify": return "OTHERS";
            default: return null;
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
     * @deprecated condition when country is SG was removed
     * @param entityType - is companyType in grof
     */
    entityType: (entityType, country) => {
        // if (country !== "SG") return "FOREIGN ENTITY NOT REGISTERED WITH ACRA"
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