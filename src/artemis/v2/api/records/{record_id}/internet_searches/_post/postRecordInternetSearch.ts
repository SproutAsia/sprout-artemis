import { TResPostRecordInternetSearch } from "./TResPostRecordInternetSearch"

/**
 * post customer
 * @description STEP 2d : Post Internet Search
 */
export default async function postRecordInternetSearch(args: {
    auth: {
        token: string
    }
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string
    }
    query: {
        limit?: number
    }
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/records/" + args.path.recordId + "/internet_searches/?limit=" + args.query.limit)

    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            headers
        }).then((res) => res.json())
        return result as TResPostRecordInternetSearch
    } catch (e) {
        return e
    }
}