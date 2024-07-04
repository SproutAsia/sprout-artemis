import ArtemisHeader from "../../../../shared/ArtemisHeader"


/**
 * to check token
 */
export default async function checkToken(args: {
    auth: {
        token: string
    }
}) {
    const headers = ArtemisHeader()
    headers.append("Authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/user/me")

    const result = await fetch(url.toString(), {
        headers
    })
    return {
        isActive: result.status !== 401
    }
}