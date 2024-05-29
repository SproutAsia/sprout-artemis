import { TRequestPostCustomerCorporate } from "../types/api/customer/TRequestPostCustomerCorporate";
import { TRequestPostCustomerIndividual } from "../types/api/customer/TRequestPostCustomerIndividual";
import { TResponsePostCustomerCorporate } from "../types/api/customer/TResponsePostCustomerCorporate";
import { TResponsePostCustomerIndividual } from "../types/api/customer/TResponsePostCustomerIndividual";
import { TRequestPostCorporateCrp } from "../types/api/customer/{customer_id}/TRequestPostCorporateCrp";
import { TRequestPostIndividualCrp } from "../types/api/customer/{customer_id}/TRequestPostIndividualCrp";
import { TResponsePostIndividualCrp } from "../types/api/customer/{customer_id}/TResponsePostIndividualCrp";
import { TResponseGetCustomerCrps } from "../types/api/customer/{customer_id}/crp/TResponseGetCustomer";

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
    return {} as TResponseGetCustomerCrps
}

export async function PostIndividualCrp(customer_id: string, req: TRequestPostIndividualCrp) {
    const url = `/api/customer/${customer_id}/crp`
    return {} as TResponsePostIndividualCrp
}

export async function PostCorporateCrp(customer_id: string, req: TRequestPostCorporateCrp) {
    const url = `/api/customer/${customer_id}/crp`
    return {} as TResponsePostCustomerCorporate
}