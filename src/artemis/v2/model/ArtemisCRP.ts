export interface ArtemisCRP {
    id: number
    name: string
    recordType: string
    roles: Role[]
    latestScreeningConclusion: LatestScreeningConclusion
    status: string
    individualRecord: IndividualRecord
    corporateRecord: CorporateRecord
    createdAt: string
    updatedAt: string
    primary: boolean
    customer: number
    primaryCrpOf: any
    record: number
    fileBucket: number
    dialog: number
}

export interface Role {
    dateAppointed: string
    dateResigned: string
    role: string
    crp: any
}

export interface LatestScreeningConclusion {
    id: number
    invalid: boolean
    createdAt: string
    updatedAt: string
    pep: boolean
    sanction: boolean
    adverseNews: boolean
    noHit: boolean
    isSystemGenerated: boolean
    crp: string
}

export interface IndividualRecord {
    primary: string
    createdAt: string
    updatedAt: string
    name: string
    recordType: string
    aliasNames: string[]
    phoneNumbers: string[]
    addresses: string[]
    oldNames: string[]
    sourceOfFunds: string
    emailAddresses: string[]
    bankAccounts: string[]
    gender: string
    nationality: string
    countryOfResidence: string
    title: string
    countryOfBirth: string
    dateOfBirth: string
    industry: string
    occupation: string
    idType: string
    idNumber: string
    idIssueDate: string
    idExpiryDate: string
    dialog: number
    fileBucket: number
}

export interface CorporateRecord {
    handshakesReports: HandshakesReport[]
    primary: boolean
    createdAt: string
    updatedAt: string
    name: string
    recordType: string
    referenceId: string
    aliasNames: string[]
    phoneNumbers: string[]
    addresses: string[]
    oldNames: string[]
    sourceOfFunds: string
    emailAddresses: string[]
    bankAccounts: string[]
    isIncorporated: boolean
    entityType: string
    countryOfOperations: string
    countryOfIncorporation: string
    ownershipStructureLayers: string
    businessActivity: string
    website: string
    incorporationNumber: string
    incorporationDate: string
    incorporationExpiryDate: string
    inFatfJurisdiction: boolean
    dialog: number
    fileBucket: number
}

export interface HandshakesReport {
    id: number
    createdAt: string
    updatedAt: string
    reportDateTime: string
    activeName: string
    xmlData: string
    directRedScore: string
    indirectRedScore: string
    networkScoreDegreeCentrality: string
    entityGuid: string
    dataset: string
    otherNames: string[]
    identificationNumber: string
    currentAddress: string
    otherAddress: string
    incorporationDate: string
    incorporationCitizenship: string
    companyType: string
    companyStatus: string
    primaryBusinessActivity: string
    secondaryBusinessActivity: string
    ownershipLayers: string
    createdBy: string
    updatedBy: string
    record: number
}
