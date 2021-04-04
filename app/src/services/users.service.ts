import { APIResponse } from "../models/api.model";
import { User } from "../models/user.model";
import { get } from "./utils.service";

export const getMe = async (): Promise<APIResponse<User>> => {
    const res = await get(`/users/me`);
    return await res.json();
};