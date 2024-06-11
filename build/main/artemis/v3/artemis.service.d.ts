import { TRequestPostCustomerCorporate } from "./types/api/customer/_post/corporate/TRequestPostCustomerCorporate";
import { TRequestPostCustomerIndividual } from "./types/api/customer/_post/individual/TRequestPostCustomerIndividual";
import { TRequestPostCorporateCrp } from "./types/api/customer/{customer_id}/crp/_post/corporate/TRequestPostCorporateCrp";
import { TRequestPostIndividualCrp } from "./types/api/customer/{customer_id}/crp/_post/individual/TRequestPostIndividualCrp";
export declare function PostCustomerCorporate(req: TRequestPostCustomerCorporate): Promise<TResponsePostCustomerCorporate>;
export declare function PostCustomerIndividual(req: TRequestPostCustomerIndividual): Promise<TResponsePostCustomerIndividual>;
export declare function GetCustomerCrp(customer_id: string): Promise<TResponseGetCustomerCrp>;
export declare function PostIndividualCrp(customer_id: string, req: TRequestPostIndividualCrp): Promise<TResponsePostIndividualCrp>;
export declare function PostCorporateCrp(customer_id: string, req: TRequestPostCorporateCrp): Promise<TResponsePostCustomerCorporate>;
