/**
 * @description step 2. of customer-creation-workflow
 */
export interface TResGetCrp {
    content: Content[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
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
    createdBy: any;
    updatedBy: any;
    active: any;
    parentId: number;
    profileId: number;
    type: string;
    referenceId: any;
    profileReferenceId: string;
    particular: Particular;
    other: Other;
    vendorName: any;
    vendorEntityGuid: any;
    lastRiskAssessment: any;
    roles: Role[];
    listRoleAsText: string[];
}
export interface Particular {
    name: string;
    alias: any[];
    email: any[];
    phone: any[];
    gender: string;
    address: any[];
    formerName: any[];
    salutation: string;
    dateOfBirth: any;
    nationality: string[];
    countryOfBirth: string;
    identityNumber: string;
    countryOfResidence: string;
    identityExpiryDate: any;
    identityIssuedDate: any;
    identityDocumentType: string;
}
export interface Other {
    status: string;
    documentList: any;
    sourceOfFunds: string;
    bankAccountNumber: any[];
    ownershipPercentage: number;
    undischargedBankrupt: any;
}
export interface Role {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: any;
    updatedBy: any;
    role: string;
    appointedDate: string;
    resignedDate: any;
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
