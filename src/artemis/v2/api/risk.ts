import { TResponseGetRiskCustomer } from "./TResponseGetRiskCustomer"

export default class ArtemisRiskService {
    token: string
    url: string
    header: Headers

    constructor(args: {
        token: string
        url: string
    }) {
        this.token = args.token
        this.url = args.url

        const header = new Headers()
        header.set("Authorization", "Bearer " + args.token)
        header.set("Accept", "application/json")
        header.set("x-artemis-domain", "117")

        this.header = header
    }

    static init(args: {
        token: string
        url: string
    }) {
        return new ArtemisRiskService({
            token: args.token,
            url: args.url
        })
    }

    async getRiskAssesmentByCustomer(customerId: string) {
        const url = new URL(this.url + "/api/customers/" + customerId + "/risk_reports/?limit=1")

        console.log(url.toString())

        const result = fetch(url.toString(), {
            headers: this.header
        }).then((res) => res.json() as Promise<TResponseGetRiskCustomer>)

        return result;
    }
}