export interface TResPutCustomer {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: CreatedBy;
    updatedBy: UpdatedBy;
    active: boolean;
    parentId: any;
    profileId: number;
    type: string;
    referenceId: string;
    profileReferenceId: string;
    particular: Particular;
    other: Other;
    notes: any;
    vendorName: any;
    vendorEntityGuid: any;
    lastRiskAssessment: any;
    status: string;
    riskRating: string;
    roles: any[];
    assignees: Assignee[];
    watchers: any[];
    forms: any;
    listRoleAsText: any[];
}
export interface CreatedBy {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    fullName: string;
    rawFirstName: string;
    rawLastName: string;
    deleted: number;
    role: string;
}
export interface UpdatedBy {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    fullName: string;
    rawFirstName: string;
    rawLastName: string;
    deleted: number;
    role: string;
}
export interface Particular {
    incorporated: boolean;
    name: string;
    alias: string[];
    formerName: any[];
    countryOfIncorporation: string;
    countryOfOperation: string[];
    address: string[];
    incorporateNumber: string;
    phone: any[];
    email: string[];
    dateOfIncorporation: string;
    dateOfIncorporationExpiry: any;
    imonumber: string;
}
export interface Other {
    ownershipStructureLayer: string;
    industry: string;
    onBoardingMode: string;
    paymentMode: string[];
    productServiceComplexity: string;
    bankAccount: any[];
    corporateWebsite: string;
    sourceOfFunds: string;
    natureOfBusinessRelationship: string;
    additionalInformation: string;
    documentList: any;
    entityType: string;
    variableCapitalCompany: any;
    fatfjurisdiction: boolean;
}
export interface Assignee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    fullName: string;
    rawFirstName: string;
    rawLastName: string;
    deleted: number;
    role: string;
}
