const jwt = require('jsonwebtoken');
const config = require('../config');
const { error } = require('../network');

function sign(data) {
    return jwt.sign(data,)
}

function verify(token) {
    return jwt.verify(token)
}

const check = {
    own: function (req, owner) {
        const decoded = decodeHeader(req)
        if (decoded.id !== owner) throw error('operation not allow')
    }
}

function getToken(auth) {
    if (!auth) throw error("Doesn't have  token");
    if (auth.indexOf('Bearer ') === -1) throw error('Invalid Format');

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