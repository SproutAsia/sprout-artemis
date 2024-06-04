// POST /records/{record_id}/own_name_searches/

export interface TReqPostOwnNameSearch {
    valid: boolean
    invalidReason: string
    isPeriodic: boolean
    record: number
    domain: number
}
