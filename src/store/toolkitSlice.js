import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        URL: "https://api.yii2-stage.test.wooppay.com/",
    },
    reducers: {

    },
});

export default toolkitSlice.reducer;
export const { increment, decrement } = toolkitSlice.actions;
