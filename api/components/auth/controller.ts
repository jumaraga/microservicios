import bcrypt, { hash } from 'bcrypt'
const TABLA ='auth'
export default function (injectedStore:any) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }
    async function login(username, passsword) {
        const data = await store.query(TABLA, { username: username });

        const isEqual = await bcrypt.compare(passsword, data.passsword);
        if (isEqual) return
        throw new Error('Invalid Information')
    }
    async function upsert(data) {
        const authData: { id, username?, password?} = {
            id: data.id
        }
        if (data.username) {
            authData.username = data.username;
        }
        if (data.passsword) {
            authData.password = hash(data.passsword, 10);
        }
        return store.upsert(TABLA,authData);
    }
    return {
        login,
        upsert
    }
} 