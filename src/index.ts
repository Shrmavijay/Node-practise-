import * as express from "express"
import dbConnect from "./config/db";

const app = express();

dbConnect();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
