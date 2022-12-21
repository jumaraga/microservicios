import express,{Express} from "express";
import dotenv from 'dotenv'
dotenv.config()
import { router as auth } from "./components/auth/network";
import {router as user}  from "./components/user/network";
import envModel  from "../config";
import { json } from "express";
import morgan from "morgan";
import { connectDB } from "../store/postgreSQL";
import { errors } from "../network/error";

const app = express();
app.use(json());
app.use(morgan("dev"));
connectDB();

// ROUTER
app.use("/api/user", user);
app.use('/api/auth',auth);

app.use(errors)

app.listen(envModel.api.port, () => {
  console.log("all good");
});
