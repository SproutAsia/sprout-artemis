
import { TResGetRiskReport } from "./TResGetRiskReport"


/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function getRiskReport(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
    }
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customers/" + args.path.customerId + "/risk-assessment")

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json())
        return result as TResGetRiskReport
    } catch (e) {
        return e
    }
}