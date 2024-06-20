declare const ConvertToArtemisEnum: {
    documentType: (type: string) => "INTERNATIONAL PASSPORT" | "NATIONAL ID";
    sourceOfFund: (source?: string) => "OTHERS" | "SALARY" | "BUSINESS REVENUE" | "INVESTMENT GAIN";
    companySourceOfFund: (source: string) => "OTHERS" | "BUSINESS REVENUE" | "INVESTMENT GAIN" | "LOAN";
    role: (memberRole: string) => "DIRECTOR" | "DIRECTOR (ALTERNATE)" | "DIRECTOR (NOMINEE)" | "SHAREHOLDER" | "ULTIMATE BENEFICIAL OWNER" | "NOMINEE/TRUSTEE";
    entityType: (entityType: string, country: string) => string;
    shortCountry: (country: string) => string;
};
export default ConvertToArtemisEnum;
