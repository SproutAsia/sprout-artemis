
import ArtemisHeader from "../../../../../../shared/ArtemisHeader"

import { TResGetScreenSummary } from "./TResGetScreenSummary"

export default async function getScreenSummary(args: {
    auth: {
        token: string
    }
    path: {
        customerId: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen/summary")

    const result = await fetch(url.toString(), {
        headers
    }).then((res) => res.ok ? res.json() : res.text())
    if (typeof result === "string" && result === "") {
        throw new Error("Screening summary not found")
    }
    return result as TResGetScreenSummary
}