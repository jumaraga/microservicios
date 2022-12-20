import {check, sign } from '../../../auth'

export function checkAuth(action) {

    function guard(req,res,next){
        switch (action) {
            case 'update':
                const owner =req.body.id;
                check.own(req,owner)    
                break;
            default:
                next()
        }
    }   
    return guard
}