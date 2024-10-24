export interface TResGetUsers {
    content: Content[]
    pageable: Pageable
    totalElements: number
    totalPages: number
    last: boolean
    size: number
    number: number
    sort: Sort2
    numberOfElements: number
    first: boolean
    empty: boolean
}

export interface Content {
    user: User
    roles: Role[],
    permissions: string[]
}
export interface User {
    id: number
    createdAt: string
    updatedAt: string
    createdBy: CreatedBy
    updatedBy: UpdatedBy
    email: string
    firstName: string
    lastName: string
    avatar: string
    colorCode: string
    address: string
    bio: string
    phone: string
    role: string
    locked: boolean
    lastAccessed: string
    enabledTwoFactorAuth: boolean
    verified: boolean
}

export interface CreatedBy {
    id: number
    firstName: string
    lastName: string
    email: string
    fullName: string
    rawFirstName: string
    rawLastName: string
    deleted: number
    role: string
}

export interface UpdatedBy {
    id: number
    firstName: string
    lastName: string
    email: string
    fullName: string
    rawFirstName: string
    rawLastName: string
    deleted: number
    role: string
}

export interface Pageable {
    sort: Sort
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    unpaged: boolean
}

export interface Sort {
    sorted: boolean
    unsorted: boolean
    empty: boolean
}

export interface Sort2 {
    sorted: boolean
    unsorted: boolean
    empty: boolean
}

export interface Role {
    id: number
    createdAt: string,
    updatedAt: string,
    createdBy: CreatedBy,
    updatedBy: UpdatedBy,
    name: string,
    domainId: string,
    permissions: string[]
}
