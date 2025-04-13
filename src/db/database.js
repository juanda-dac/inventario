import { createConnection } from "promise-mysql";
import {config} from "dotenv";

config();

console.log(process.env.DB_NAME)

const connection = createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const getConnection = () => {
    return connection;
}

export default getConnection;

