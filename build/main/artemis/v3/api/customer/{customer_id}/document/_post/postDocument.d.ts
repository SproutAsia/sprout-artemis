/// <reference types="node" />
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function postDocument(args: {
    auth: {
        token: string;
    };
    data: {
        back: File;
        front: File;
    };
    path: {
        customerId: string;
    };
}): Promise<any>;
