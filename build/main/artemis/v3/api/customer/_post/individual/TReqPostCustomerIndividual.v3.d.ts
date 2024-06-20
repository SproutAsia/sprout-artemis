export interface TReqPostCustomerIndividual {
    /**
     * @requires
     */
    active: boolean;
    /**
     * @requires
     */
    profileReferenceId: string;
    /**
     * @requires half
     */
    other: Other;
    /**
     * @requires
     */
    particular: Particular;
    /**
     * @requires
     */
    type: string;
    /**
     * @requires
     */
    domainId: string[];
    /**
     * @requires
     */
    assigneeId: string;
}
export interface Other {
    /**
     * @requires
     */
    industry: string;
    /**
     * @requires
     * @description Artemis has enum of it
     */
    occupation: string;
    /**
     * @requires
     */
    onBoardingMode: string;
    /**
     * @requires
     */
    paymentMode: string[];
    /**
     * @requires
     */
    productServiceComplexity: string;
    sourceOfFunds: string;
    bankAccount: any[];
    additionalInformation: string;
    natureOfBusinessRelationship: string;
}
export interface Particular {
    salutation: string;
    /**
     * @requires
     */
    name: string;
    alias: any[];
    formerName: any[];
    /**
     * @requires
     */
    gender: string;
    /**
     * @requires
     */
    countryOfResidence: string;
    /**
     * @requires
     */
    nationality: string[];
    countryOfBirth: string;
    dateOfBirth: any;
    address: any[];
    phone: any[];
    email: any[];
    identityDocumentType: string;
    identityNumber: string;
    identityIssuedDate: any;
    identityExpiryDate: any;
}
