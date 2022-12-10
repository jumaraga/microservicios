import express from "express";
// auth =require('')
import {router as user}  from "./components/user/network";
import envModel  from "../config";
import { json } from "express";
import morgan from "morgan";
import { connectDB } from "../store/postgreSQL";

const app = express();
app.use(json());
app.use(morgan("dev"));
connectDB();

// ROUTER
app.use("/api/user", user);
// app.use('api/auth',auth)

app.listen(envModel.api.port, () => {
  console.log("all good");
});
