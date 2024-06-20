export interface TResGetCustomerCrps {
    count: number;
    next: any;
    prev: any;
    results: Result[];
}
export interface Result {
    id: number;
    createdBy: CreatedBy;
    updatedBy: UpdatedBy;
    name: string;
    recordType: string;
    roles: Role[];
    latestScreeningConclusion: any;
    status: string;
    createdAt: string;
    updatedAt: string;
    primary: boolean;
    customer: number;
    primaryCrpOf: any;
    record: number;
    fileBucket: number;
    dialog: number;
}
export interface CreatedBy {
    id: string;
    name: string;
    email: string;
    oauthId: string;
    isActive: boolean;
    mfaEnabled: boolean;
}
export interface UpdatedBy {
    id: string;
    name: string;
    email: string;
    oauthId: string;
    isActive: boolean;
    mfaEnabled: boolean;
}
export interface Role {
    id: number;
    createdBy: any;
    updatedBy: any;
    createdAt: string;
    updatedAt: string;
    dateAppointed: string;
    dateResigned: string;
    role: string;
    crp: number;
}
