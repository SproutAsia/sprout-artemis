import ArtemisHeader from "../../../../../shared/ArtemisHeader"

import { TResGetCustomerScreen } from "./TResGetCustomerScreen"


/**
 * post customer
 */
export default async function getCustomerScreen(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
    },
    query: {
        screeningType: "TR" | "INTERNET_SEARCH" | "ARTEMISCAN"
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen")
    url.searchParams.append('screeningType', args.query.screeningType)
    url.searchParams.append('type', "ADHOC")

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json())
        return result as TResGetCustomerScreen
    } catch (e) {
        return e
    }
}