// GET /records/{record_id}/internet_searches/

export interface TResGetRecordInternetSearch {
    count: number
    next: string
    previous: string
    results: Result[]
}

export interface Result {
    id: number
    internetSearchResults: InternetSearchResult[]
    createdAt: string
    updatedAt: string
    valid: boolean
    invalidReason: string
    version: string
    baseUrl: string
    isNlpFinished: boolean
    record: number
}

export interface InternetSearchResult {
    id: number
    createdAt: string
    updatedAt: string
    title: string
    summary: string
    link: string
    matched: boolean
    ner: string
    sentiment: string
    nlpJson: string
    isNlpFinished: boolean
    createdBy: string
    updatedBy: string
    internetSearch: number
}
