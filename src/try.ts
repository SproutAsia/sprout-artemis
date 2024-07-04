import dotenv from 'dotenv'

import { Member } from "./grof/types/TGrofApplication"
import { SampleCorporateMember } from "./test/sample"

import ArtemisGrofService from "."

dotenv.config()

const sample = (SampleCorporateMember as unknown) as Member
ArtemisGrofService.checkToken({
    auth: {
        token: process.env.ARTEMIS_TOKEN,
    }
}).then((res) => {
    console.log(">>> RES", res.isActive)
})