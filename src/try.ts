import dotenv from 'dotenv'


import ConvertToRequest from './grof-artemis/v3/utils/ConvertToRequest'
import { SampleFullApp } from './sample'

import ArtemisGrofService from '.'

dotenv.config()

try {
    const corporate = SampleFullApp.data.members.find((m) => m.category === "CORPORATE")
    console.log(">>> FOUND CORP", corporate)
    const convertResult = ConvertToRequest.toSingleCorporateCrp({
        member: corporate as any
    })
    console.log(">>> RESULT", JSON.stringify(convertResult))
} catch (e) {
    console.log(">>> Error", e)
}

ArtemisGrofService.putScreenConclusion({
    auth: {
        token: ""
    },
    path: {
        customerId: "",
        screenId: ""
    },
    body: {
        conclusions: ["ADVERSE_MEDIA", "NO_HIT"]
    }
})