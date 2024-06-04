// POST /records/{record_id}/internet_searches/

export interface TResPostRecordInternetSearch {
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
