import jwt from "jsonwebtoken";

async function getToken(authHeader){
    const decodedToken = jwt.decode(authHeader);
    return decodedToken
}

async function verify(){

}
//get authHeader
//get token
//verify token