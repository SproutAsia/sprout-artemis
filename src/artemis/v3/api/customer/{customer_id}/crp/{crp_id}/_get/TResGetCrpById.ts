export interface TResGetCrpById {
    id: number
    createdAt: string
    updatedAt: string
    createdBy: CreatedBy
    updatedBy: UpdatedBy
    active: any
    parentId: number
    profileId: number
    type: string
    referenceId: any
    profileReferenceId: string
    particular: Particular
    other: Other
    notes: any
    vendorName: any
    vendorEntityGuid: any
    lastRiskAssessment: any
    roles: Role[]
    assignees: any[]
    watchers: any[]
    listRoleAsText: string[]
}

export interface CreatedBy {
    id: number
    firstName: string
    lastName: string
    email: string
    fullName: string
    rawFirstName: string
    rawLastName: string
    deleted: number
    role: string
}

export interface UpdatedBy {
    id: number
    firstName: string
    lastName: string
    email: string
    fullName: string
    rawFirstName: string
    rawLastName: string
    deleted: number
    role: string
}

export interface Particular {
    name: string
    alias: any[]
    email: any[]
    phone: any[]
    gender: string
    address: any[]
    formerName: any[]
    salutation: string
    dateOfBirth: any
    nationality: string[]
    countryOfBirth: string
    identityNumber: string
    countryOfResidence: string
    identityExpiryDate: any
    identityIssuedDate: any
    identityDocumentType: string
}

export interface Other {
    status: string
    documentList: any
    sourceOfFunds: string
    bankAccountNumber: any[]
    ownershipPercentage: number
    undischargedBankrupt: boolean
    additionalInformation: string
}

export interface Role {
    id: number
    createdAt: string
    updatedAt: string
    createdBy: CreatedBy2
    updatedBy: UpdatedBy2
    role: string
    appointedDate: any
    resignedDate: any
}

export interface CreatedBy2 {
    id: number
    firstName: string
    lastName: string
    email: string
    fullName: string
    rawFirstName: string
    rawLastName: string
    deleted: number
    role: string
}

export interface UpdatedBy2 {
    id: number
    firstName: string
    lastName: string
    email: string
    fullName: string
    rawFirstName: string
    rawLastName: string
    deleted: number
    role: string
}
