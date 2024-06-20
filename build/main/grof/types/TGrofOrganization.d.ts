export interface TGrofOrganization {
    __v: number;
    _id: Id;
    users: User[];
    companyName: string;
    freemiumDetails: FreemiumDetails;
    subscriptionDetails: SubscriptionDetails;
    isPremium: boolean;
    status: Status;
    createdAt: CreatedAt;
    updatedAt: UpdatedAt;
    niumCustomerId: string;
    niumCaseId: string;
    niumClientId: string;
    companyId: Id;
    organizationPlan: string;
    activeModules: string[];
    businessDetails: BusinessDetails;
    bluesheetsToken: string;
}
export interface BusinessDetails {
    businessName: string;
    businessNumber: string;
    businessAddressLine1: string;
    businessAddressLine2: string;
    businessCity: string;
    businessPostalCode: string;
    businessCountry: string;
    businessProvince: string;
    businessEmailAddress: string;
    businessPhoneDialCode: string;
    businessPhoneNumber: string;
    businessMobileDialCode: string;
    businessMobileNumber: string;
    businessWebsite: string;
}
export interface Id {
    $oid: string;
}
export interface User {
    userId: string;
    status: string;
    role: string;
    generatedEmail: string;
    roles: Role[];
    isSuperAdmin: boolean;
    niumCustomerHashId?: string;
}
export interface Role {
    roleName: string;
    moduleName: string;
}
export interface FreemiumDetails {
    registrationCountry: string;
    primaryCurrency: string;
    uen: string;
}
export interface SubscriptionDetails {
    addOns: string[];
    startDate: string;
    endDate: string;
    status: string;
    chargebeeId: string;
}
export interface Status {
    baCreationStatus: string;
    applicationStatus: string;
    organizationStatus: string;
    accessLevelStatus: string;
    artemisStatus: string;
    niumComplianceStatus: string;
    corpSecStatus: string;
}
export interface CreatedAt {
    $date: string;
}
export interface UpdatedAt {
    $date: string;
}
