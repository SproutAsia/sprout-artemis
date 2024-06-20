import { ArtemisEnum } from "./ArtemisEnum";

const ConvertToArtemisEnum = {
    documentType: (type: string) => {
        switch (type) {
            case "Passport": return "INTERNATIONAL PASSPORT";
            case "NRIC": return "NATIONAL ID";
            default: {
                throw new Error("Document type is unknown")
            }
        }
    },
    sourceOfFund: (source?: string) => {
        if (!source) return null;

        switch (source) {
            case "Salary":
            case "Employment Income":
                return "SALARY";
            case "Business income": return "BUSINESS REVENUE";
            case "Investment income": return "INVESTMENT GAIN";
            default: return "OTHERS"
        }
    },
    companySourceOfFund: (source: string) => {
        switch (source) {
            case "Business income": return "BUSINESS REVENUE";
            case "Investment income": return "INVESTMENT GAIN";
            case "Debt financing": return "LOAN";
            // case "Shareholder capital": return "shareholder capital"; // TODO it's not exist in Artemis
            case "Others. Please specify": return "OTHERS";
            default: return "OTHERS";
        }
    },
    role: (memberRole: string) => {
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
                throw new Error("Role is unknown")
            }
        }
    },
    entityType: (entityType: string, country: string) => {
        if (country !== "SG") return "FOREIGN ENTITY NOT REGISTERED WITH ACRA"
        if (!ArtemisEnum.entityType.includes(entityType)) return "UNKNOWN"
        return entityType
    },
    shortCountry: (country: string) => {
        switch (country) {
            case "SG": return "SINGAPORE";
            case "MY": return "MALAYSIA";
            case "ID": return "INDONESIA";
            default: return country
        }
    }
}

export default ConvertToArtemisEnum