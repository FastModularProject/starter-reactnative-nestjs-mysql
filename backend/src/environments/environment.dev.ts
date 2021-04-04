export const environment = {
    secretKey: "secretKey_WHICH_NEED_TO_BE_CHANGED_HA(88sdv5T@b9m<f2u+4M",
    database: {
        "host": "db",
        "port": process.env.MYSQL_PORT,
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DATABASE,
        "synchronize": true
    }
};
