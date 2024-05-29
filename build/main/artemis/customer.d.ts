/// <reference types="node" />
import { TResponseGetCustomer } from "../lib/artemis/types/customer/TResponseGetCustomer";
export default class ArtemisCustomerService {
    token: string;
    url: string;
    header: Headers;
    constructor(args: {
        token: string;
        url: string;
    });
    static init(args: {
        token: string;
        url: string;
    }): ArtemisCustomerService;
    getCustomerList(args?: {
        limit?: number;
    }): Promise<TResponseGetCustomer>;
}
