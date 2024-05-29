// POST api/customer swagger UI A3

export interface TRequestPostCustomerIndividual {
    active: boolean
    profileReferenceId: string
    other: Other
    particular: Particular
    type: string
    domainId: string[]
    assigneeId: string
}

export interface Other {
    industry: string
    occupation: string
    onBoardingMode: string
    paymentMode: string[]
    productServiceComplexity: string
    sourceOfFunds: string
    bankAccount: any[]
    additionalInformation: string
    natureOfBusinessRelationship: string
}

export interface Particular {
    salutation: string
    name: string
    alias: any[]
    formerName: any[]
    gender: string
    countryOfResidence: string
    nationality: string[]
    countryOfBirth: string
    dateOfBirth: any
    address: any[]
    phone: any[]
    email: any[]
    identityDocumentType: string
    identityNumber: string
    identityIssuedDate: any
    identityExpiryDate: any
}
