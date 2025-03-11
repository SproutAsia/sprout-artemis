declare const ConvertToArtemisEnum: {
    ssic: (code: string) => string;
    country: (country: string) => string;
    onboarding: (args: string) => string;
    appointmentToRole: (appointments: any[]) => any;
    documentType: (type: string) => "NATIONAL ID" | "INTERNATIONAL PASSPORT";
    sourceOfFund: (source?: string) => "BUSINESS REVENUE" | "INVESTMENT GAIN" | "LOAN" | "SALARY" | "OTHERS";
    companySourceOfFund: (source: string) => "BUSINESS REVENUE" | "INVESTMENT GAIN" | "LOAN" | "OTHERS";
    role: (memberRole: string) => "DIRECTOR" | "DIRECTOR (NOMINEE)" | "SHAREHOLDER" | "ULTIMATE BENEFICIAL OWNER" | "NOMINEE/TRUSTEE" | "AUTHORIZED PERSON";
    /**
     * @param entityType - is companyType in grof
     */
    entityType: (entityType: string) => string;
    /**
     * @deprecated we should use enum from system variable instead
     */
    shortCountry: (country: string) => string;
    /**
     * Converts an address to Singapore address format
     * @param address - The address object to convert
     * @returns The formatted Singapore address string
     */
    toSingaporeAddress: (address: {
        blockHouse?: string;
        streetName?: string;
        buildingName?: string;
        level?: string;
        unit?: string;
        postalCode?: string;
    }) => string;
};
export default ConvertToArtemisEnum;
