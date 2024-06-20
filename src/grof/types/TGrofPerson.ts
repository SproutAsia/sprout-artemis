export interface TGrofPerson {
    _id: Id
    callFirstName: string
    callLastName: string
    legalDetails: LegalDetails
    personalDetails: PersonalDetails
    address: Address
    documents: any[]
    createdAt: CreatedAt
    updatedAt: UpdatedAt
    __v: number
    contactDetails: ContactDetails
    isMatchWithStakeholder: any
}

export interface Id {
    $oid: string
}

export interface LegalDetails {
    legalFirstName: string
    legalLastName: string
    _id: Id2
}

export interface Id2 {
    $oid: string
}

export interface PersonalDetails {
    fullName: string
    alias: any[]
    gender: string
    nationality: string
    dateOfBirth: string
    countryOfBirth: string
    idDocument: IdDocument
}

export interface IdDocument {
    type: string
    idNumber: string
    dateOfIssuance: string
    dateOfExpiration: string
}

export interface Address {
    addressLine1: string
    addressLine2: string
    city: string
    state: string
    postcode: string
    country: string
}

export interface CreatedAt {
    $date: string
}

export interface UpdatedAt {
    $date: string
}

export interface ContactDetails {
    phoneNumber: string
    email: string
}
