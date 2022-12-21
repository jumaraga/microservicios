import express,{ Express } from "express";
import { router } from "./network";
import config from "../config";
import { connectDB } from "../store/postgreSQL";
import morgan from "morgan";
const app = express();

connectDB()

app.use(morgan('dev'))
/* router */
app.use(router);

app.listen(config.dbService.port,()=>{
    console.log(`Running database service`)
})