declare const ConvertToArtemisEnum: {
    appointmentToRole: (appointments: any[]) => any;
    documentType: (type: string) => "INTERNATIONAL PASSPORT" | "NATIONAL ID";
    sourceOfFund: (source?: string) => "SALARY" | "BUSINESS REVENUE" | "INVESTMENT GAIN" | "OTHERS";
    companySourceOfFund: (source: string) => "BUSINESS REVENUE" | "INVESTMENT GAIN" | "OTHERS" | "LOAN";
    role: (memberRole: string) => "DIRECTOR" | "DIRECTOR (NOMINEE)" | "SHAREHOLDER" | "NOMINEE/TRUSTEE" | "Corporate Representative";
    entityType: (entityType: string, country: string) => string;
    /**
     * @deprecated we should use enum from system variable instead
     */
    shortCountry: (country: string) => string;
};
export default ConvertToArtemisEnum;
