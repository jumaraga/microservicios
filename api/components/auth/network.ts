const { Router } = require("express");
const OWN = require('./controller')
import Controller from './controller'
import { success, error } from '../../../network';
import { NextFunction } from 'express';
const router = Router()

router.post('/', upsert)
router.post('/login', login)
const TABLE = ''
function list(req, res, next) {

}
function login(req, res, next) {
    const { username, password } = req.body;
    Controller(TABLE).login(username, password)
        .then(token => success(req, res, 'Login success', 200, token))
        .catch(e => {
            error(e, res, 'login error', 400)
        })
}
function upsert(req: Request, res: Response, next: NextFunction) {
    Controller(TABLE).upsert(req.body)
        .then((response) => success(req, res, 'user register success', 200, response))
        .catch((err) => error(req, res, '', 400))
}
export { router }