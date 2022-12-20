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

    async function upsert(body) {
    
        return await store.upsert(TABLA, body);
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
