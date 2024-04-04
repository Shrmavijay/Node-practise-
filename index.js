import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import UserRouter from "./src/Router/UserRouter.js";
import connectDB from "./src/Config/db.js";

dotenv.config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.json());
app.use("/api", UserRouter);

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
