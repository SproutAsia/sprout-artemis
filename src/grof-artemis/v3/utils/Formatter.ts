import ConvertToArtemisEnum from "./ConvertEnum"

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
            return [ConvertToArtemisEnum.toSingaporeAddress({
                blockHouse: args.blockHouse,
                streetName: args.streetName,
                buildingName: args.buildingName,
                level: args.level,
                unit: args.unit,
                postalCode: args.postalCode
            })]
        } else {
            const addressLine = []
            if (args.addressLine1) addressLine.push(args.addressLine1)
            if (args.addressLine2) addressLine.push(args.addressLine2)
            return addressLine
        }
    }
}

export default Formatter