import dotenv from 'dotenv';

import { SampleFullApp } from './sample';

import ArtemisGrofService from '.';


dotenv.config();


(async () => {
    const assigneeId = "17487"
    try {
        const res = await ArtemisGrofService.postCorporateCustomerFromGrof({
            auth: {
                token: process.env.ARTEMIS_TOKEN || ""
            },
            assigneeId,
            grof: {
                application: SampleFullApp.data as any
            },
            customFn: {
                parseCountry(country) {
                    if (country === "US") return "UNITED STATES OF AMERICA"
                    if (country === "SG") return "SINGAPORE"
                    return country
                },
            }
        })
        console.log(">>> RES", res)
    } catch (e) {
        console.log(">>> Error", e)
    }
})()