import {sendRequest} from "../index.ts";
import {ServiceListResponse, RentService} from "./typing.ts";
export const getServiceList = async (searchTitle?: string, priceFilter?: number) => {
    try {
        const params = new URLSearchParams();

        if (searchTitle) {
            params.append("title", searchTitle);
        }

        if (priceFilter !== undefined) {
            params.append("min_price", String(priceFilter));
        }

        const response: ServiceListResponse = await sendRequest({
            method: "GET",
            path: `/rent_services/?${params.toString()}`,
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