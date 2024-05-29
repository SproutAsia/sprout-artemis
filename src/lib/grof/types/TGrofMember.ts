export interface TGrofMember {
    _id: Id
    category: string
    status: string
    appointments: Appointment[]
    documents: any[]
    corpsecRequirement: CorpsecRequirement
    shareIds: ShareId[]
    isCorporateRepresentative: boolean
    isApplicant: boolean
    artemisExclusive: ArtemisExclusive
    createdAt: CreatedAt
    updatedAt: UpdatedAt
    __v: number
    personId: PersonId
}

export interface Id {
    $oid: string
}

export interface Appointment {
    position: string
    appointmentDate: string
    resignedDate: string
    status: string
    _id: Id2
}

export interface Id2 {
    $oid: string
}

export interface CorpsecRequirement {
    currency: string
}

export interface ShareId {
    $oid: string
}

export interface ArtemisExclusive {
    crpId: string
}

export interface CreatedAt {
    $date: string
}

export interface UpdatedAt {
    $date: string
}

export interface PersonId {
    $oid: string
}
