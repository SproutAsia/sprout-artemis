// POST /records/{record_id}/documents/

export interface TResPostDocument {
    docTypeCategory: string
    docType: string
    authenticity: string
    issueDate: string
    expiryDate: string
    document: string
    showExpiryAlerts: boolean
}
