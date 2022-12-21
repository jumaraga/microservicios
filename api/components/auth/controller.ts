import bcrypt, { hash } from 'bcrypt'
import { sign } from '../../../auth';
import { dataSource } from '../../../store/postgreSQL';
const TABLA = 'auth'
export default function (injectedStore: any) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }
    async function login(username: string, passsword: string) {
        try {
            const data: any = (await dataSource.getRepository('users').query(`select u.*,a.password from users u left join auth a on a."userId" = u.id where username = '${username}' `))[0]

            const isEqual = await bcrypt.compare(passsword, data.password);
            if (isEqual) return sign(data)
        } catch (e) {
            console.log(e)
        }
        throw new Error('Invalid Information')
    }
    async function upsert(data) {
        try {
            const authData: { id, username?, password?} = {
                id: data.id
            }
            if (data.username) {
                authData.username = data.username;
            }
            if (data.passsword) {
                authData.password = hash(data.passsword, 10);
            }
            const authRecord = await store.query(TABLA, authData);

        } catch (e) {
            console.log(e)
        }
    }
    return {
        login,
        upsert
    }
} 