export const environment = {
    secretKey: "secretKey_WHICH_NEED_TO_BE_CHANGED_HA(88sdv5T@b9m<f2u+4M",
    database: {
        "host": process.env.RDS_HOSTNAME,
        "port": process.env.RDS_PORT,
        "username": process.env.RDS_USERNAME,
        "password": process.env.RDS_PASSWORD,
        "database": process.env.RDS_DB_NAME,
        "synchronize": false
    }
};
