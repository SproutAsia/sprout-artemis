export interface TResponseGetCustomer {
    count: number
    next: string
    prev: any
    results: Result[]
}

export interface Result {
    id: number
    customerStatus: string
    customerRiskRating: string
    name: string
    customerType: string
    aliasNames: string[]
    customerDomainIds: number[]
    primary: boolean
    createdAt: string
    updatedAt: string
    createdById: string
    updatedById: string
    isActiveCustomer: boolean
    referenceId: any
    integrationStatus: any
    customer: number
    record: number
    primaryCrpOf: number
    status: string
    riskRating: string
    domains: number[]
    natureOfBusinessRelationship: string
    updatedBy: UpdatedBy
}

export interface UpdatedBy {
    name: string
}
