import ArtemisHeader from "../../../../../../../shared/ArtemisHeader"

import { TResRemoveHit } from "./TResRemoveHit"

/**
 * remove hit
 */
export default async function putRemoveHit(args: {
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
        match: "TRUE_HIT" | "NO_ACTION" | "FALSE_POSITIVE"
        screeningHitIds: string[]
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen/" + args.path.screenId + "/hit")

    const result = await fetch(url.toString(), {
        headers,
        method: "PUT",
        body: JSON.stringify({
            match: args.body.match,
            screeningHitIds: args.body.screeningHitIds
        })
    }).then((res) => res.json())
    return result as TResRemoveHit
}