
import ArtemisHeader from "../../../../../../shared/ArtemisHeader"

import { TReqPostIndividualCrp } from "./TReqPostIndividualCrp.v3"
import { TResPostIndividualCrp } from "./TResPostIndividualCrp.v3"

/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function postIndividualCrp(args: {
    auth: {
        token: string
    }
    req: TReqPostIndividualCrp
    path: {
        customerId: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/crp")

    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(args.req),
            headers
        }).then((res) => res.json())
        return result as TResPostIndividualCrp
    } catch (e) {
        return e
    }
}