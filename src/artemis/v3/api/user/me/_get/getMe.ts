import ArtemisHeader from "../../../../shared/ArtemisHeader"

import { TResGetMe } from "./TResGetMe"




/**
 * to check token
 */
export default async function getMe(args: {
    auth: {
        token: string
    },
    filter: {
        customerStatus?: string
        customerType?: "INDIVIDUAL" | "CORPORATE"
        referenceId?: string
        riskRating?: string
        searchString?: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("Authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/user/me")

    const result = await fetch(url.toString(), {
        headers
    })
    if (result.status === 401) throw new Error("Unauthorized")
    else return result.json() as Promise<TResGetMe>
}