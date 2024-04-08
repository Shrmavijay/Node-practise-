import * as  dotenv from "dotenv";
dotenv.config();

export  interface EnvironmentInterface {
  DB_USER: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_PASS: string;
  DB_PORT: number;
  SERVER_PORT: number;
}

const environment: EnvironmentInterface = {
  DB_USER: process.env.DB_USER || '',
  DB_HOST: process.env.DB_HOST || '',
  DB_NAME: process.env.DB_NAME || '',
  DB_PASS: process.env.DB_PASS || '',
  DB_PORT: parseInt(process.env.DB_PORT || '5432', 10),
  SERVER_PORT: parseInt(process.env.SERVER_PORT || '3000', 10),
};

export default environment;