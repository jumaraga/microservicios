import { NextFunction, Request, Response, Router } from "express";
import controller from "./controller";
import { success } from "../network";

export const router = Router();

router.get('/',get);
router.get('/:userId',list)
async function get(req:Request,res:Response,next:NextFunction){
    const data = await controller.list()
    success(req,res,'success',200,data)
}
function list(req:Request,res:Response,next:NextFunction){
    controller.list()
}