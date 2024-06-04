import { TReqPostCustomer } from "./TReqPostCustomer"
import { TResPostCustomer } from "./TResPostCustomer"

/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function postCustomer(args: {
    auth: {
        token: string
    }
    req: TReqPostCustomer
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customers")

    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(args.req),
            headers
        }).then((res) => res.json())
        return result as TResPostCustomer
    } catch (e) {
        return e
    }
}