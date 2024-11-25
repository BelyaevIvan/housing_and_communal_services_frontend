import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AppData{
    Service_name : string
    price_filter : string
}

const initialState : AppData =  {
    Service_name: "",
    price_filter : ""

}

export const AppSlice = createSlice({
    name : "appSlice",
    initialState,
    reducers: {
        // refreshApp: (state) =>{
        //     state.Cargo_name = ""
        //     state.price_filter = '0'
        // },
        setServiceName: (state, action : PayloadAction<string>)=> {
            state.Service_name = action.payload
        },
        // setPriceFilter: (state, action: PayloadAction<string>) =>{
        //     state.price_filter = (action.payload)
        // }
    }
});

export const {
    // refreshApp,
    setServiceName,
    // setPriceFilter,
} = AppSlice.actions;