declare const Formatter: {
    toGrofAddress(args: {
        country?: string;
        blockHouse?: string;
        streetName?: string;
        buildingName?: string;
        level?: string;
        unit?: string;
        postalCode?: string;
        addressLine1?: string;
        addressLine2?: string;
    }): any[];
};
export default Formatter;
