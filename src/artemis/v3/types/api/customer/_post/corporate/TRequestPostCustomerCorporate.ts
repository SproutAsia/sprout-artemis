// POST /api/customer
export interface TRequestPostCustomerCorporate {
    /**
     * @requires
     */
    active: boolean
    /**
     * @requires
     */
    profileReferenceId: string
    /**
     * @requires
     */
    other: Other
    /**
     * @requires
     */
    particular: Particular
    /**
     * @requires
     * @example "CORPORATE"
     */
    type: string
    /**
     * @requires
     */
    domainId: string[]
    /**
     * @requires
     */
    assigneeId: string
}

export interface Other {
    /**
     * @requires
     * @example ASSOCIATION
     * @grof at Grof application
     */
    entityType: string
    /**
     * @requires
     * @example "grof.co"
     * @grof Application.company.businessDetails.businessWebsite
     */
    corporateWebsite: any
    fatfjurisdiction: string
    /**
     * @requires
     * @example "AGRICULTURE"
     */
    industry: string
    /**
     * @requires
     * @example "FACE-TO-FACE"
     */
    onBoardingMode: string
    /**
     * @requires
     * @example "1"
     */
    ownershipStructureLayer: string
    /**
     * @requires
     * @example "CHEQUE (LOCAL)"
     */
    paymentMode: string[]
    /**
     * @requires
     * @example "SIMPLE"
     */
    productServiceComplexity: string
    sourceOfFunds: string
    natureOfBusinessRelationship: string
    bankAccount: any[]
    additionalInformation: string
}

export interface Particular {
    /**
     * @requires
     */
    incorporated: boolean
    /**
     * @requires
     * @example: "Corporate Primary Customer"
     */
    name: string
    alias: any[]
    formerName: any[]
    /**
     * @requires
     * @example: "SINGAPORE"
     */
    countryOfIncorporation: string
    /**
     * @requires
     * @example : ["SINGAPORE"]
     */
    countryOfOperation: string[]
    address: any[]
    incorporateNumber: string
    phone: any[]
    email: any[]
    dateOfIncorporation: any
    dateOfIncorporationExpiry: any
    imonumber: any
}
