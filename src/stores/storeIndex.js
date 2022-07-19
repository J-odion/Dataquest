import { createSlice } from "@reduxjs/toolkit";
import { store } from "../App/Store";



const initialState = {
    data: [],
};


export const AppData = createSlice({
    name: "AppData",
    initialState,
    reducers: {
        add : (state, action) => {
            state.data.push(action.payload);
        },
        remove : (state, action) => {
            state.data.splice(action.payload, 1);
        }
    }
}
);

export const { add, remove } = AppData.actions;
export const selectData = state => state.AppData.data;
export default AppData.reducer;