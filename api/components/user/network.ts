import express from 'express';
const router = express.Router();
import { success, error } from '../../../network';
import Controller from './index';
import { checkAuth } from './guard'

router.get('/', async function (req, res, next) {
    try {
        const list = await Controller.list();
        success(req, res, "that's it ", 200, list);
    } catch (error) {
        next(error);
    }
})

router.delete('/:id', async function (req, res, next) {
    try {
        const { id } = req.params;
        await Controller.remove(id);
        success(req, res, 'Remove successfully', 200, '');
    } catch (error) {
        next(error);
    }
})

router.post('/', async function (req, res, next) {
    try {
        const body = req.body;
        const answer = await Controller.upsert(body);
        success(req, res, 'Adding correctly', 200, answer)
    } catch (error) {
        next(error)
    }
})

router.put('/', checkAuth('update'), async function (req, res, next) {
    try {
        const body = req.body;
        const updated = await Controller.upsert(body);
        success(req, res, 'Update complete', 200, updated);
    } catch (error) {
        next(error)
    }
})
router.get('/follow/:id', async function (req, res, next) {
    try {
        const {id} = req.params
        const {to} = req.body
        const resp =await Controller.follow(id,to)
        success(req, res, 'Following new user ', 200,resp);
    } catch (error) {
        next(error)
    }
})

export { router }