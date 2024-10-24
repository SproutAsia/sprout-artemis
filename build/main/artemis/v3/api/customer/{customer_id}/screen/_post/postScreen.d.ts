/**
 * trigger start screening
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
}): Promise<boolean>;
