const ctrl = require('./controller');
const store = require('../../../store/postgreSQL')

export default ctrl(store);