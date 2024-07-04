import ArtemisHeader from "../../../../../../../shared/ArtemisHeader"

import { TResHit } from "./TResHit"



/**
 * get hit of customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function getHit(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
        /**
         * you can get screen customer id from screen summary response screening.id
         */
        screenId: string
    }
    query: {
        screeningType: "ARTEMISCAN" | "INTERNET_SEARCH" | "TR"
        screeningSessionId: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen/" + args.path.screenId + "/hit")
    url.searchParams.append("screeningId", args.path.screenId)
    url.searchParams.append("screeningType", args.query.screeningType)
    url.searchParams.append("customerId", args.path.customerId)
    url.searchParams.append("screeningSessionId", args.query.screeningSessionId)

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json())
        return result as TResHit
    } catch (e) {
        return e
    }
}