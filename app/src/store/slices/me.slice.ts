import { createSlice } from "@reduxjs/toolkit";

const MeSlice = createSlice({
    name: "me",
    initialState: {

    },
    reducers: {
        setMe: (state, { payload }) => {
            return payload;
        },
        updateMe: (state, { payload }) => {
            return {
                ...state,
                ...payload
            };
        },
        resetMe: () => ({})
    }
});

export default MeSlice;