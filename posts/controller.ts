import * as store from '../store/postgreSQL'
const TABLE = 'post';

function controller(injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    async function list() {
        // return store.list(TABLA);
        const response =await store.dataSource.getRepository(TABLE).find();
        console.log(response)
        return response
    }

    return {
        list,
    };
}
export default controller(store);