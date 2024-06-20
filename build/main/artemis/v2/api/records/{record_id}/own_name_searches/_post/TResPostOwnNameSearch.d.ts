export interface TResPostOwnNameSearch {
    id: number;
    searchResults: SearchResult[];
    createdAt: string;
    updatedAt: string;
    valid: boolean;
    invalidReason: string;
    isPeriodic: boolean;
    record: number;
    domain: number;
}
export interface SearchResult {
    id: number;
    ownName: OwnName;
    createdAt: string;
    updatedAt: string;
    matched: boolean;
    createdBy: string;
    updatedBy: string;
    ownNameSearch: number;
}
export interface OwnName {
    id: number;
    ownSublistInfo: OwnSublistInfo;
    createdAt: string;
    updatedAt: string;
    fullName: string;
    idNumber: string;
    uniqueReferenceCode: string;
    country: string;
    comment: string;
    active: boolean;
    createdBy: string;
    updatedBy: string;
    ownSublist: number;
}
export interface OwnSublistInfo {
    id: number;
    createdAt: string;
    updatedAt: string;
    sublistName: string;
    createdBy: string;
    updatedBy: string;
    domains: number[];
}
