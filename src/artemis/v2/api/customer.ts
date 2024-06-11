
export default class ArtemisCustomerService {
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
        return new ArtemisCustomerService({
            token: args.token,
            url: args.url
        })
    }

    async getCustomerList(args?: {
        limit?: number
    }) {
        const url = new URL(this.url + "/api/customers/")
        if (args.limit) url.searchParams.set('limit', args.limit.toString())

        console.log(url.toString())

        const result = fetch(url.toString(), {
            headers: this.header
        }).then((res) => res.json())

        return result;
    }
}

