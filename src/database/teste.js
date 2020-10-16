const Database = require('./db');
const salvarOrfanato = require('./saveOrphanage');

Database.then(async (db) =>{
    //inserir na table
    await salvarOrfanato(db,{
        
        lat:"-28.7108781",
        longitude:"-43.7940031",
        name: "Orfanato 5",
        description: "Lorem ipsum dolor siamet as sakjq moea xek sao qowi",
        whatsapp: "47 2912309",
        images: [
            "https://source.unsplash.com/random?id=1",
            "https://source.unsplash.com/random?id=4"

        ].toString(),
        instructions: "mto teste legal 3: o inimigo agora é outro",
        horarios: "Não há visitas 2 - a realm reborn",
        abreFds:"0"

    });
    //consultar a table
    //const deletar = await db.run('DELETE FROM orphanages WHERE id > 0');
    const selecao = await db.all('SELECT * FROM orphanages');
    console.log(selecao);

})