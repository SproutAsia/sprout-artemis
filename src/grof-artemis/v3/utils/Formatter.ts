const Formatter = {
    toGrofAddress(args: {
        country?: string
        blockHouse?: string
        streetName?: string
        buildingName?: string
        level?: string
        unit?: string
        postalCode?: string
        addressLine1?: string
        addressLine2?: string
    }) {
        if (args.country === "SG") {
            const formattedAddress = [
                args.country,
                args.blockHouse,
                args.streetName,
                args.buildingName,
                args.level,
                args.unit,
                args.postalCode
            ].join(", ")
            return [formattedAddress]
        } else {
            const addressLine = []
            if (args.addressLine1) addressLine.push(args.addressLine1)
            if (args.addressLine2) addressLine.push(args.addressLine2)
            return addressLine
        }
    }
}

export default Formatter