import ArtemisHeader from "../../../../../../shared/ArtemisHeader"

import { TResPutScreenConclusion } from "./TResPutScreenConclusion"


/**
 * update screening conclusion
 */
export default async function putScreenConclusion(args: {
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
    body: {
        conclusions: Array<"ADVERSE_MEDIA" | "NO_HIT" | "SANCTION" | "PEP" | "OWN_RESTRICTED_LIST">
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen/" + args.path.screenId)

    const result = await fetch(url.toString(), {
        headers,
        method: "PUT",
        body: JSON.stringify({
            conclusions: args.body.conclusions,
            screeningId: args.path.screenId
        })
    }).then((res) => res.json())
    return result as TResPutScreenConclusion
}