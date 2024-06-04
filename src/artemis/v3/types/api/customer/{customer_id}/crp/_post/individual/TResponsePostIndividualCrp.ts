import { TIsoDate } from "../../../../../../shared/TIsoDate"
import { TResponseRoleCrp } from "../shared/TResponseRoleCrp"

// Response POST /api/customer/{customer_id}/crp
export interface TResponsePostIndividualCrp {
    id: number
    createdAt: TIsoDate
    updatedAt: TIsoDate
    createdBy: any
    updatedBy: any
    active: any
    parentId: number
    profileId: number
    /**
     * @example "INDIVIDUAL"
     */
    type: string
    referenceId: any
    profileReferenceId: string
    particular: Particular
    other: Other
    vendorName: any
    vendorEntityGuid: any
    lastRiskAssessment: any
    roles: TResponseRoleCrp[]
    listRoleAsText: string[]
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

export interface Other {
    status: string
    sourceOfFunds: string
    bankAccountNumber: any[]
    undischargedBankrupt: any
    documentList: any
    ownershipPercentage: number
}