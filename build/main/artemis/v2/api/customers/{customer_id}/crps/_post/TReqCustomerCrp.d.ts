export interface TReqCustomerCrp {
    roles: Role[];
    latestScreeningConclusion: LatestScreeningConclusion;
    status: string;
    individualRecord: IndividualRecord;
    corporateRecord: CorporateRecord;
    primary: boolean;
    customer: number;
    primaryCrpOf: any;
    record: number;
}
export interface Role {
    dateAppointed: string;
    dateResigned: string;
    role: string;
    crp: any;
}
export interface LatestScreeningConclusion {
    pep: boolean;
    sanction: boolean;
    adverseNews: boolean;
    noHit: boolean;
    isSystemGenerated: boolean;
    crp: string;
}
export interface IndividualRecord {
    primary: string;
    name: string;
    aliasNames: string[];
    phoneNumbers: string[];
    addresses: string[];
    sourceOfFunds: string;
    emailAddresses: string[];
    bankAccounts: string[];
    gender: string;
    nationality: string;
    countryOfResidence: string;
    title: string;
    countryOfBirth: string;
    dateOfBirth: string;
    industry: string;
    occupation: string;
    idType: string;
    idNumber: string;
    idIssueDate: string;
    idExpiryDate: string;
}
export interface CorporateRecord {
    primary: boolean;
    name: string;
    referenceId: string;
    aliasNames: string[];
    phoneNumbers: string[];
    addresses: string[];
    sourceOfFunds: string;
    emailAddresses: string[];
    bankAccounts: string[];
    isIncorporated: boolean;
    entityType: string;
    countryOfOperations: string;
    countryOfIncorporation: string;
    ownershipStructureLayers: string;
    businessActivity: string;
    website: string;
    incorporationNumber: string;
    incorporationDate: string;
    incorporationExpiryDate: string;
    inFatfJurisdiction: boolean;
}
