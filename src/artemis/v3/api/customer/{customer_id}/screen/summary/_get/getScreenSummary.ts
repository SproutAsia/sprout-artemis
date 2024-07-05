
import ArtemisHeader from "../../../../../../shared/ArtemisHeader"

import { TResGetScreenSummary } from "./TResGetScreenSummary"


/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function getScreenSummary(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen/summary")

    const result = await fetch(url.toString(), {
        headers
    }).then((res) => res.json())
    return result as TResGetScreenSummary
}