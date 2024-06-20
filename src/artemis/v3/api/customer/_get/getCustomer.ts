
import ArtemisHeader from "../../../shared/ArtemisHeader"

import { TResGetCustomer } from "./TResGetCustomer"


/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function getCustomer(args: {
    auth: {
        token: string
    }
}): Promise<TResGetCustomer> {
    const headers = ArtemisHeader()
    headers.append("Authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer")

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json()) as Promise<TResGetCustomer>
        return result
    } catch (e) {
        return e
    }
}