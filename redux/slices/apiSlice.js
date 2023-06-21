import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name: "api",
    initialState: {
        value: {
            categories: [],
            categoryCourses: [],
            oneCourse: []
        }
    },
    reducers: {
        setCategories: (state, action) => {
            state.value.categories = action.payload.value;
        },
        setCategoryCourses: (state, action) => {
            state.value.categoryCourses = action.payload.value;
        },
        setOneCourse: (state, action) => {
            state.value.oneCourse = action.payload.value;
        }
    }
});

export const { setCategories, setCategoryCourses, setOneCourse } = apiSlice.actions;
export default apiSlice.reducer;