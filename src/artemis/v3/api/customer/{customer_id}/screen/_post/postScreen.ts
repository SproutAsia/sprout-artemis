import ArtemisHeader from "../../../../../shared/ArtemisHeader"



/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
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
    const url = new URL(process.env.ARTEMIS_API + "/customers/" + args.path.customerId + "/screen")
    if (args.query.includeCrp) url.searchParams.append('includeCrp', args.query.includeCrp ? "true" : "")
    if (args.query.onlyUpdated) url.searchParams.append('onlyUpdated', args.query.onlyUpdated ? "true" : "")

    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            headers
        }).then((res) => res.text())
        return result
    } catch (e) {
        return e
    }
}