export interface TResApproval {
    id: number
    createdAt: string
    updatedAt: string
    createdBy: CreatedBy
    updatedBy: UpdatedBy
    risk: Risk
    riskRating: string
    overrideRiskRating: string
    riskScore: number
    approvalStatus: string
    customerId: number
    message: any
}

export interface CreatedBy {
    id: number
    firstName: string
    lastName: string
    email: string
    fullName: string
    rawFirstName: string
    rawLastName: string
    deleted: number
    role: string
}

export interface UpdatedBy {
    id: number
    firstName: string
    lastName: string
    email: string
    fullName: string
    rawFirstName: string
    rawLastName: string
    deleted: number
    role: string
}

export interface Risk {
    message: any
    comments: Comments
    risk_score: number
    risk_rating: string
    component_score: ComponentScore
    weight_settings: WeightSettings
}

export interface Comments {
    "3": string[]
}

export interface ComponentScore {
    cpi: number
    fsi: number
    fatf: number
    oecd: number
    fatca: number
    industry: number
    screening: number
    occupation: number
    payment_modes: number
    premium_amount: number
    onboarding_mode: number
    source_of_funds: number
    product_complexity: number
}

export interface WeightSettings {
    cpi: number
    fsi: number
    fatf: number
    oecd: number
    fatca: number
    industry: number
    screening: number
    occupation: number
    payment_modes: number
    primary_weight: number
    onboarding_mode: number
    product_complexity: number
}
