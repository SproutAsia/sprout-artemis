import { TRequestRoleCrp } from "../shared/TRequestRoleCrp"

// POST /api/customer/{{primary_customer_id}}/crp
export interface TRequestPostIndividualCrp {
    /**
     * @example "INDIVIDUAL"
     */
    type: string
    roles: TRequestRoleCrp[]
    active: string
    particular: Particular
    /**
     * @example "18001181212C"
     */
    profileReferenceId: string
    other: Other
}

export interface Particular {
    salutation: string
    /**
     * @example "Individual CRP"
     */
    name: string
    alias: any[]
    formerName: any[]
    /**
     * @example "MALE"
     */
    gender: string
    /**
     * @example ["MALAYSIA"]
     */
    nationality: string[]
    /**
     * @example "MALAYSIA"
     */
    countryOfResidence: string
    identityDocumentType: string
    identityNumber: string
    identityIssuedDate: any
    identityExpiryDate: any
    countryOfBirth: string
    dateOfBirth: any
    address: any[]
    phone: any[]
    email: any[]
}

export interface Other {
    /**
     * @example "CURRENT"
     */
    status: string
    sourceOfFunds: string
    bankAccountNumber: any[]
    undischargedBankrupt: string
    ownershipPercentage: string
}
