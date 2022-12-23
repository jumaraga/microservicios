import { NextFunction, Request, Response, Router, response } from "express";
import { success } from "../network";
import store from '../store/redis'
export const router = Router();

router.get('/:table',list);
router.get('/:table/:id',get)
router.put('/:table',upsert)
async function get(req:Request,res:Response,next:NextFunction){
    const data = await store.get(req.params.table,req.params.id)
    success(req,res,'success',200,data)
}
async function list(req:Request,res:Response,next:NextFunction){
    const datos = await store.list(req.params.table)
    success(req,res,'results from cache',200,datos)
}
async function upsert(req:Request,res:Response,next:NextFunction){
    const datos = await store.upsert(req.params.table,req.body)
    success(req,res,'information updated',200,datos)
}