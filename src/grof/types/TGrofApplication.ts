import { TMongoDate, TMongoId } from "../../share/MongoType"

/**
 * this model is removing nium and artemis related field to
 */
export interface TGrofApplication {
    /**
     * uuid
     */
    _id?: TMongoId
    uen?: string
    organizationId?: TMongoId
    /**
     * date
     */
    createdAt?: TMongoDate
    /**
     * date
     */
    updatedAt?: TMongoDate
    __v?: number
    company: Company
    /**
     * uuid
     */
    submittedBy?: TMongoId
    riskRating?: string
    status?: string
    corpSecStatus?: string
    paymentStatus?: string
    serviceCreationDate?: ServiceCreationDate
    services?: Services
    createdBy?: string
    corpsecStatus?: string
    recommendingOfficerStatus?: string
    approvingOfficerStatus?: string
    recommendingOfficerEmail?: string
    approvingOfficerEmail?: string
    approvingOfficerName?: string
    approvingOfficerAt?: Date
    recommendingOfficerAt?: Date
    userReadList?: string[]
    currentStep?: number
    isManualFill?: boolean
    kybSubmittedBy?: string
    kybSubmittedDate?: Date
}

export interface CreatedAt {
    $date?: string
}

export interface UpdatedAt {
    $date?: string
}

export interface Company {
    companyName?: string
    /**
     * from Application.model
     * required by converter to artemis
     */
    website?: string
    legalDetails: LegalDetails
    addresses?: Addresses
    sharesDetails?: SharesDetail[]
    ssic: Ssic
    riskProfileAssessment: RiskProfileAssessment
    members: Member[]
    /**
     * from Application.model 
     */
    documents?: Documents[]
    /**
     * from Application.model
     */
    businessDetails?: {
        businessWebsite?: string
        doingBusinessAs?: string
        primaryIndustry?: string
        businessDescription?: string
    }
    /**
     * from Application.model
     */
    riskRating?: string
    riskAssesment?: {
        computedRiskRating?: string
        overwrittenRiskRating?: string
        recommendingOfficersNotes?: string
        approvingOfficersNotes?: string
        documents?: string
    }
    isActiveCustomer?: boolean
    isIncorporated?: boolean
    isAppointGrofND?: boolean
}

/**
 * from ApplicationModel
 */
export interface Documents {
    _id?: string
    type?: string
    number?: string
    expiryDate?: string
    issuedDate?: string
    issuanceCountry?: string
}

export interface LegalDetails {
    uen: string
    entityName?: string
    entityStatus?: string
    registrationDate?: TMongoDate
    businessConstitution?: string
    companyType?: string
    countryOfRegisteredBusiness?: string
    /**
     * @deprecated we should use companyType instead
     */
    entityType?: string
    historyName?: string
    listedExchange?: string
    fyeDate?: string
}

export interface RegistrationDate {
    $date?: string
}

export interface Addresses {
    /**
     * from Application.model
     */
    isSameBusinessAddress?: boolean
    /**
     * from Application.model
     */
    isUseGrofRegisteredAddress?: string
    registeredAddress?: RegisteredAddress
    /**
     * from Application.model
     */
    principalPlaceOfBusiness?: {
        addressLine1?: string
        addressLine2?: string
        city?: string
        state?: string
        postalCode?: string
        country?: string
        blockHouse?: string
        streetName?: string
        buildingName?: string
        level?: string
        unit?: string
    }
}

export interface RegisteredAddress {
    addressLine1?: string
    addressLine2?: string
    city?: string
    state?: string
    blockHouse?: string
    buildingName?: string
    level?: string
    unit?: string
    postalCode?: string
    country?: string
    /**
     * from Application.model
     */
    streetName?: string
}

export interface SharesDetail {
    issuedShareCapital?: number
    paidUpShareCapital?: number
    shareAllotted?: number
    currency?: string
    shareType?: string
}

export interface Ssic {
    primary: Primary
    secondary?: Secondary
}

export interface Primary {
    code?: string
    description?: string
    otherDescription?: string
}

export interface Secondary {
    code?: string
    description?: string
    otherDescription?: string
}

/**
 */
export interface RiskProfileAssessment {
    onboardingMode?: string
    ownershipStructureLayers?: string
    paymentModes?: string[]
    productServiceComplexity?: string
    /**
     * from Application.model
     */
    countryOfOperations?: string[]
    annualTurnover?: string
    totalEmployees?: string
    intendedUseOfAccount?: string
    transactionCountries?: string[]
    inflowExpectedTransactions?: {
        numberOfTransactionMonthly?: string
        transactionsValueMonthly?: string
        natureOfInflow?: string
    }
    outflowExpectedTransactions?: {
        numberOfTransactionMonthly?: string
        transactionsValueMonthly?: string
        natureOutflow?: string
    }
}

export interface Member {
    category?: string
    status?: string
    appointments: Appointment[]
    documents?: {
        id?: string
        type?: string
        number?: string
        expiryDate?: string
        issuedDate?: string
        issuanceCountry?: string
    }[]
    isApplicant?: boolean
    companyDetails: CompanyDetails
    personDetails: PersonDetails
    sharesDetails?: {
        shareAllotted?: number,
        shareType?: string,
        sharePercentage?: number,
        shareCurrency?: string,
        appointmentDate?: string,
        cessationDate?: string,
        status?: string,
        holderType?: string,
    }[]
    corpsecRequirement?: {
        guranteedAmount?: number
        currency?: string
    }[]
    corporateRepresentativeOf?: string
    userId?: string
    onfidoApplicantId?: string
    onfidoPull?: any
    onfidoWorkflowRunId?: string
    keyContact?: {
        isAccounting?: boolean
        isMarketing?: boolean
        isSales?: boolean
        isCorpSec?: boolean
    }
    kycStatus?: {
        isIdVerificated?: boolean
        isBackgroundScreened?: boolean
    }
    eKycStatus?: string
    eKycLink?: string
    /**
     * uuid
     */
    _id?: TMongoId
}

