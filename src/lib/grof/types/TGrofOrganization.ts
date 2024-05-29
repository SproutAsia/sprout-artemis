export interface TGroOrganization {
    _id: Id
    users: User[]
    companyName: string
    freemiumDetails: FreemiumDetails
    subscriptionDetails: SubscriptionDetails
    isPremium: boolean
    status: Status
    createdAt: CreatedAt
    updatedAt: UpdatedAt
    niumCustomerId: string
    __v: number
    niumCaseId: string
    niumClientId: string
    companyId: CompanyId
    organizationPlan: string
    activeModules: string[]
}

export interface Id {
    $oid: string
}

export interface User {
    userId: string
    status: string
    role: string
    generatedEmail: string
    roles: Role[]
    isSuperAdmin: boolean
    niumCustomerHashId?: string
}

export interface Role {
    roleName: string
    moduleName: string
}

export interface FreemiumDetails {
    registrationCountry: string
    primaryCurrency: string
}

export interface SubscriptionDetails {
    addOns: any[]
}

export interface Status {
    organizationStatus: string
    accessLevelStatus: string
    corpSecStatus: string
}

export interface CreatedAt {
    $date: string
}

export interface UpdatedAt {
    $date: string
}

export interface CompanyId {
    $oid: string
}
