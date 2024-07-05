import ArtemisHeader from "../../../../../../shared/ArtemisHeader"
import { TResPostCustomerCorporate } from "../../../../_post/corporate/TResPostCustomerCorporate.v3"

import { TReqPostCorporateCrp } from "./TReqPostCorporateCrp.v3"

/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function postCorporateCrp(args: {
    auth: {
        token: string
    }
    req: TReqPostCorporateCrp
    path: {
        customerId: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/crp")

    const result = await fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify(args.req),
        headers
    }).then((res) => res.json())
    return result as TResPostCustomerCorporate
}