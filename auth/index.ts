import { json } from 'express';
import  jwt from 'jsonwebtoken';
const config = require('../config');
const { error } = require('../network');
import { err } from '../utils/error';

function sign(data) {
    return jwt.sign(data,process.env.SECRET_JWT)
}

function verify(token:string) {
    const res  = jwt.verify(token,process.env.SECRET_JWT)as jwt.JwtPayload;
    return res
}

const check = {
    own: function (req, owner) {
        const decoded = decodeHeader(req)
        if (decoded.id !== owner) throw err(400,'operation not allow')
    }
}

function getToken(auth) {
    if (!auth) throw error("Doesn't have  token");
    if (auth.indexOf('Bearer ') === -1) throw err(401,'Invalid Format');

    let token = auth.replace('Bearer ', '')
    return token
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);
    req.user = decoded
    return decoded
}

export {
    sign,
    check,
}