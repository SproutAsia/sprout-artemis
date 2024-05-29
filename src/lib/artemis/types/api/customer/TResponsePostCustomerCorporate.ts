// Response POST /api/customer CORPORATE

export interface TResponsePostCustomerCorporate {
    id: number
    createdAt: string
    updatedAt: string
    createdBy: any
    updatedBy: any
    active: boolean
    parentId: any
    profileId: number
    type: string
    referenceId: any
    profileReferenceId: string
    particular: Particular
    other: Other
    vendorName: any
    vendorEntityGuid: any
    lastRiskAssessment: any
    status: string
    riskRating: string
    roles: any[]
    listRoleAsText: any[]
}

export interface Particular {
    incorporated: boolean
    name: string
    alias: any
    formerName: any
    countryOfIncorporation: string
    countryOfOperation: string[]
    address: any
    incorporateNumber: any
    phone: any
    email: any
    dateOfIncorporation: any
    dateOfIncorporationExpiry: any
    vendorName: any
    vendorEntityGuid: any
    imonumber: any
}

export interface Other {
    ownershipStructureLayer: string
    industry: string
    onBoardingMode: string
    paymentMode: string[]
    productServiceComplexity: string
    bankAccount: any
    corporateWebsite: any
    sourceOfFunds: any
    natureOfBusinessRelationship: any
    additionalInformation: any
    documentList: any
    entityType: string
    variableCapitalCompany: any
    fatfjurisdiction: boolean
}
