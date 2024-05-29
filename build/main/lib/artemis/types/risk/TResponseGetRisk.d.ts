export interface TResponseGetRisk {
    count: number;
    next: any;
    prev: any;
    results: Result[];
}
export interface Result {
    id: number;
    createdBy: CreatedBy;
    updatedBy: UpdatedBy;
    riskJson: RiskJson;
    isOutdated: boolean;
    latestApprovalStatus: LatestApprovalStatus;
    createdAt: string;
    updatedAt: string;
    riskRating: string;
    outdated: boolean;
    customer: number;
}
export interface CreatedBy {
    id: string;
    name: string;
    email: string;
    oauthId: string;
    isActive: boolean;
    mfaEnabled: boolean;
}
export interface UpdatedBy {
    id: string;
    name: string;
    email: string;
    oauthId: string;
    isActive: boolean;
    mfaEnabled: boolean;
}
export interface RiskJson {
    comments: Comments;
    settings: Settings;
    riskScore: number;
    riskRating: string;
    componentScore: ComponentScore;
}
export interface Comments {
    "18602": any[];
    "18603": any[];
}
export interface Settings {
    weight: Weight;
    highRiskThreshold: number;
    mediumRiskThreshold: number;
}
export interface Weight {
    CORPORATE: Corporate;
    INDIVIDUAL: Individual;
}
export interface Corporate {
    cpi: number;
    fsi: number;
    fatf: number;
    oecd: number;
    fatca: number;
    industry: number;
    screening: number;
    entityType: number;
    paymentModes: number;
    primaryWeight: number;
    onboardingMode: number;
    ownershipLayer: number;
    sourceOfFunds: number;
    productComplexity: number;
}
export interface Individual {
    cpi: number;
    fsi: number;
    fatf: number;
    oecd: number;
    fatca: number;
    industry: number;
    screening: number;
    occupation: number;
    paymentModes: number;
    primaryWeight: number;
    onboardingMode: number;
    sourceOfFunds: number;
    productComplexity: number;
}
export interface ComponentScore {
    cpi: number;
    fsi: number;
    fatf: number;
    oecd: number;
    fatca: number;
    industry: number;
    screening: number;
    entityType: number;
    paymentModes: number;
    onboardingMode: number;
    ownershipLayer: number;
    sourceOfFunds: number;
    productComplexity: number;
}
export interface LatestApprovalStatus {
    id: number;
    createdBy: CreatedBy2;
    updatedBy: UpdatedBy2;
    createdAt: string;
    updatedAt: string;
    overrideRisk: string;
    approvalStatus: string;
    riskReport: number;
    notifyPerson: any;
}
export interface CreatedBy2 {
    id: string;
    name: string;
    email: string;
    oauthId: string;
    isActive: boolean;
    mfaEnabled: boolean;
}
export interface UpdatedBy2 {
    id: string;
    name: string;
    email: string;
    oauthId: string;
    isActive: boolean;
    mfaEnabled: boolean;
}
