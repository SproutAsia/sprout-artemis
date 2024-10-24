import ArtemisHeader from "../../../../../shared/ArtemisHeader"

import { TReqApproval } from "./TReqApproval"
import { TResApproval } from "./TResApproval"

/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function postApproval(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
    }
    body: TReqApproval
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    // https://api1.artemisuat.cynopsis.co/api/customer/3/risk-assessment/approval
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/risk-assessment/approval")


    const result = await fetch(url.toString(), {
        headers,
        method: "POST",
        body: JSON.stringify(args.body)
    }).then((res) => res.json())
    return result as TResApproval

}