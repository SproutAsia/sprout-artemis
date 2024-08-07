export type TResGetCustomerScreen = Root2[];
export interface Root2 {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: CreatedBy;
    updatedBy: UpdatedBy;
    profileId: number;
    finalStatus: string;
    screeningSessionId: number;
    screeningSessionDate: string;
    screeningSessionType: string;
    isPeriodic: boolean;
    hasHit: boolean;
    status: Status;
    oddStatus: any;
    screenedWith: string[];
    screeningConclusion: string[];
    ocrConclusion: any;
    faceCompareConclusion: any;
    valid: boolean;
    ocrValid: boolean;
    facValid: boolean;
    remarks: any;
    quickscanName: any;
    quickscanType: any;
    additionalInformation: AdditionalInformation;
    ocrInformation: OcrInformation;
    facInformation: FacInformation;
    description: any;
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
export interface Status {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: CreatedBy2;
    updatedBy: UpdatedBy2;
    screeningId: number;
    profileId: number;
    status: Status2;
}
export interface CreatedBy2 {
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
export interface UpdatedBy2 {
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
export interface Status2 {
    ARTEMISCAN: Artemiscan;
    INTERNET_SEARCH: InternetSearch;
    TR: Tr;
    OWN_RESTRICTED_LIST: OwnRestrictedList;
}
export interface Artemiscan {
    status: string;
    screeningSessionId: number;
    message: string;
}
export interface InternetSearch {
    status: string;
    screeningSessionId: number;
    message: string;
}
export interface Tr {
    status: string;
    screeningSessionId: number;
    message: string;
}
export interface OwnRestrictedList {
    status: string;
    screeningSessionId: number;
    message: string;
}
export interface AdditionalInformation {
    djMonitoringCaseId: any;
    djMonitoringTxId: any;
    trCaseId: string;
    faceCompareDocumentId: any;
    faceCompareSelfieId: any;
    ocrDocumentId: any;
}
export interface OcrInformation {
    ocrDocumentId: any;
    ocrDocuments: any;
}
export interface FacInformation {
    faceCompareDocumentId: any;
    faceCompareSelfieId: any;
    faceCompareDocuments: any;
}
