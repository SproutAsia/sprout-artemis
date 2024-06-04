import { TResGetCustomer } from "./TResGetCustomer"

/**
 * post customer
 * @description STEP 5 : GET CUSTOMER
 */
export default async function getCustomer(args: {
    auth: {
        token: string
    }
    path: {
        /**
         * can be gained from get customer crps
         */
        customerId: string
    }
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customers/" + args.path.customerId)

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json())
        return result as TResGetCustomer
    } catch (e) {
        return e
    }
}