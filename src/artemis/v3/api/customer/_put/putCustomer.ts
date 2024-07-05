

import ArtemisHeader from "../../../shared/ArtemisHeader"
import { TReqPostCorporateCrp } from "../{customer_id}/crp/_post/corporate/TReqPostCorporateCrp.v3"

import { TResPutCustomer } from "./TResPutCustomer"


/**
 * update customer
 */
export default async function putCustomer(args: {
    auth: {
        token: string
    }
    req: TReqPostCorporateCrp
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer")

    const result = await fetch(url.toString(), {
        method: "PUT",
        body: JSON.stringify(args.req),
        headers
    }).then(async (res) => {
        return res.json()
    })
    return result as TResPutCustomer
}