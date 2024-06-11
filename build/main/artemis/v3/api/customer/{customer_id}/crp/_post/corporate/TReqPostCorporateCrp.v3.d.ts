import { TRequestRoleCrp } from "../shared/TRequestRoleCrp";
export interface TReqPostCorporateCrp {
    type: string;
    roles: TRequestRoleCrp[];
    active: boolean;
    other: Other;
    particular: Particular;
    profileReferenceId: string;
}
export interface Other {
    entityType: string;
    otherEntityType: string;
    corporateWebsite: any;
    status: string;
    sourceOfFunds: string;
    bankAccountNumber: any[];
    undischargedBankrupt: string;
    ownershipStructureLayer: string;
    variableCapitalCompany: string;
    businessCessationDate: any;
}
export interface Particular {
    name: string;
    alias: any[];
    formerName: any[];
    countryOfIncorporation: string;
    countryOfOperation: string[];
    dateOfIncorporation: any;
    email: any[];
    address: any[];
    imonumber: any;
    incorporateNumber: string;
    incorporated: string;
    phone: any[];
}
