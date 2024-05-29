export interface TResponsePostIndividualCrp {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: any;
    updatedBy: any;
    active: any;
    parentId: number;
    profileId: number;
    type: string;
    referenceId: any;
    profileReferenceId: string;
    particular: Particular;
    other: Other;
    vendorName: any;
    vendorEntityGuid: any;
    lastRiskAssessment: any;
    roles: Role[];
    listRoleAsText: string[];
}
export interface Particular {
    salutation: string;
    name: string;
    alias: any[];
    formerName: any[];
    gender: string;
    countryOfResidence: string;
    nationality: string[];
    countryOfBirth: string;
    dateOfBirth: any;
    address: any[];
    phone: any[];
    email: any[];
    identityDocumentType: string;
    identityNumber: string;
    identityIssuedDate: any;
    identityExpiryDate: any;
}
export interface Other {
    status: string;
    sourceOfFunds: string;
    bankAccountNumber: any[];
    undischargedBankrupt: any;
    documentList: any;
    ownershipPercentage: number;
}
export interface Role {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: any;
    updatedBy: any;
    role: string;
    appointedDate: string;
    resignedDate: any;
}
