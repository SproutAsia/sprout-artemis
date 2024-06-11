export interface TResPostCustomerIndividual {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: any;
    updatedBy: any;
    active: boolean;
    parentId: any;
    profileId: number;
    type: string;
    referenceId: any;
    profileReferenceId: string;
    particular: Particular;
    other: Other;
    vendorName: string;
    vendorEntityGuid: string;
    lastRiskAssessment: any;
    status: string;
    riskRating: string;
    roles: any[];
    listRoleAsText: any[];
}
export interface Particular {
    salutation: string;
    name: string;
    alias: any[];
    formerName: any[];
    gender: string;
    countryOfResidence: string;
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
export interface Other {
    industry: string;
    occupation: string;
    onBoardingMode: string;
    paymentMode: string[];
    productServiceComplexity: string;
    sourceOfFunds: string;
    bankAccount: any[];
    natureOfBusinessRelationship: string;
    additionalInformation: string;
    documentList: any;
}
