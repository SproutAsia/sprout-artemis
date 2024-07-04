export interface TResHit {
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
    screeningId: number;
    screeningType: string;
    externalId: string;
    diff: any;
    body: Body;
    matched: string;
    newMatch: boolean;
    profileId: number;
    commentCount: number;
    comment: any;
    screeningSessionId: number;
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
export interface Body {
    list: string;
    basis?: string;
    parse: string;
    country?: string;
    hash_id: string;
    concat_al: any;
    record_type: string;
    primary_name?: string;
    reference_id?: string;
    formatted_name: string;
    GRT: any;
    dob?: string;
    title?: string;
    gender?: string;
    on_SDN?: boolean;
    ent_num?: string;
    program?: string;
    remarks: any;
    tonnage: any;
    SDN_name?: string;
    SDN_type?: string;
    call_sign: any;
    vess_flag: any;
    vess_type: any;
    vess_owner: any;
    nationality?: string;
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
