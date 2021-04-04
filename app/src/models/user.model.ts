export interface User {
    id: number;
    pseudo: string;
    email: string;
    password: string;
    role: "user" | "premium" | "admin";
}

export interface CreateUser {
    pseudo: string;
    email: string;
    password: string;
}