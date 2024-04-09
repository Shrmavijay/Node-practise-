import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import environment from "./constants";
import router from "./routes/UserRouter";
import bodyParser = require("body-parser");

const app = express();

const PORT = environment.SERVER_PORT || 3000;
app.use(bodyParser.json());
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
