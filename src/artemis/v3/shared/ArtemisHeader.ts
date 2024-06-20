export default function ArtemisHeader() {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    headers.append("Origin", process.env.ARTEMIS_ORIGIN)
    headers.append("x-domain-id", process.env.ARTEMIS_DOMAIN_ID)

    return headers
}