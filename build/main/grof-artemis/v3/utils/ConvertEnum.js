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
    },
    /**
     * Converts an address to Singapore address format
     * @param address - The address object to convert
     * @returns The formatted Singapore address string
     */
    toSingaporeAddress: (address) => {
        return `${address.blockHouse} ${address.streetName}${address.buildingName ? (`, ${address.buildingName}`) : ''} #${address.level}-${address.unit} ${address.postalCode || ""} Singapore`;
    },
};
exports.default = ConvertToArtemisEnum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVydEVudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZ3JvZi1hcnRlbWlzL3YzL3V0aWxzL0NvbnZlcnRFbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0VBQW9FO0FBRXBFLE1BQU0sb0JBQW9CLEdBQUc7SUFDekIsSUFBSSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDbkIsT0FBTyx5QkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFDRCxPQUFPLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRTtRQUN6QixJQUFJLE9BQU8sS0FBSyxlQUFlO1lBQUUsT0FBTywwQkFBMEIsQ0FBQTtRQUNsRSxPQUFPLE9BQU8sQ0FBQTtJQUNsQixDQUFDO0lBQ0QsVUFBVSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDekIsSUFBSSxJQUFJLEtBQUssY0FBYztZQUFFLE9BQU8sY0FBYyxDQUFBO1FBQ2xELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNELGlCQUFpQixFQUFFLENBQUMsWUFBbUIsRUFBRSxFQUFFO1FBQ3ZDLE1BQU0sZUFBZSxHQUFHO1lBQ3BCLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsUUFBUTtZQUNSLDBCQUEwQjtZQUMxQixXQUFXO1NBQ2QsQ0FBQztRQUNGLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSTtnQkFDQSxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUN0QyxNQUFNLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUN0RCxPQUFPLENB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