export interface TResPostRiskReport {
    id: number
    riskJson: RiskJson
    isOutdated: boolean
    latestApprovalStatus: LatestApprovalStatus
    createdAt: string
    updatedAt: string
    riskRating: string
    outdated: boolean
    customer: number
}

export interface RiskJson {
    additionalProp1: string
    additionalProp2: string
    additionalProp3: string
}

export interface LatestApprovalStatus {
    id: number
    createdAt: string
    updatedAt: string
    overrideRisk: string
    approvalStatus: string
    riskReport: number
    notifyPerson: string
}
