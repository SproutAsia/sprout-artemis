import { TRequestRoleCrp } from "../shared/TRequestRoleCrp";
export interface TReqPostIndividualCrp {
    /**
     * @example "INDIVIDUAL"
     */
    type: string;
    roles: TRequestRoleCrp[];
    active: true;
    particular: Particular;
    /**
     * @example "18001181212C"
     */
    profileReferenceId: string;
    other: Other;
}
export interface Particular {
    salutation: string;
    /**
     * @example "Individual CRP"
     */
    name: string;
    alias: any[];
    formerName: any[];
    /**
     * @example "MALE"
     */
    gender: string;
    /**
     * @example ["MALAYSIA"]
     */
    nationality: string[];
    /**
     * @example "MALAYSIA"
     */
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
    /**
     * @example "CURRENT"
     */
    status: "CURRENT" | "";
    sourceOfFunds: string;
    bankAccountNumber: any[];
    undischargedBankrupt: boolean;
    ownershipPercentage: number;
}
