export interface RentService {
    pk : number;
    title : string
    icon : string
    price : string
    status : string
    description : string
}


export interface ServiceListResponse {
    services: RentService[];
    draft_order_id: number;
    order_id : number;
}