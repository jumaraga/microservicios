import { dataSource } from "../../../store/postgreSQL";
import { hash } from 'bcrypt'
const TABLA = 'users';
module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!injectedStore) store = require('../../../store/dummy');

    async function list() {
        return await store.list(TABLA);
    }

    async function remove(id) {
        return await store.removedById(id, TABLA);
    }

    async function get(id) {
        return await store.findById(id, TABLA);
    }

    async function upsert(body: { username, firstname, addres, lastname, password }) {
        try {
            const { password, ...userInfo } = body;
            const usersRepo = dataSource.getRepository('users');
            const user = await usersRepo.findOne({ where: {username: userInfo.username} });
            const newUser = await usersRepo.save(userInfo);
            if (user) return
            const authRepo = dataSource.getRepository('auth');
            const resp = await authRepo.save({ password: await hash(password, 10), userId: newUser.id });

        } catch (e) {
            console.log(e)
        }
    }

    async function follow(userId, followedUser,) {
        store.upsert({
            user_from: userId,
            user_to: followedUser
        });
    }

    return {
        list,
        upsert,
        remove,
        get,
        follow
    }
};
