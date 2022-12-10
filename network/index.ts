export const success = function(req,res,message,status,result){
    res.status(status).send({
        error:false,
        status:status,
        body:message,
        result:result
    })
}

export const error = function(req,res,message,status){
    let statusCode = status || 500;

    res.status(statusCode).send({
        error:true,
        status,
    })
}