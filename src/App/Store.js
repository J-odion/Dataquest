import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../stores/storeIndex";



export const store = configureStore({
    reducer: {
        DataReducer
    }
});


