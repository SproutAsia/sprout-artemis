import dotenv from 'dotenv';



import ArtemisGrofService from '.';

dotenv.config();

(async () => {
    try {
        const res = await ArtemisGrofService.getCustomer({
            auth: { token: process.env.ARTEMIS_TOKEN },
            filter: {
                referenceId: '202209234'
            },
            pagination: {
                page: 0,
                size: 5
            }
        })
        console.log(">>> RES", res)
    } catch (e) {
        console.log(">>> Error", e)
    }
})()