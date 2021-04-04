import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        token: null
    },
    reducers: {
        setToken: (state, { payload }) => {
            return {
                token: payload
            };
        },
        resetToken: () => ({
            token: null
        })
    }
});

export default AuthSlice;