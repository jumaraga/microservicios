import express,{Express} from "express";
import dotenv from 'dotenv'
dotenv.config()
import envModel  from "../config";
import { json } from "express";
import morgan from "morgan";
import { connectDB } from "../store/postgreSQL";
import { errors } from "../network/error";
import { router } from "./network";

const app = express();
app.use(json());
app.use(morgan("dev"));

// ROUTER
app.use('/',router)
app.use(errors)

app.listen(envModel.cache.port, () => {
  console.log("Cache microservice started on port",envModel.cache.port);
});
