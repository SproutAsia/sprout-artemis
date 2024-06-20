import { TReqPostRiskReport } from "./TReqPostRiskReport"
import { TResPostRiskReport } from "./TResPostRiskReport"



/**
 * post customer
 * @description STEP 4 : Post Risk Report
 */
export default async function postRiskReport(args: {
    auth: {
        token: string
    }
    path: {
        /**
         * can be gained from get customer crps
         */
        customerId: string
    }
    req: TReqPostRiskReport
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customers/" + args.path.customerId + "/risk_reports")

    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(args.req),
            headers
        }).then((res) => res.json())
        return result as TResPostRiskReport
    } catch (e) {
        return e
    }
}