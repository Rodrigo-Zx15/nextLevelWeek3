const Database = require('sqlite-async');


function execute(db){
    return db.exec(`
       
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT, 
            longitude TEXT, 
            name TEXT,
            sobre TEXT, 
            whatsapp TEXT, 
            imgs TEXT,  
            instrucoes TEXT, 
            horarios TEXT,
            abreFds TEXT  
        );
    `);
}
module.exports = Database.open(__dirname +'/database.sqlite').then(execute)//.then((db) =>{});
//  DROP TABLE orphanages;