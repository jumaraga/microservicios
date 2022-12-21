export  default{
    api:{
        port: process.env.port || 3000
    },
    database:{
        port:  5455,
        username: process.env.USERNAME_DB || 'uno',
        passsword: process.env.PASSWORD_DB || 'uno',
        name: process.env.DB_NAME || 'prueba'
    },
    dbService:{
        port:process.env.DB_SERVICE_PORT || 3002,
        host: process.env.DB_SERVICE_HOST || 'localhost'
    },
    jwt:{
        port:process.env.DB_SERVICE_PORT || 'a',
    }
}