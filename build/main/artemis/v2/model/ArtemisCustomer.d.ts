export interface ArtemisCustomer {
    id: number;
    createdBy: CreatedBy;
    updatedBy: UpdatedBy;
    name: string;
    riskRating: string;
    status: string;
    customerType: string;
    createdAt: string;
    updatedAt: string;
    onboardingMode: string;
    productServiceComplexity: string;
    paymentModes: string[];
    profileType: string;
    isActiveCustomer: boolean;
    natureOfBusinessRelationship: string;
    referenceId: string;
    domains: number[];
    users: string[];
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
