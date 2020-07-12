
const oracledb = require('oracledb');
const dbConfig = require('../configDB/configAttrib');

async function run() {
  let connection;

  console.log('Dropping schema objects');

  try {

    connection = await oracledb.getConnection(dbConfig);

    const stmts = [
      `select * from pe_clientes` 
    ];

    for (const s of stmts) {
      try {
        console.log(s);
        await connection.execute(s);
        console.log('Datos de cliente',await connection.execute(s));
      } catch(e) {
        // do nothing
      }
    }

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();