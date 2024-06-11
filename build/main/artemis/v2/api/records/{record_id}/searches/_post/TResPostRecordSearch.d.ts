export interface TResPostRecordSearch {
    id: number;
    searchResults: SearchResult[];
    searchText: string;
    recordType: string;
    baseUrl: string;
    createdAt: string;
    updatedAt: string;
    engineType: string;
    engineVersion: string;
    valid: boolean;
    invalidReason: string;
    isPeriodic: boolean;
    isSearchFinished: boolean;
    record: number;
}
export interface SearchResult {
    id: number;
    createdAt: string;
    updatedAt: string;
    searchResponse: string;
    uniqueReferenceCode: string;
    matched: boolean;
    createdBy: string;
    updatedBy: string;
    search: number;
    dialog: number;
}
