import { TReqCustomerCrp } from "./TReqCustomerCrp"
import { TResCustomerCrp } from "./TResCustomerCrp"

/**
 * @description Corporate Workflow - STEP 2a : Add CRP
 */
export default async function postCustomerCrp(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
    },
    req: TReqCustomerCrp
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customers/" + args.path.customerId + "/crps/")

    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(args.req),
            headers
        }).then((res) => res.json())
        return result as TResCustomerCrp
    } catch (e) {
        return e
    }
}