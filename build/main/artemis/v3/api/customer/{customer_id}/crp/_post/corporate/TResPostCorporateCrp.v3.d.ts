import { TIsoDate } from "../../../../../../types/shared/TIsoDate";
import { TResponseRoleCrp } from "../shared/TResponseRoleCrp";
export interface TResPostCorporateCrp {
    id: number;
    createdAt: TIsoDate;
    updatedAt: TIsoDate;
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
    roles: TResponseRoleCrp[];
    listRoleAsText: string[];
}
export interface Particular {
    incorporated: any;
    name: string;
    alias: any[];
    formerName: any[];
    countryOfIncorporation: string;
    countryOfOperation: string[];
    address: any[];
    incorporateNumber: string;
    phone: any[];
    email: any[];
    dateOfIncorporation: any;
    dateOfIncorporationExpiry: any;
    vendorName: any;
    vendorEntityGuid: any;
    imonumber: any;
}
export interface Other {
    entityType: string;
    variableCapitalCompany: string;
    ownershipStructureLayer: string;
    ownershipPercentage: number;
    dateOfIncorporation: any;
    dateOfIncorporationExpiry: any;
    sourceOfFunds: string;
    status: string;
    bankAccountNumber: any[];
    undischargedBankrupt: any;
    documentList: any;
    businessCessationDate: any;
    corporateWebsite: any;
}
