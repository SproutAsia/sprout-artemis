import { TReqPostCustomerIndividual } from "./TReqPostCustomerIndividual.v3"
import { TResPostCustomerIndividual } from "./TResPostCustomerIndividual.v3"


/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function postIndividualCustomer(args: {
    auth: {
        token: string
    }
    req: TReqPostCustomerIndividual
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
        return result as TResPostCustomerIndividual
    } catch (e) {
        return e
    }
}