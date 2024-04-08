// const { Client } = require("pg");

// require("dotenv").config();
import { Client } from "pg";
import * as dotenv from 'dotenv';
import environment from "../constants";
dotenv.config()

export const dbConnect = async() => {
  const client = new Client({
    host: environment.DB_HOST,
    port: environment.DB_PORT,
    user: environment.DB_USER,
    password: environment.DB_PASS,
    database: environment.DB_NAME,
    ssl: false,
  });
  await client.connect();
  const res = await client.query("SELECT $1::text as connected", [
    "Connection to postgres successful!",
  ]);
  console.log(res.rows[0].connected);
  await client.end();
}

export default dbConnect;