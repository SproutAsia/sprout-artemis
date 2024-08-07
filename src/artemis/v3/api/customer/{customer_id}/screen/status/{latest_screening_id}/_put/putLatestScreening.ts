import ArtemisHeader from "../../../../../../../shared/ArtemisHeader"

import { TResPutLatestScreening } from "./TResPutLatestScreening"



/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function putLatestScreening(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
        latestScreeningId: string
    }
    body: {
        conclusions: string[]
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen/" + args.path.latestScreeningId)

    try {
        const result = await fetch(url.toString(), {
            headers,
            body: JSON.stringify(args.body),
            method: "PUT"
        }).then((res) => res.json())
        return result as TResPutLatestScreening
    } catch (e) {
        return e
    }
}