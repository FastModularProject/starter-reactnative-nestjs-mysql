
const prod = {
    apiUrl: "/api"
}

const dev = {
    apiUrl: `http://192.168.1.28:3000/api`
}

console.log("__DEV__", __DEV__);

export const environment = __DEV__ ? dev : prod;
