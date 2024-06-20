import { TReqPostRecordSearch } from "./TReqPostRecordSearch"
import { TResPostRecordSearch } from "./TResPostRecordSearch"

/**
 * post customer
 * @description STEP 2b : Post Database Screening
 */
export default async function postRecordSearch(args: {
    auth: {
        token: string
    }
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string
    }
    req: TReqPostRecordSearch
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/records/" + args.path.recordId + "/searches")

    try {
        const result = await fetch(url.toString(), {
            method: 'POST',
            body: JSON.stringify(args.req),
            headers
        }).then((res) => res.json())
        return result as TResPostRecordSearch
    } catch (e) {
        return e
    }
}