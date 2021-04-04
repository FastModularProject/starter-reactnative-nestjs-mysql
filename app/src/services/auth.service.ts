import { APIResponse } from "../models/api.model";
import { CreateUser, User } from "../models/user.model";
import { post, get } from "./utils.service";

export const signin = async (email: string, password: string): Promise<APIResponse<{ token: string }>> => {
    const res = await post(`/auth/signin`, { email, password });
    return await res.json();
};

export const refreshToken = async (): Promise<APIResponse<{ token: string, me: User }>> => {
    const res = await get(`/auth/refresh-token`);
    return await res.json();
};

export const signup = async (user: CreateUser): Promise<APIResponse<{ success: boolean }>> => {
    const res = await post(`/auth/signup`, user);
    return await res.json();
};

export const isEmailFree = async (email: string): Promise<APIResponse<{ success: boolean }>> => {
    const res = await get(`/auth/email-free/${email}`);
    return await res.json();
};