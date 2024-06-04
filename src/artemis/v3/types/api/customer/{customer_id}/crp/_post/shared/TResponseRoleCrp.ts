import { TIsoDate } from "../../../../../../shared/TIsoDate"

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
