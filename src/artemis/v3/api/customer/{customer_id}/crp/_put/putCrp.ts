
import ArtemisHeader from "../../../../../shared/ArtemisHeader"
import { TReqPostCorporateCrp } from "../_post/corporate/TReqPostCorporateCrp.v3"
import { TResPostIndividualCrp } from "../_post/individual/TResPostIndividualCrp.v3"

import { TResPutCrp } from "./TResPutCrp"



/**
 * put CRP
 */
export default async function putCrp(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
        crpId: string
    }
    body: TReqPostCorporateCrp | TResPostIndividualCrp
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/crp/" + args.path.crpId)

    const result = await fetch(url.toString(), {
        headers,
        method: "PUST",
        body: JSON.stringify(args.body)
    }).then((res) => res.json())
    return result as TResPutCrp
}