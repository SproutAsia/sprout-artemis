import dotenv from 'dotenv'

import { Member } from "./grof/types/TGrofApplication"
import { SampleCorporateMember } from "./test/sample"

import ArtemisGrofService from "."

dotenv.config()

const sample = (SampleCorporateMember as unknown) as Member
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