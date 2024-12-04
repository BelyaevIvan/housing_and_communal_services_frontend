import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppData{
    Service_name : string
    price_filter : string
    filterStatus? : string
    filterStartDate? : string
    filterEndDate? : string
    Order_id : number
}

const initialState : AppData =  {
    Service_name: "",
    price_filter : "",
    filterStatus: undefined,
    filterStartDate: undefined,
    filterEndDate: undefined,
    Order_id : 0

}

export const AppSlice = createSlice({
    name : "appSlice",
    initialState,
    reducers: {
        refreshApp: (state) => {
            state.Service_name = ""
            state.price_filter = ""
            state.filterStatus = undefined,
            state.filterStartDate = undefined,
            state.filterEndDate = undefined
            state.Order_id = 0
        },
        setServiceName: (state, action : PayloadAction<string>)=> {
            state.Service_name = action.payload
        },
        setPriceFilter: (state, action : PayloadAction<string>)=> {
            state.price_filter = action.payload
        },
        setFilterStatus: (state, action : PayloadAction<string>)=> {
            state.filterStatus = action.payload
        },
        setFilterStartDate: (state, action : PayloadAction<string>)=> {
            state.filterStartDate = action.payload
        },
        setFilterEndDate: (state, action : PayloadAction<string>)=> {
            state.filterEndDate = action.payload
        },
        setOrderData: (state, action : PayloadAction<number>)=> {
            state.Order_id = action.payload
            console.log(state.Order_id)
        }
    }
});

export const {
    refreshApp,
    setServiceName,
    setPriceFilter,
    setFilterStatus,
    setFilterStartDate,
    setFilterEndDate,
    setOrderData
} = AppSlice.actions;