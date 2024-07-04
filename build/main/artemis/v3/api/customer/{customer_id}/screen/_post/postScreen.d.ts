/**
 * post customer
 */
export default function postScreen(args: {
    auth: {
        token: string;
    };
    query: {
        includeCrp: boolean;
        onlyUpdated: boolean;
    };
    path: {
        customerId: string;
    };
}): Promise<any>;
