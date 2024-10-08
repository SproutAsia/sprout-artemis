/// <reference types="node" />
import { TResponseGetRiskCustomer } from "./TResponseGetRiskCustomer";
export default class ArtemisRiskService {
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
    }): ArtemisRiskService;
    getRiskAssesmentByCustomer(customerId: string): Promise<TResponseGetRiskCustomer>;
}
