// POST /api/customer/{{primary_customer_id}}/screen?includeCrp=true&onlyUpdated=true
// Success Code 200 will be shown with an empty message if it manages to conduct screening.

export interface TResponsePostScreen {
    name: any
}