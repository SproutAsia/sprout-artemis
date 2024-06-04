import { TRequestPostCustomerCorporate } from "./types/api/customer/_post/corporate/TRequestPostCustomerCorporate";
import { TResponsePostCustomerCorporate } from "./types/api/customer/_post/corporate/TResponsePostCustomerCorporate";
import { TRequestPostCustomerIndividual } from "./types/api/customer/_post/individual/TRequestPostCustomerIndividual";
import { TResponsePostCustomerIndividual } from "./types/api/customer/_post/individual/TResponsePostCustomerIndividual";
import { TResponseGetCustomerCrp } from "./types/api/customer/{customer_id}/crp/_get/TResponseGetCustomerCrp";
import { TRequestPostCorporateCrp } from "./types/api/customer/{customer_id}/crp/_post/corporate/TRequestPostCorporateCrp";
import { TRequestPostIndividualCrp } from "./types/api/customer/{customer_id}/crp/_post/individual/TRequestPostIndividualCrp";
import { TResponsePostIndividualCrp } from "./types/api/customer/{customer_id}/crp/_post/individual/TResponsePostIndividualCrp";

export async function PostCustomerCorporate(req: TRequestPostCustomerCorporate) {
    const url = `/api/customer`
    return {} as TResponsePostCustomerCorporate
}

export async function PostCustomerIndividual(req: TRequestPostCustomerIndividual) {
    const url = `/api/customer`
    return {} as TResponsePostCustomerIndividual
}

export async function GetCustomerCrp(customer_id: string) {
    const url = `/api/customer/${customer_id}/crp`
    return {} as TResponseGetCustomerCrp
}

export async function PostIndividualCrp(customer_id: string, req: TRequestPostIndividualCrp) {
    const url = `/api/customer/${customer_id}/crp`
    return {} as TResponsePostIndividualCrp
}

export async function PostCorporateCrp(customer_id: string, req: TRequestPostCorporateCrp) {
    const url = `/api/customer/${customer_id}/crp`
    return {} as TResponsePostCustomerCorporate
}