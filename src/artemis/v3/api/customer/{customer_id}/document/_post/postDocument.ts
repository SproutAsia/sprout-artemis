
import ArtemisHeader from "../../../../../shared/ArtemisHeader"

import { TResPostDocument } from "./TResPostDocument"

/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function postDocument(args: {
    auth: {
        token: string
    }
    data: {
        back: File
        front: File
    }
    path: {
        customerId: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customers/" + args.path.customerId)

    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(args.data),
            headers
        }).then((res) => res.json())
        return result as TResPostDocument
    } catch (e) {
        return e
    }
}