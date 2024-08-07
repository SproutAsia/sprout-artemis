/**
 * post customer
 */
export default function getCustomerScreen(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
    };
    query: {
        screeningType: "TR" | "INTERNET_SEARCH" | "ARTEMISCAN";
    };
}): Promise<any>;
