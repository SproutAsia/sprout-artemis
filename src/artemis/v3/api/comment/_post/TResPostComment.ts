export type TResPostComment = Root2[]

export interface Root2 {
  id: number
  createdAt: string
  updatedAt: string
  createdBy: CreatedBy
  updatedBy: UpdatedBy
  content: string
  objectId: number
  referenceId: string
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
