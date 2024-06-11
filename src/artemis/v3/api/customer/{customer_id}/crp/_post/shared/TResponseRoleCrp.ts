import { TIsoDate } from "../../../../../../types/shared/TIsoDate"

export interface TResponseRoleCrp {
    id: number
    createdAt: TIsoDate
    updatedAt: TIsoDate
    createdBy: any
    updatedBy: any
    role: string
    appointedDate: string
    resignedDate: any
}
