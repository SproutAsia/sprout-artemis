

import ArtemisGrofService from '.';


ArtemisGrofService.getCrpProfile({
    auth: {
        token: process.env.ARTEMIS_TOKEN,
    },
    filter: {
        customerType: "INDIVIDUAL",
        customerId: "18",
        searchString: "kim"
    }
})