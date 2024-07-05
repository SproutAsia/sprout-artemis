

import ArtemisHeader from "../../../../../../shared/ArtemisHeader"

import { TResGetCrpById } from "./TResGetCrpById"

/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function getCrpById(args: {
    auth: {
        token: string
    },
    path: {
        customerId: string
        crpId: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("Authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/crp/" + args.path.crpId)

    const result = await fetch(url.toString(), {
        headers
    }).then((res) => res.json()) as Promise<TResGetCrpById>
    return result
}