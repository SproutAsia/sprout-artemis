// POST /api/customer
export interface TRequestPostCustomerCorporate {
    active: boolean
    profileReferenceId: string
    other: Other
    particular: Particular
    type: string
    domainId: string[]
    assigneeId: string
}

export interface Other {
    /**
     * found at grof application
     */
    entityType: string
    /**
     * 🔎 found at : Application.company.businessDetails.businessWebsite
     */
    corporateWebsite: any
    fatfjurisdiction: string
    industry: string
    onBoardingMode: string
    ownershipStructureLayer: string
    paymentMode: string[]
    productServiceComplexity: string
    sourceOfFunds: string
    natureOfBusinessRelationship: string
    bankAccount: any[]
    additionalInformation: string
}

export interface Particular {
    incorporated: boolean
    name: string
    alias: any[]
    formerName: any[]
    countryOfIncorporation: string
    countryOfOperation: string[]
    address: any[]
    incorporateNumber: string
    phone: any[]
    email: any[]
    dateOfIncorporation: any
    dateOfIncorporationExpiry: any
    imonumber: any
}
