export type TResRemoveHit = Root2[];
export interface Root2 {
    body: Body;
    comment: any;
    commentCount: number;
    createdAt: string;
    createdBy: CreatedBy;
    diff: any;
    externalId: string;
    id: number;
    matched: string;
    newMatch: boolean;
    profileId: number;
    screeningId: number;
    screeningSessionId: number;
    screeningType: string;
    updatedAt: string;
    updatedBy: UpdatedBy;
}
export interface Body {
    GRT: any;
    dob: string;
    list: string;
    parse: string;
    title: string;
    gender: string;
    on_SDN: boolean;
    ent_num: string;
    hash_id: string;
    program: string;
    remarks: any;
    tonnage: any;
    SDN_name: string;
    SDN_type: string;
    call_sign: any;
    concat_al: any;
    vess_flag: any;
    vess_type: any;
    vess_owner: any;
    nationality: string;
    record_type: string;
    formatted_name: string;
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
