const ctrl = require('./controller');
const store = require('../../../store/postgreSQL')

module.exports = ctrl(store);