import { Pool } from "pg";

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "express_crud_pg",
    port: 5432
});

export default pool;