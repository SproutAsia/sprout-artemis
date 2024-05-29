export class ArtemisAuthService {
    url: string
    header: Headers

    constructor(args: {
        url: string
    }) {
        this.url = args.url

        const header = new Headers()
        header.set("Accept", "application/json")
        header.set("x-artemis-domain", "117")

        this.header = header
    }


    getToken(args: {
        username: string
        password: string
    }) {
        const url = new URL(this.url + "/api/authentication/login")

        const result = fetch(url, {
            method: "POST",
            headers: this.header,
            body: JSON.stringify(args)
        }).then(res => res.json())

        return result
    }
}