export interface TGrofApplicationFull {
    _id: Id
    uen: string
    organizationId: OrganizationId
    createdAt: CreatedAt
    updatedAt: UpdatedAt
    __v: number
    company: Company
    submittedBy: SubmittedBy
    riskRating: string
    // niumData: NiumDaum[]
    // niumRfiData: any[]
    status: string
    corpSecStatus: string
    paymentStatus: string
    serviceCreationDate: ServiceCreationDate
    services: Services
    createdBy: string

    corpsecStatus: string
    recommendingOfficerStatus: string
    approvingOfficerStatus: string
    recommendingOfficerEmail: string
    approvingOfficerEmail: string
    approvingOfficerName: string
    approvingOfficerAt: Date
    recommendingOfficerAt: Date
    userReadList: string[]
    currentStep: number
    isManualFill: boolean
    kybSubmittedBy: string
    kybSubmittedDate: Date
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
    /**
     * from Application.model
     */
    businessDetails: {
        businessWebsite: string
        doingBusinessAs: string
        primaryIndustry: string
        businessDescription: string
    }
    /**
     * from Application.model
     */
    niumExclusive: {
        niumProductType: ("Send" | "Receive" | "Cards")[],
        niumProgram: string
    }
    /**
    * from Application.model
    */
    artemisExclusive: {
        artemisDomain: string
    }
    /**
     * from Application.model
     */
    riskRating: string
    riskAssesment: {
        computedRiskRating: string
        overwrittenRiskRating: string
        recommendingOfficersNotes: string
        approvingOfficersNotes: string
        documents: string
    }
    isActiveCustomer: boolean
    isIncorporated: boolean
    isAppointGrofND: boolean
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
    registrationDate: Date
    businessConstitution: string
    companyType: string
    countryOfRegisteredBusiness: string
    entityType: string
    /**
     * from Application.model
     */
    historyName: string
    /**
    * from Application.model
    */
    listedExchange: string
    /**
     * from Application.model
     */
    fyeDate: string
}

export interface RegistrationDate {
    $date: string
}

export interface Addresses {
    /**
     * from Application.model
     */
    isSameBusinessAddress: boolean
    /**
     * from Application.model
     */
    isUseGrofRegisteredAddress: string
    registeredAddress: RegisteredAddress
    /**
     * from Application.model
     */
    principalPlaceOfBusiness: {
        addressLine1: string
        addressLine2: string
        city: string
        state: string
        postalCode: string
        country: string
        blockHouse: string
        streetName: string
        buildingName: string
        level: string
        unit: string
    }
}

export interface RegisteredAddress {
    addressLine1: string
    addressLine2: string
    city: string
    state: string
    blockHouse: string
    buildingName: string
    level: string
    unit: string
    postalCode: string
    country: string
    /**
     * from Application.model
     */
    streetName: string
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
    /**
     * from Application.model
     */
    countryOfOperations: string[]
    annualTurnover: string
    totalEmployees: string
    intendedUseOfAccount: string
    transactionCountries: string[]
    inflowExpectedTransactions: {
        numberOfTransactionMonthly: string
        transactionsValueMonthly: string
        natureOfInflow: string
    }
    outflowExpectedTransactions: {
        numberOfTransactionMonthly: string
        transactionsValueMonthly: string
        natureOutflow: string
    }
}

export interface Member {
    category: string
    status: string
    appointments: Appointment[]
    documents: {
        id: string
        type: string
        number: string
        expiryDate: string
        issuedDate: string
        issuanceCountry: string
    }[]
    isApplicant: boolean
    companyDetails: CompanyDetails
    personDetails: PersonDetails
    sharesDetails: any[]
    corpsecRequirement: {
        guranteedAmount: number
        currency: string
    }[]
    corporateRepresentativeOf: string
    userId: string
    onfidoApplicantId: string
    onfidoPull: any
    onfidoWorkflowRunId: string
    keyContact: {
        isAccounting: boolean
        isMarketing: boolean
        isSales: boolean
        isCorpSec: boolean
    }
    artemisExclusive: {
        crpId: string
    }
    kycStatus: {
        isIdVerificated: boolean
        isBackgroundScreened: boolean
    }
    eKycStatus: string
    eKycLink: string
    _id: Id3
}

export interface Appointment {
    position: string
    appointmentDate: string
    resignedDate?: string
    status: string
    isOutgoing: boolean
    outgoingEmail: string
    _id: Id2
}

export interface Id2 {
    $oid: string
}

export interface CompanyDetails {
    documents: {
        id: string
        type: string
        number: string
        expiryDate: string
        issuedDate: string
        issuanceCountry: string
    }[]
    companyName: string
    legalDetails: MemberLegalDetails
    riskProfileAssessment: MemberRiskProfileAssessment
    addresses: {
        registeredAddress: {
            addressLine1: string
            addressLine2: string
            city: string
            state: string
            postalCode: string
            country: string
            blockHouse: string
            streetName: string
            buildingName: string
            level: string
            unit: string
        }
    }
}

export interface MemberLegalDetails {
    businessRegistrationNumber: string
    entityType: string
    companyType: string
    countryOfRegisteredBusiness: string
    registrationDate: Date
    businessEntityType: string
}

export interface MemberRiskProfileAssessment {
    countryOfOperations: any[]
    ownershipStructureLayers: string
}

export interface PersonDetails {
    personalDetails: PersonalDetails
    documents: any[]
    personDetails: {
        documents: {
            id: string
            type: string
            number: string
            expiryDate: string
            issuedDate: string
            issuedCountry: string
        }
        callFirstName: string
        callLastName: string
        legalDetails: {
            legalFirstName: string
            legalLastName: string
        }
        contactDetails: {
            phoneCountry: string
            phoneNumber: string
            email: string
            outgoingEmail: string
        }
        personalDetails: {
            fullName: string
            alias: string
            gender: string
            nationality: string
            dateOfBirth: string
            countryOfBirth: string
            idDocument: {
                type: string
                idNumber: string
                dateOfIssuance: string
                dateOfExpiration: string
            }
            passportExpiredDate: Date
            isFinCardholder: boolean
            finCardNumber: string
            riskProfileAssessment: {
                occupation: string,
                sourceOfIncome: string,
                sourceOfWealth: string,
                isPep: string,
                isShareOnBehalfAnotherPerson: string,
                shareOnBehalfAnotherPerson: string,
                isNomineeDirector: string,
                isAcceptDirectorCriteria: string,
                isMultipleNationalities: string,
                nationalities: string[],
            }
        }
        address: Address
    }
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

/**
 * Nium don't need to be in here
 */
export interface NiumDaum {
    payload: Payload
    result: Result
    date: Date
}

/**
 * Nium don't need to be in here
 */
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
    contactDetails: StakeholderContactDetails
    professionalDetails: ProfessionalDetail[]
    address: Address
}

export interface StakeholderContactDetails {
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
    contactDetails: ApplicantContactDetails
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

export interface ApplicantContactDetails {
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

/**
 * Nium don't need to be in here
 */
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
    finance: Date
    corpSec: Date
    incorporation: Date
}

export interface Services {
    finance: boolean
    corpSec: boolean
    incorporation: boolean
}
