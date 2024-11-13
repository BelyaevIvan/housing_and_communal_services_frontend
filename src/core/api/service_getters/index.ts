import {sendRequest} from "../index.ts";
import {ServiceListResponse, RentService} from "./typing.ts";
export const getServiceList = async (searchTitle?: string, priceFilter? : Number) => {
    try {
        const params: {[key: string]: any} = {};
    
    if (searchTitle) {
            params.q = searchTitle;
        }

 
    
        const response: ServiceListResponse = await sendRequest({
            method: "GET",
            path: "/rent_services/",
            params: Object.keys(params).length > 0 ? params : undefined,
        });
        return response;

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export const getService = async (id : string) => {
    try{
        const response : RentService = await sendRequest({
            method : "Get",
            path: `/rent_services/${id}/`,
        });
        return response
    }
    catch (error){
        console.error("Error", error);
        throw error;
    }
}