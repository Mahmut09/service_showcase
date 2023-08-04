import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        URL: "https://api.yii2-stage.test.wooppay.com/",
        searchServices: [],
    },
    reducers: {
        setSearchServices(state, action) {
            state.searchServices = action.payload;
        },
        clearSearchServices(state) {
            state.searchServices = [];
        },
    },
});

export default toolkitSlice.reducer;
export const { setSearchServices, clearSearchServices } = toolkitSlice.actions;