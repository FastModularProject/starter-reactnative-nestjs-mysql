import { environment } from "../environments";
import { Store } from "../store/configure.store";

export const queryBuilder = query => {
    let queryBuilder = "?";

    Object.keys(query).forEach(key => {
        queryBuilder += `${key}=${JSON.stringify(query[key])}&`;
    });

    return queryBuilder;
};

const headers = (): any => {
    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": Store.getState().authStore.token
    };
    return headers;
}

export const put = async (route: string, object: any) => {
    return await fetch(environment.apiUrl + route, {
        method: "put",
        headers: headers(),
        body: JSON.stringify(object)
    });
};

export const get = async (route: string) => {
    return await fetch(environment.apiUrl + route, {
        method: "get",
        headers: headers(),
    });
};

export const del = async (route: string) => {
    return await fetch(environment.apiUrl + route, {
        method: "delete",
        headers: headers()
    });
};

export const post = async (route: string, object: any) => {
    return await fetch(environment.apiUrl + route, {
        method: "post",
        headers: headers(),
        body: JSON.stringify(object)
    });
};
