import dotenv from 'dotenv';


import ArtemisGrofService from '.';


dotenv.config();


(async () => {
    const assigneeId = "17487"
    try {
        // login
        // const res = await ArtemisGrofService.postLogin({
        //     req: {
        //         username: "arisandy.rico@grof.co",
        //         password: "SproutXArtemis!123456"
        //     }
        // })

        const res = await ArtemisGrofService.checkToken({
            auth: {
                token: process.env.ARTEMIS_TOKEN || ""
            },
        })
        console.log(">>> RES", res)
    } catch (e) {
        console.log(">>> Error", e)
    }
})()