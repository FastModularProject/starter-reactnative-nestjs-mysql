import { useSelector } from "react-redux";
import { getMe } from "../services/users.service";
import MeSlice from "../store/slices/me.slice";
import { Store } from "../store/configure.store";
import AuthSlice from "../store/slices/auth.slice";
import { User } from "../models/user.model";

export const useLogin = (): { isLogin: boolean, me: User } => {
    const me = useSelector((state) => state.meStore);
    const auth = useSelector(state => state.authStore);
    return { isLogin: Boolean(auth.token), me };
}

export const login = async (token: string) => {
    Store.dispatch(AuthSlice.actions.setToken(token));
    const res = await getMe();
    if (res.statusCode == 200) Store.dispatch(MeSlice.actions.setMe(res.data));
}

export const logout = () => {
    Store.dispatch(MeSlice.actions.resetMe());
    Store.dispatch(AuthSlice.actions.resetToken());
}