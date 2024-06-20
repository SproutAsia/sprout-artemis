import dotenv from 'dotenv'

import { Member } from "./grof/types/TGrofApplication"
import { SampleCorporateMember } from "./test/sample"

import ArtemisGrofService from "."

dotenv.config()

const sample = (SampleCorporateMember as unknown) as Member
ArtemisGrofService.postCorporateCrpFromGrof({
    auth: {
        token: process.env.ARTEMIS_TOKEN,
    },
    grof: {
        application: {
            company: {
                member: sample
            }
        }
    },
    path: {
        customerId: "13"
    }
})