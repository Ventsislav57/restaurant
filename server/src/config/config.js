const constatns = require('./constants');

module.exports = {
    port: constatns.PORT,
    dbConnection: `${constatns.DB_CONNECTION}/${constatns.DB_NAME}`
}