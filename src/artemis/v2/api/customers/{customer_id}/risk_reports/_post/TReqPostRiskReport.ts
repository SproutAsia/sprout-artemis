export interface TReqPostRiskReport {
    latestApprovalStatus: LatestApprovalStatus
    riskRating: string
    outdated: boolean
    customer: number
}

export interface LatestApprovalStatus {
    overrideRisk: string
    approvalStatus: string
    riskReport: number
    notifyPerson: string
}