export interface Appointment {
    position: string
    appointmentDate?: TMongoDate
    resignedDate?: string
    status?: string
    isOutgoing?: boolean
    outgoingEmail?: string
    _id?: TMongoId
}

export interface CompanyDetails {
    documents?: {
        id?: string
        type?: string
        number?: string
        expiryDate?: string
        issuedDate?: string
        issuanceCountry?: string
    }[]
    companyName?: string
    legalDetails: MemberLegalDetails
    riskProfileAssessment?: MemberRiskProfileAssessment
    addresses: {
        registeredAddress: {
            addressLine1?: string
            addressLine2?: string
            city?: string
            state?: string
            postalCode?: string
            country?: string
            blockHouse?: string
            streetName?: string
            buildingName?: string
            level?: string
            unit?: string
        },
        principalPlaceOfBusiness: {
            addressLine1?: string
            addressLine2?: string
            city?: string
            state?: string
            postalCode?: string
            country?: string
            blockHouse?: string
            streetName?: string
            buildingName?: string
            level?: string
            unit?: string
        }
    }
}

export interface MemberLegalDetails {
    businessRegistrationNumber?: string
    entityType?: string
    companyType?: string
    countryOfRegisteredBusiness?: string
    registrationDate?: TMongoDate
    businessEntityType?: string
}

export interface MemberRiskProfileAssessment {
    countryOfOperations?: string[]
    ownershipStructureLayers?: string
    productServiceComplexity: string
    ownershipStructureLayer: string
    transactionCountries: string[]
}

export interface PersonDetails {
    documents?: {
        id?: TMongoId
        type?: string
        number?: string
        expiryDate?: string
        issuedDate?: string
        issuedCountry?: string
    }[]
    callFirstName?: string
    callLastName?: string
    legalDetails?: {
        legalFirstName?: string
        legalLastName?: string
    }
    contactDetails?: {
        phoneCountry?: string
        phoneNumber?: string
        email?: string
        outgoingEmail?: string
    }
    personalDetails: {
        fullName?: string
        alias?: string[]
        gender?: string
        nationality?: string
        dateOfBirth?: string
        countryOfBirth?: string
        idDocument: {
            type: string
            idNumber?: string
            dateOfIssuance?: string
            dateOfExpiration?: string
        }
        passportExpiredDate?: Date
        isFinCardholder?: boolean
        finCardNumber?: string
    }
    address: Address
    riskProfileAssessment: {
        occupation?: string,
        sourceOfIncome?: string,
        sourceOfWealth?: string,
        isPep?: boolean,
        isShareOnBehalfAnotherPerson?: string,
        shareOnBehalfAnotherPerson?: string,
        isNomineeDirector?: string,
        isAcceptDirectorCriteria?: string,
        isMultipleNationalities?: string,
        nationalities?: string[],
        sourceOfFunds?: string,
        otherSourceOfFunds?: string,
    }
}

export interface BusinessAddress {
    addressLine1?: string
    addressLine2?: string
    city?: string
    state?: string
    country?: string
    postcode?: string
}

export interface Stakeholder {
    stakeholderDetails?: StakeholderDetails
}

export interface StakeholderDetails {
    kycMode?: string
    firstName?: string
    lastName?: string
    nationality?: string
    dateOfBirth?: string
    isResident?: string
    contactDetails?: StakeholderContactDetails
    professionalDetails?: ProfessionalDetail[]
    address?: Address
}

export interface StakeholderContactDetails {
    contactNo?: string
    email?: string
}

export interface ProfessionalDetail {
    position?: string
    sharePercentage?: string
}

export interface Address {
    addressLine1?: string
    addressLine2?: string
    city?: string
    state?: string
    postalCode?: string
    country?: string
    blockHouse?: string
    streetName?: string
    buildingName?: string
    level?: string
    unit?: string
}

export interface ApplicantDetails {
    kycMode?: string
    firstName?: string
    lastName?: string
    nationality?: string
    dateOfBirth?: string
    isResident?: string
    professionalDetails?: ProfessionalDetail2[]
    address?: Address2
    contactDetails?: ApplicantContactDetails
}

export interface ProfessionalDetail2 {
    position?: string
    sharePercentage?: string
}

export interface Address2 {
    addressLine1?: string
    addressLine2?: string
    city?: string
    state?: string
    postcode?: string
    country?: string
}

export interface ApplicantContactDetails {
    countryCode?: string
    contactNo?: string
    email?: string
}

export interface AdditionalInfo {
    isSameBusinessAddress?: string
}

export interface RiskAssessmentInfo {
    totalEmployees?: string
    annualTurnover?: string
    industrySector?: string
    countryOfOperation?: any[]
}

export interface ProductDetails {
    productType?: string[]
    program?: string
}

/**
 * in mongodb it is string
 */
type Date = string

export interface ServiceCreationDate {
    finance?: TMongoDate
    corpSec?: TMongoDate
    incorporation?: TMongoDate
}

export interface Services {
    /**
     * finance means business account
     */
    finance?: boolean
    /**
     * corpSec means Transfer In
     */
    corpSec?: boolean
    incorporation?: boolean
}
