export interface TGrofApplication {
    _id: Id
    uen: string
    organizationId: OrganizationId
    createdAt: CreatedAt
    updatedAt: UpdatedAt
    __v: number
    company: Company
    submittedBy: SubmittedBy
    riskRating: string
    niumData: NiumDaum[]
    niumRfiData: any[]
    status: string
    corpSecStatus: string
    paymentStatus: string
    serviceCreationDate: ServiceCreationDate
    services: Services
}

export interface Id {
    $oid: string
}

export interface OrganizationId {
    $oid: string
}

export interface CreatedAt {
    $date: string
}

export interface UpdatedAt {
    $date: string
}

export interface Company {
    companyName: string
    /**
     * from Application.model
     */
    website: string
    legalDetails: LegalDetails
    addresses: Addresses
    sharesDetails: SharesDetail[]
    ssic: Ssic
    riskProfileAssessment: RiskProfileAssessment
    members: Member[]
    /**
     * from Application.model 
     */
    documents: Documents[]
}

/**
 * from ApplicationModel
 */
export interface Documents {
    _id: string
    type: string
    number: string
    expiryDate: string
    issuedDate: string
    issuanceCountry: string
}

export interface LegalDetails {
    uen: string
    entityName: string
    entityStatus: string
    registrationDate: RegistrationDate
    businessConstitution: string
    companyType: string
    countryOfRegisteredBusiness: string
    entityType: string
}

export interface RegistrationDate {
    $date: string
}

export interface Addresses {
    registeredAddress: RegisteredAddress
}

export interface RegisteredAddress {
    blockHouse: string
    buildingName: string
    level: string
    unit: string
    postalCode: string
    country: string
}

export interface SharesDetail {
    issuedShareCapital: number
    paidUpShareCapital: number
    shareAllotted: number
    currency: string
    shareType: string
}

export interface Ssic {
    primary: Primary
    secondary: Secondary
}

export interface Primary {
    code: string
    description: string
    otherDescription: string
}

export interface Secondary {
    code: string
    description: string
    otherDescription: string
}

export interface RiskProfileAssessment {
    onboardingMode: string
    ownershipStructureLayers: string
    paymentModes: string[]
    productServiceComplexity: string
}

export interface Member {
    category: string
    appointments: Appointment[]
    documents: any[]
    isApplicant: boolean
    companyDetails: CompanyDetails
    personDetails: PersonDetails
    sharesDetails: any[]
    _id: Id3
}

export interface Appointment {
    position: string
    appointmentDate: string
    resignedDate?: string
    status: string
    _id: Id2
}

export interface Id2 {
    $oid: string
}

export interface CompanyDetails {
    documents: any[]
    companyName: string
    legalDetails: LegalDetails2
    riskProfileAssessment: RiskProfileAssessment2
}

export interface LegalDetails2 {
    businessRegistrationNumber: string
}

export interface RiskProfileAssessment2 {
    countryOfOperations: any[]
}

export interface PersonDetails {
    personalDetails: PersonalDetails
    documents: any[]
}

export interface PersonalDetails {
    alias: any[]
}

export interface Id3 {
    $oid: string
}

export interface SubmittedBy {
    $oid: string
}

export interface NiumDaum {
    payload: Payload
    result: Result
    date: Date
}

export interface Payload {
    region: string
    customerHashId: any
    clientPreference: ClientPreference
    businessDetails: BusinessDetails
    riskAssessmentInfo: RiskAssessmentInfo
    productDetails: ProductDetails
}

export interface ClientPreference {
    clientHashId: string
}

export interface BusinessDetails {
    businessName: string
    businessRegistrationNumber: string
    businessType: string
    website?: string
    legalDetails: LegalDetails3
    tradeName?: string
    addresses: Addresses2
    stakeholders: Stakeholder[]
    applicantDetails: ApplicantDetails
    additionalInfo: AdditionalInfo
}

export interface LegalDetails3 {
    registeredCountry: string
    registeredDate: string
}

export interface Addresses2 {
    registeredAddress: RegisteredAddress2
    businessAddress: BusinessAddress
}

export interface RegisteredAddress2 {
    addressLine1: string
    addressLine2?: string
    city: string
    state: string
    country: string
    postcode: string
}

export interface BusinessAddress {
    addressLine1?: string
    addressLine2?: string
    city?: string
    state?: string
    country?: string
    postcode: string
}

export interface Stakeholder {
    stakeholderDetails: StakeholderDetails
}

export interface StakeholderDetails {
    kycMode: string
    firstName: string
    lastName: string
    nationality: string
    dateOfBirth: string
    isResident: string
    contactDetails: ContactDetails
    professionalDetails: ProfessionalDetail[]
    address: Address
}

export interface ContactDetails {
    contactNo?: string
    email?: string
}

export interface ProfessionalDetail {
    position: string
    sharePercentage: string
}

export interface Address {
    addressLine1: string
    addressLine2?: string
    city: string
    state: string
    postcode: string
    country: string
}

export interface ApplicantDetails {
    kycMode: string
    firstName: string
    lastName: string
    nationality: string
    dateOfBirth: string
    isResident: string
    professionalDetails: ProfessionalDetail2[]
    address: Address2
    contactDetails: ContactDetails2
}

export interface ProfessionalDetail2 {
    position: string
    sharePercentage: string
}

export interface Address2 {
    addressLine1: string
    addressLine2?: string
    city: string
    state: string
    postcode: string
    country: string
}

export interface ContactDetails2 {
    countryCode: string
    contactNo: string
    email: string
}

export interface AdditionalInfo {
    isSameBusinessAddress: string
}

export interface RiskAssessmentInfo {
    totalEmployees: string
    annualTurnover: string
    industrySector: string
    countryOfOperation: any[]
}

export interface ProductDetails {
    productType: string[]
    program: string
}

export interface Result {
    clientId: string
    caseId: string
    status: string
    remarks: string
    customerHashId?: string
    walletHashId?: string
    redirectUrl: string
}

export interface Date {
    $date: string
}

export interface ServiceCreationDate {
    finance: Finance
    corpSec: CorpSec
}

export interface Finance {
    $date: string
}

export interface CorpSec {
    $date: string
}

export interface Services {
    finance: boolean
    corpSec: boolean
}
