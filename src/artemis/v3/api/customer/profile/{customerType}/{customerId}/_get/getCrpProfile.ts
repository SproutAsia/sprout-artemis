import ArtemisHeader from "../../../../../../shared/ArtemisHeader"

import { TResGetCrpProfile } from "./TResGetCrpProfile"

/**
 * GET crp profile
 */
export default async function getCrpProfile(args: {
    auth: {
        token: string
    },
    filter: {
        customerId: string
        customerType: "INDIVIDUAL" | "CORPORATE"
        searchString?: string
    }
}): Promise<TResGetCrpProfile> {
    const headers = ArtemisHeader()
    headers.append("Authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/profile/" + args.filter.customerType + `/${args.filter.customerId}`)

    if (args.filter.customerType) url.searchParams.append("type", args.filter.customerType)
    url.searchParams.append("searchString", args.filter.searchString || "")
    // url.searchParams.append("mainCustomerId", args.filter.customerId)

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json()) as Promise<TResGetCrpProfile>
        return result
    } catch (e) {
        return e
    }
}