import { Request, Response, Router } from "express";
import { dataSource } from "../store/postgreSQL";
import { success } from "../network";

export const router = Router()

router.get('/:table', list)
router.get('/:table/:id', get)
router.put('/:table', upsert)
router.post('/:table', insert)

async function list(req: Request, res, next) {
    try {
        const { table } = req.params
        const repo = dataSource.getRepository(`users`)
        const response = await repo.find();
        success(req,res,'this are the results',200,response)
    } catch (e) {
        next(e)
    }
}

async function upsert(req:Request, res:Response, next) {
    const { table } = req.params;
    const repo = dataSource.getRepository('users');
    // return await repo.upsert(req.body); 
}
async function get(req:Request, res:Response, next) {

    const { table, id } = req.params;
    const repo = dataSource.getRepository(table);
    const foundRecord = await repo.findOne({where:{id}})
    success(req,res,'user found',200,foundRecord)
}
async function insert(req:Request, res:Response, next) {

    const { table } = req.params;
    const repo = dataSource.getRepository(table);
    const newItem = await repo.insert(req.body);
    success(req,res,'new insert success',200,newItem)
}