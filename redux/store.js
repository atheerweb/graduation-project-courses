import { configureStore } from "@reduxjs/toolkit";
import constantsSlice from "./slices/constantsSlice";
import apiSlice from "./slices/apiSlice";

const store = configureStore({
    reducer: {
        constants: constantsSlice,
        api: apiSlice
    }
});

export default store;