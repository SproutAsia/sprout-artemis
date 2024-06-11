export interface TResPutLatestScreening {
    additionalInformation: AdditionalInformation
    createdAt: CreatedAt
    createdBy: CreatedBy
    facInformation: FacInformation
    finalStatus: string
    hasHit: boolean
    id: number
    isPeriodic: boolean
    ocrInformation: OcrInformation
    oddStatus: string
    profileId: number
    quickscanName: string
    quickscanType: string
    remarks: string[]
    screenedWith: string[]
    screeningConclusion: string[]
    status: Status
    updatedAt: UpdatedAt2
    updatedBy: UpdatedBy2
    valid: boolean
}

export interface AdditionalInformation {
    djMonitoringCaseId: string
    djMonitoringTxId: string
    faceCompareDocumentId: string
    faceCompareSelfieId: string
    ocrDocumentId: string
}

export interface CreatedAt {
    date: number
    day: number
    hours: number
    minutes: number
    month: number
    nanos: number
    seconds: number
    time: number
    timezoneOffset: number
    year: number
}

export interface CreatedBy {
    email: string
    firstName: string
    fullName: string
    id: number
    lastName: string
}

export interface FacInformation {
    faceCompareDocumentId: number
    faceCompareSelfieId: number
}

export interface OcrInformation {
    ocrDocumentId: number
}

export interface Status {
    createdAt: CreatedAt2
    createdBy: CreatedBy2
    id: number
    profileId: number
    screeningId: number
    status: Status2
    updatedAt: UpdatedAt
    updatedBy: UpdatedBy
}

export interface CreatedAt2 {
    date: number
    day: number
    hours: number
    minutes: number
    month: number
    nanos: number
    seconds: number
    time: number
    timezoneOffset: number
    year: number
}

export interface CreatedBy2 {
    email: string
    firstName: string
    fullName: string
    id: number
    lastName: string
}

export interface Status2 {
    additionalProp1: AdditionalProp1
    additionalProp2: AdditionalProp2
    additionalProp3: AdditionalProp3
}

export interface AdditionalProp1 {
    message: string
    status: string
}

export interface AdditionalProp2 {
    message: string
    status: string
}

export interface AdditionalProp3 {
    message: string
    status: string
}

export interface UpdatedAt {
    date: number
    day: number
    hours: number
    minutes: number
    month: number
    nanos: number
    seconds: number
    time: number
    timezoneOffset: number
    year: number
}

export interface UpdatedBy {
    email: string
    firstName: string
    fullName: string
    id: number
    lastName: string
}

export interface UpdatedAt2 {
    date: number
    day: number
    hours: number
    minutes: number
    month: number
    nanos: number
    seconds: number
    time: number
    timezoneOffset: number
    year: number
}

export interface UpdatedBy2 {
    email: string
    firstName: string
    fullName: string
    id: number
    lastName: string
}
