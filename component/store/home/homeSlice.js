import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: '',
    from: 'USD',
    to: 'SGD',
};

export const counterSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        updateData: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value
        },
    },
});

export const { updateData } = counterSlice.actions;

export default counterSlice.reducer;
