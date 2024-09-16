import dotenv from 'dotenv';


import { SampleApplication } from './sample';

import ArtemisGrofService from '.';

dotenv.config();

(async () => {
    try {
        const res = await ArtemisGrofService.postCorporateCustomerFromGrof({
            auth: {
                token: process.env.ARTEMIS_TOKEN || ""
            },
            grof: {
                application: SampleApplication as any
            }
        })
        console.log(">>> RES", res)
    } catch (e) {
        console.log(">>> Error", e)
    }
})()