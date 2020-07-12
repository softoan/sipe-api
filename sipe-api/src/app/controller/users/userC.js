const oracledb = require('oracledb');  
const dbConfig = require('../configDB/configAttrib');

class User_creation{
 data;
constructor(){this.insertUser();}

async insertUser(){
    let connection; 
    let sql_show;
    
    try {
  
      let sql, binds, options, result;
  
      connection = await oracledb.getConnection(dbConfig);

      sql_show = 'SELECT * FROM usuarios';

      binds = {};
  
      // For a complete list of options see the documentation.
      options = {
        outFormat: oracledb.OUT_FORMAT_OBJECT,   // query result format
        // extendedMetaData: true,               // get extra metadata
        // prefetchRows:     100,                // internal buffer allocation size for tuning
        // fetchArraySize:   100                 // internal buffer allocation size for tuning
      };

      result = await connection.execute(sql_show, binds, options);

      console.log("Metadata: ");
      console.dir(result.metaData, { depth: null });
      console.log("Query results: ");
      console.dir(result.rows, { depth: null });
     
       this.data=result.rows, { depth: null };

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
 //Fin
}

getData(){
 return this.data;
}

}

 
module.exports=User_creation;