import ArtemisHeader from "../../../../shared/ArtemisHeader"




/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function getCustomerById(args: {
    auth: {
        token: string
    },
    path: {
        customerId: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("Authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId)

    const result = await fetch(url.toString(), {
        headers
    }).then((res) => {
        return res.json()
    })
    return result
}