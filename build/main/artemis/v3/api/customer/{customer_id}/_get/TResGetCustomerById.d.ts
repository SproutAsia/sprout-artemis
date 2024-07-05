export interface TResGetCustomerById {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: CreatedBy;
    updatedBy: UpdatedBy;
    active: boolean;
    parentId: any;
    profileId: number;
    type: string;
    referenceId: any;
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
    watchers: Watcher[];
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
    name: string;
    alias: any[];
    email: any[];
    phone: any[];
    address: any[];
    imonumber: any;
    formerName: any[];
    incorporated: boolean;
    incorporateNumber: string;
    countryOfOperation: string[];
    dateOfIncorporation: any;
    countryOfIncorporation: string;
    dateOfIncorporationExpiry: any;
}
export interface Other {
    industry: string;
    entityType: string;
    bankAccount: any[];
    paymentMode: string[];
    documentList: any;
    sourceOfFunds: string;
    onBoardingMode: string;
    corporateWebsite: any;
    fatfjurisdiction: boolean;
    additionalInformation: string;
    variableCapitalCompany: any;
    ownershipStructureLayer: string;
    productServiceComplexity: string;
    natureOfBusinessRelationship: string;
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
export interface Watcher {
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
