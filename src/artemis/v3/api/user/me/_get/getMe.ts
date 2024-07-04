import ArtemisHeader from "../../../../shared/ArtemisHeader"

import { TResGetMe } from "./TResGetMe"




/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function getCustomer(args: {
    auth: {
        token: string
    },
    filter: {
        customerStatus?: string
        customerType?: "INDIVIDUAL" | "CORPORATE"
        referenceId?: string
        riskRating?: string
        searchString?: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("Authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer")
    if (args.filter.customerStatus) url.searchParams.append("customerStatusList", args.filter.customerStatus)
    if (args.filter.customerType) url.searchParams.append("customerTypeList", args.filter.customerType)
    if (args.filter.referenceId) url.searchParams.append("referenceId", args.filter.referenceId)
    if (args.filter.riskRating) url.searchParams.append("riskRatingList", args.filter.riskRating)
    if (args.filter.searchString) url.searchParams.append("searchString", args.filter.searchString)


    const result = await fetch(url.toString(), {
        headers
    })
    if (result.status === 401) throw new Error("Unauthorized")
    else return result.json() as Promise<TResGetMe>
}