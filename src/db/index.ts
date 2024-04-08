import { Pool } from "pg";
import enviorment from "../constants"

const pool = new Pool({
  user: enviorment.DB_USER,
  host: enviorment.DB_HOST,
  database: enviorment.DB_NAME,
  password: enviorment.DB_PASS,
  port:enviorment.SERVER_PORT,
});

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};
