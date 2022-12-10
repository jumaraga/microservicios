import bcrypt from 'bcrypt'
module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }
    async function login(username, passsword) {
        const data = await store.query(TABLA,{username:username});

        const isEqual= await bcrypt.compare(passsword, data.passsword);
        if(isEqual) return 
        throw new Error('Invalid Information')
    }
    return {
        login,
    }
} 