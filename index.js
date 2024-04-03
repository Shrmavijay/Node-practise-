import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./src/Router/User.router";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected!"));

app.use(express.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
