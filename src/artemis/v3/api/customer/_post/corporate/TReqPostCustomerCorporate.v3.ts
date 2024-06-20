// POST /api/customer
export interface TReqPostCustomerCorporate {
    /**
     * @requires
     * @description TSR - active (true)
     */
    active: true
    /**
     * @requires
     * @description it's customer reference id in artemis form. it's `free text`. TSR - company name
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
     * @description - it's CASE ID in artemis. it must be `unique`. it's `free text`. TSR - uen if transfer in , if incorp leave blank
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
     * @example "grof.co"
     * @grof Application.company.businessDetails.businessWebsite
     * @description TSR - leave empty
     */
    corporateWebsite: any
    /**
     * @description TSR - leave empty
     */
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
    /**
     * @description TSR - empty
     */
    sourceOfFunds?: string
    /**
     * @description TSR - empty
     */
    natureOfBusinessRelationship?: string
    /**
     * @description it is free text. TSR - empty
     */
    bankAccount: string[]
    /**
     * @description TSR - empty. if agent, put payment need to come from agent. !double remarks.
     */
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
    /**
     * @description TSR - company.legalDetails.entityName
     */
    alias?: string[]
    /**
     * @description TSR - we don't need this
     */
    formerName?: string[]
    /**
     * @requires
     * @example: "SINGAPORE"
     * @description TSR - locked to "SG"
     */
    countryOfIncorporation: string
    /**
     * @requires
     * @example : ["SINGAPORE"]
     */
    countryOfOperation: string[]
    address?: string[]
    /**
     * @description TSR - uen (if new incorp, leave blank)
     */
    incorporateNumber?: string
    /**
     * @description TSR - leave empty
     */
    phone?: string[]
    /**
     * @description TSR - leave empty
     */
    email?: string[]
    dateOfIncorporation?: any
    dateOfIncorporationExpiry?: any
    imonumber?: string
}