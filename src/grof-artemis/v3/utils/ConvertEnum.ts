import { ArtemisEnum } from "./ArtemisEnum";

const ConvertToArtemisEnum = {
    appointmentToRole: (appointments: any[]) => {
        const roles = appointments.reduce((a, b) => {
            try {
                const position = ConvertToArtemisEnum.role(b.position)
                return [...a, {
                    role: position,
                    appointedDate: b.appointmentDate,
                    resignedDate: b.resignedDate
                }]
            } catch (e) {
                return a
            }
        }, [])
        return roles
    },
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
                throw new Error("Role is unknown")
            }
        }
    },
    entityType: (entityType: string, country: string) => {
        if (country !== "SG") return "FOREIGN ENTITY NOT REGISTERED WITH ACRA"
        // "UNKNOWN" is from Artemis Enum
        if (!ArtemisEnum.entityType.includes(entityType)) return "UNKNOWN"
        return entityType
    },
    /**
     * @deprecated we should use enum from system variable instead
     */
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