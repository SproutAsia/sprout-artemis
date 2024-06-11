export interface TResGetScreenSummary {
    content: Content[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: Pageable;
    size: number;
    sort: Sort2;
    totalElements: number;
    totalPages: number;
}
export interface Content {
    customer: Customer;
    parentCustomer: ParentCustomer;
    screening: Screening;
}
export interface Customer {
    active: boolean;
    assignees: Assignee[];
    createdAt: CreatedAt;
    createdBy: CreatedBy;
    forms: Forms;
    id: number;
    lastRiskAssessment: string;
    listRoleAsText: string[];
    notes: Notes;
    other: Other;
    parentId: number;
    particular: Particular;
    profileId: number;
    profileReferenceId: string;
    referenceId: string;
    riskRating: string;
    roles: Role[];
    status: string;
    type: string;
    updatedAt: UpdatedAt2;
    updatedBy: UpdatedBy2;
    vendorEntityGuid: string;
    vendorName: string;
}
export interface Assignee {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface CreatedAt {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface CreatedBy {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
type Forms = any;
type Notes = any;
type Other = any;
type Particular = any;
export interface Role {
    appointedDate: string;
    createdAt: CreatedAt2;
    createdBy: CreatedBy2;
    id: number;
    resignedDate: string;
    role: string;
    updatedAt: UpdatedAt;
    updatedBy: UpdatedBy;
}
export interface CreatedAt2 {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface CreatedBy2 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface UpdatedAt {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface UpdatedBy {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface UpdatedAt2 {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface UpdatedBy2 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface ParentCustomer {
    active: boolean;
    assignees: Assignee2[];
    createdAt: CreatedAt3;
    createdBy: CreatedBy3;
    forms: Forms2;
    id: number;
    lastRiskAssessment: string;
    listRoleAsText: string[];
    notes: Notes2;
    other: Other2;
    parentId: number;
    particular: Particular2;
    profileId: number;
    profileReferenceId: string;
    referenceId: string;
    riskRating: string;
    roles: Role2[];
    status: string;
    type: string;
    updatedAt: UpdatedAt4;
    updatedBy: UpdatedBy4;
    vendorEntityGuid: string;
    vendorName: string;
}
export interface Assignee2 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface CreatedAt3 {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface CreatedBy3 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
type Forms2 = any;
type Notes2 = any;
type Other2 = any;
type Particular2 = any;
export interface Role2 {
    appointedDate: string;
    createdAt: CreatedAt4;
    createdBy: CreatedBy4;
    id: number;
    resignedDate: string;
    role: string;
    updatedAt: UpdatedAt3;
    updatedBy: UpdatedBy3;
}
export interface CreatedAt4 {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface CreatedBy4 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface UpdatedAt3 {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface UpdatedBy3 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface UpdatedAt4 {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface UpdatedBy4 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface Screening {
    additionalInformation: AdditionalInformation;
    createdAt: CreatedAt5;
    createdBy: CreatedBy5;
    facInformation: FacInformation;
    finalStatus: string;
    hasHit: boolean;
    id: number;
    isPeriodic: boolean;
    ocrInformation: OcrInformation;
    oddStatus: string;
    profileId: number;
    quickscanName: string;
    quickscanType: string;
    remarks: string[];
    screenedWith: string[];
    screeningConclusion: string[];
    status: Status;
    updatedAt: UpdatedAt6;
    updatedBy: UpdatedBy6;
    valid: boolean;
}
export interface AdditionalInformation {
    djMonitoringCaseId: string;
    djMonitoringTxId: string;
    faceCompareDocumentId: string;
    faceCompareSelfieId: string;
    ocrDocumentId: string;
}
export interface CreatedAt5 {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface CreatedBy5 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface FacInformation {
    faceCompareDocumentId: number;
    faceCompareSelfieId: number;
}
export interface OcrInformation {
    ocrDocumentId: number;
}
export interface Status {
    createdAt: CreatedAt6;
    createdBy: CreatedBy6;
    id: number;
    profileId: number;
    screeningId: number;
    status: Status2;
    updatedAt: UpdatedAt5;
    updatedBy: UpdatedBy5;
}
export interface CreatedAt6 {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface CreatedBy6 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface Status2 {
    additionalProp1: AdditionalProp1;
    additionalProp2: AdditionalProp2;
    additionalProp3: AdditionalProp3;
}
export interface AdditionalProp1 {
    message: string;
    status: string;
}
export interface AdditionalProp2 {
    message: string;
    status: string;
}
export interface AdditionalProp3 {
    message: string;
    status: string;
}
export interface UpdatedAt5 {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface UpdatedBy5 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface UpdatedAt6 {
    date: number;
    day: number;
    hours: number;
    minutes: number;
    month: number;
    nanos: number;
    seconds: number;
    time: number;
    timezoneOffset: number;
    year: number;
}
export interface UpdatedBy6 {
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
}
export interface Pageable {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: Sort;
    unpaged: boolean;
}
export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
export interface Sort2 {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
export {};
