declare const ConvertToArtemisEnum: {
    ssic: (code: string) => string;
    country: (country: string) => string;
    onboarding: (args: string) => string;
    appointmentToRole: (appointments: any[]) => any;
    documentType: (type: string) => "INTERNATIONAL PASSPORT" | "NATIONAL ID";
    sourceOfFund: (source?: string) => "SALARY" | "INVESTMENT REVENUE" | "BUSINESS REVENUE" | "INVESTMENT GAIN" | "LOAN" | "OTHERS";
    companySourceOfFund: (source: string) => "BUSINESS REVENUE" | "INVESTMENT GAIN" | "LOAN" | "OTHERS";
    role: (memberRole: string) => "DIRECTOR" | "DIRECTOR (NOMINEE)" | "SHAREHOLDER" | "NOMINEE/TRUSTEE" | "ULTIMATE BENEFICIAL OWNER" | "AUTHORIZED PERSON";
    /**
     * @deprecated condition when country is SG was removed
     * @param entityType - is companyType in grof
     */
    entityType: (entityType: string, country: string) => string;
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
