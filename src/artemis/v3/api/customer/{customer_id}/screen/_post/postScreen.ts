import ArtemisHeader from "../../../../../shared/ArtemisHeader"

/**
 * trigger start screening
 */
export default async function postScreen(args: {
    auth: {
        token: string
    }
    query: {
        includeCrp: boolean
        onlyUpdated: boolean
    }
    path: {
        customerId: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/screen")
    if (args.query.includeCrp) url.searchParams.append('includeCrp', args.query.includeCrp ? "true" : "")
    if (args.query.onlyUpdated) url.searchParams.append('onlyUpdated', args.query.onlyUpdated ? "true" : "")

    const result = await fetch(url.toString(), {
        method: "POST",
        headers
    })
    return result.status === 200
}