export interface TResGetRiskReport {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: CreatedBy;
    updatedBy: UpdatedBy;
    risk: Risk;
    riskRating: string;
    overrideRiskRating: any;
    riskScore: number;
    approvalStatus: any;
    customerId: number;
    message: any;
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
export interface Risk {
    comments: Comments;
    component_score: ComponentScore;
    message: any;
    risk_rating: string;
    risk_score: number;
    weight_settings: WeightSettings;
}
export interface Comments {
    "28": string[];
    "29": any[];
}
export interface ComponentScore {
    cpi: number;
    entity_type: number;
    fatca: number;
    fatf: number;
    fsi: number;
    individual_shareholding: number;
    industry: number;
    oecd: number;
    onboarding_mode: number;
    ownership_layer: number;
    payment_modes: number;
    premium_amount: number;
    product_complexity: number;
    screening: number;
    source_of_funds: number;
}
export interface WeightSettings {
    cpi: number;
    entity_type: number;
    fatca: number;
    fatf: number;
    fsi: number;
    individual_shareholding: number;
    industry: number;
    oecd: number;
    onboarding_mode: number;
    ownership_layer: number;
    payment_modes: number;
    primary_weight: number;
    product_complexity: number;
    screening: number;
}
