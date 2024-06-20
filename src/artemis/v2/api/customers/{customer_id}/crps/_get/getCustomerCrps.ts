import { TResGetCustomerCrps } from "./TResGetCustomerCrps"

/**
 * @description Individual Workflow - STEP 2a : Get Record ID and CRP ID
 * @description Corporate Workflow - STEP 3a : Get Record ID and CRP ID
 */
export default async function getCustomerCrps(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
    }
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customers/" + args.path.customerId + "/crps/")

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json())
        return result as TResGetCustomerCrps
    } catch (e) {
        return e
    }
}