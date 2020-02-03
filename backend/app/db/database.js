const mariaDb = require('mariadb');
const config = require('../config/configDb');

const executeQuery = async (dbQuery) => {
    let conn;
    try{
        const connection = await mariaDb.createConnection(config);
        const dbResponse = await connection.query(dbQuery).then(res => res);
        await connection.end();
        return dbResponse;
        
    } catch(err){
        return err;
    } finally {
        if(conn) conn.release();
    }
};

module.exports = executeQuery;