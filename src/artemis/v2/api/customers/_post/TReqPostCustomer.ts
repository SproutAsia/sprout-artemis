export interface TReqPostCustomer {
    individualRecords: IndividualRecord[]
    corporateRecords: CorporateRecord[]
    onboardingMode: string
    productServiceComplexity: string
    paymentModes: string[]
    profileType: string
    isActiveCustomer: boolean
    natureOfBusinessRelationship: string
    referenceId: string
    domains: number[]
    /**
     * @description it will filled later by Artemis after post
     * @example "users": ["8b97a2f4-1916-4a8e-851b-6302308ebfd7"]
     */
    users?: any[]
}

export interface IndividualRecord {
    primary: string
    name: string
    aliasNames: string[]
    phoneNumbers: string[]
    addresses: string[]
    sourceOfFunds: string
    emailAddresses: string[]
    bankAccounts: string[]
    gender: string
    nationality: string
    countryOfResidence: string
    title: string
    countryOfBirth: string
    dateOfBirth: string
    industry: string
    occupation: string
    idType: string
    idNumber: string
    idIssueDate: string
    idExpiryDate: string
}

export interface CorporateRecord {
    primary: boolean
    name: string
    referenceId: string
    aliasNames: string[]
    phoneNumbers: string[]
    addresses: string[]
    sourceOfFunds: string
    emailAddresses: string[]
    bankAccounts: string[]
    isIncorporated: boolean
    entityType: string
    countryOfOperations: string
    countryOfIncorporation: string
    ownershipStructureLayers: string
    businessActivity: string
    website: string
    incorporationNumber: string
    incorporationDate: string
    incorporationExpiryDate: string
    inFatfJurisdiction: boolean
}
