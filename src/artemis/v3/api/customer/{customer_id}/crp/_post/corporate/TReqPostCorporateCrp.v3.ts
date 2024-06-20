// Request /api/customer/{customer_id}/crp

import { TRequestRoleCrp } from "../shared/TRequestRoleCrp"

export interface TReqPostCorporateCrp {
    type: string
    roles: TRequestRoleCrp[]
    active: boolean
    other: Other
    particular: Particular
    profileReferenceId: string
}

export interface Other {
    entityType: string
    otherEntityType: string
    corporateWebsite: string
    status: string
    sourceOfFunds: string
    bankAccountNumber: string[]
    undischargedBankrupt: string
    ownershipStructureLayer: string
    variableCapitalCompany: string
    businessCessationDate: string
    additionalInformation: string
}

export interface Particular {
    /**
     * @requires
     */
    name: string
    alias: string[]
    formerName: string[]
    countryOfIncorporation: string
    countryOfOperation: string[]
    dateOfIncorporation: string
    email: string[]
    address: string[]
    imonumber: string
    incorporateNumber: string
    incorporated: boolean
    phone: string[]
}
