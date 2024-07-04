
import ArtemisHeader from "../../../../../shared/ArtemisHeader"

import { TResGetCrp } from "./TResGetCrp"

/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function getCrp(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId)


    const result = await fetch(url.toString(), {
        headers
    }).then((res) => res.json())
    return result as Promise<TResGetCrp>
}