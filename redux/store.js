import { configureStore } from "@reduxjs/toolkit";
import constantsSlice from "./slices/constantsSlice";
import apiSlice from "./slices/apiSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        constants: constantsSlice,
        api: apiSlice,
        user: userSlice
    }
});

export default store;