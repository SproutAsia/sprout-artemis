// POST /api/customer
export interface TReqPostCustomerCorporate {
    /**
     * @requires
     */
    active: boolean
    /**
     * @requires
     * @description it's customer reference id in artemis form. it's `free text`
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
     * @description domain is your domain id created by Artemis
     */
    domainId: string[]
    /**
     * @requires
     * @description - assignee is your user id.
     */
    assigneeId: string
    /**
     * @description - it's CASE ID in artemis. it must be `unique`. it's `free text`
     */
    referenceId?: string
}

export interface Other {
    /**
     * @requires
     * @description Artemis has it own list data of entityType
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
    fatfjurisdiction?: string
    /**
     * @requires
     * @description looks like it taken from SSIC
     * @example "01111 - GROWING OF LEAFY AND FRUIT VEGETABLES"
     */
    industry: string
    /**
     * @requires
     * @description Artemis has it enum
     * @example "FACE-TO-FACE", "NON FACE-TO-FACE", "UNKNWON"
     */
    onBoardingMode: string
    /**
     * @requires
     * @example "1", "2", "3 OR MORE", "UNKNOWN"
     */
    ownershipStructureLayer: string
    /**
     * @requires
     * @description Artemis has it enum
     * @example "CHEQUE (LOCAL)"
     */
    paymentMode: string[]
    /**
     * @requires
     * @description Artemis has it enum
     * @example "SIMPLE"
     */
    productServiceComplexity: string
    sourceOfFunds?: string
    natureOfBusinessRelationship?: string
    /**
     * @description it is free text
     */
    bankAccount: string[]
    additionalInformation?: string
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
    alias?: string[]
    formerName?: string[]
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
    address?: string[]
    incorporateNumber?: string
    phone?: string[]
    email?: string[]
    dateOfIncorporation?: any
    dateOfIncorporationExpiry?: any
    imonumber?: string
}