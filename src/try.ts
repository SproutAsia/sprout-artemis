import dotenv from 'dotenv'


import ArtemisGrofService from "."

dotenv.config()

ArtemisGrofService.getCrpProfile({
    auth: {
        token: process.env.ARTEMIS_TOKEN,
    },
    filter: {
        customerType: "INDIVIDUAL",
        customerId: "18",
        searchString: "kim"
    }
}).then((res) => {
    console.log(">>> RES", JSON.stringify(res, null, 2))
})