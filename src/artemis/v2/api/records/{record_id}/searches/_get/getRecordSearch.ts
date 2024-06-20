import { TResGetRecordSearch } from "./TResGetRecordSearch"

/**
 * post customer
 * @description Individual Workflow - STEP 2c : Get Database Screening Result
 * @description Corporate Workflow - STEP 3c : Get Database Screening Result
 */
export default async function getRecordSearch(args: {
    auth: {
        token: string
    }
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string
    }
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/records/" + args.path.recordId + "/searches")

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json())
        return result as TResGetRecordSearch
    } catch (e) {
        return e
    }
}