import { createStore } from "redux";
import { persistCombineReducers } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import AuthSlice from "./slices/auth.slice";
import MeSlice from "./slices/me.slice";

const persistConfig = {
    key: "root",
    storage: AsyncStorage
}


export const Store = createStore(
    persistCombineReducers(persistConfig, {
        authStore: AuthSlice.reducer,
        meStore: MeSlice.reducer
    })
);

export type State = ReturnType<typeof Store.getState>
