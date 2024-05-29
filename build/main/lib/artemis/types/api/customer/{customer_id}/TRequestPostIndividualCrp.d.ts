export interface TRequestPostIndividualCrp {
    type: string;
    roles: Role[];
    active: string;
    particular: Particular;
    profileReferenceId: string;
    other: Other;
}
export interface Role {
    cid: string;
    role: string;
    appointedDate: string;
    resignedDate: any;
}
export interface Particular {
    salutation: string;
    name: string;
    alias: any[];
    formerName: any[];
    gender: string;
    nationality: string[];
    countryOfResidence: string;
    identityDocumentType: string;
    identityNumber: string;
    identityIssuedDate: any;
    identityExpiryDate: any;
    countryOfBirth: string;
    dateOfBirth: any;
    address: any[];
    phone: any[];
    email: any[];
}
export interface Other {
    status: string;
    sourceOfFunds: string;
    bankAccountNumber: any[];
    undischargedBankrupt: string;
    ownershipPercentage: string;
}
