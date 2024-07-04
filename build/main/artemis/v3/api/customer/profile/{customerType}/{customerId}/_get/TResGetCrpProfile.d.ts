export interface TResGetCrpProfile {
    content: Content[];
    pageable: Pageable;
    totalElements: number;
    totalPages: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort2;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}
export interface Content {
    customerCandidate: CustomerCandidate;
}
export interface CustomerCandidate {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: CreatedBy;
    updatedBy: UpdatedBy;
    active?: boolean;
    parentId?: number;
    profileId: number;
    type: string;
    referenceId?: string;
    profileReferenceId: string;
    particular: Particular;
    other: Other;
    notes: any;
    vendorName: any;
    vendorEntityGuid: any;
    lastRiskAssessment: any;
    roles: Role[];
    assignees: Assignee[];
    watchers: any[];
    listRoleAsText: string[];
    status?: string;
    riskRating?: string;
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
    alias: string[];
    email: any[];
    phone?: any[];
    address: string[];
    imonumber: string;
    formerName: any[];
    incorporated: boolean;
    incorporateNumber?: string;
    countryOfOperation: string[];
    dateOfIncorporation?: string;
    countryOfIncorporation: string;
    dateOfIncorporationExpiry: any;
}
export interface Other {
    additionalInformation: string;
    bankAccountNumber?: any[];
    businessCessationDate: any;
    corporateWebsite?: string;
    dateOfIncorporation: any;
    dateOfIncorporationExpiry: any;
    documentList: any;
    entityType: string;
    ownershipPercentage?: number;
    ownershipStructureLayer: string;
    sourceOfFunds?: string;
    status?: string;
    undischargedBankrupt: any;
    variableCapitalCompany: any;
    industry?: string;
    bankAccount?: any[];
    paymentMode?: string[];
    onBoardingMode?: string;
    fatfjurisdiction?: boolean;
    productServiceComplexity?: string;
    natureOfBusinessRelationship?: string;
}
export interface Role {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: CreatedBy2;
    updatedBy: UpdatedBy2;
    role: string;
    appointedDate: string;
    resignedDate: any;
}
export interface CreatedBy2 {
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
export interface UpdatedBy2 {
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
export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}
export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
export interface Sort2 {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
