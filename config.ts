export  default{
    api:{
        port: process.env.port || 3000
    },
    posts:{
        host:process.env.POSTS_HOST,
        port:process.env.POSTS_PORT,
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
    },
    redis:{
        port:process.env.REDIS_PORT || '',
        host:process.env.REDIS_HOST ||'',
        password: process.env.REDIS_PASSWORD || ''
    },
    cache:{
        port:process.env.CACHE_PORT
    }
}