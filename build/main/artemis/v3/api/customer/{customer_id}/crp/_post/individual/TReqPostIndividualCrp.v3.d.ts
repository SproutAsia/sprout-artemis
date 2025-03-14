import { TRequestRoleCrp } from "../shared/TRequestRoleCrp";
export interface TReqPostIndividualCrp {
    /**
     * @example "INDIVIDUAL"
     */
    type: string;
    roles: TRequestRoleCrp[];
    active: false;
    particular: Particular;
    /**
     * @example "18001181212C"
     */
    profileReferenceId: string;
    /**
     * we will use this for matching
     * @example
     */
    referenceId: string;
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
    gender?: string;
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
     * @requires
     * @example "CURRENT"
     * @description TSR - locked to "CURRENT"
     */
    status: "CURRENT" | "RESIGNED";
    sourceOfFunds: string;
    /**
     * @description TSR - empty
     */
    bankAccount: string[];
    undischargedBankrupt: boolean;
    ownershipPercentage: number;
    /**
     * @description - if source of fund is "OTHERS"
     */
    otherSourceOfFunds?: string;
    additionalInformation?: string;
}
