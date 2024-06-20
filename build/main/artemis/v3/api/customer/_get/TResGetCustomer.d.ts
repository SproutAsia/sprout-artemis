export interface TResGetCustomer {
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
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: CreatedBy;
    updatedBy: UpdatedBy;
    active: boolean;
    parentId: any;
    profileId: number;
    type: string;
    referenceId?: string;
    profileReferenceId: string;
    particular: Particular;
    other: Other;
    notes: any;
    vendorName: any;
    vendorEntityGuid: any;
    lastRiskAssessment?: string;
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
    phone: string[];
    gender?: string;
    address: string[];
    formerName: any[];
    salutation?: string;
    dateOfBirth: any;
    nationality?: string[];
    countryOfBirth?: string;
    identityNumber?: string;
    countryOfResidence?: string;
    identityExpiryDate: any;
    identityIssuedDate: any;
    identityDocumentType?: string;
    imonumber?: string;
    incorporated?: boolean;
    incorporateNumber?: string;
    countryOfOperation?: string[];
    dateOfIncorporation?: string;
    countryOfIncorporation?: string;
    dateOfIncorporationExpiry?: string;
}
export interface Other {
    industry: string;
    occupation?: string;
    bankAccount: string[];
    paymentMode: string[];
    documentList: any;
    sourceOfFunds: string;
    onBoardingMode: string;
    additionalInformation: string;
    productServiceComplexity: string;
    natureOfBusinessRelationship: string;
    entityType?: string;
    corporateWebsite?: string;
    fatfjurisdiction?: boolean;
    variableCapitalCompany: any;
    ownershipStructureLayer?: string;
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
