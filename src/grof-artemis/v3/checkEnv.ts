export default function checkEnv() {
    return {
        origin: process.env.ARTEMIS_ORIGIN,
        domainId: process.env.ARTEMIS_DOMAIN_ID,
        api: process.env.ARTEMIS_API
    }
}