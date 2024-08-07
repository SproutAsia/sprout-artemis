declare const ConvertToArtemisEnum: {
    ssic: (code: string) => string;
    country: (country: string) => string;
    onboarding: (args: string) => string;
    appointmentToRole: (appointments: any[]) => any;
    documentType: (type: string) => "INTERNATIONAL PASSPORT" | "NATIONAL ID";
    sourceOfFund: (source?: string) => "SALARY" | "BUSINESS REVENUE" | "INVESTMENT GAIN" | "OTHERS";
    companySourceOfFund: (source: string) => "BUSINESS REVENUE" | "INVESTMENT GAIN" | "OTHERS" | "LOAN";
    role: (memberRole: string) => "DIRECTOR" | "DIRECTOR (NOMINEE)" | "SHAREHOLDER" | "NOMINEE/TRUSTEE" | "Corporate Representative";
    /**
     *
     * @param entityType - is companyType in grof
     */
    entityType: (entityType: string, country: string) => string;
    /**
     * @deprecated we should use enum from system variable instead
     */
    shortCountry: (country: string) => string;
};
export default ConvertToArtemisEnum;
