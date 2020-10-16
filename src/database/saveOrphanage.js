
function saveOrphanage(db, orphanage){
    return db.run(`
    INSERT INTO orphanages (
        lat, 
        longitude, 
        name,
        sobre,
        whatsapp, 
        imgs,  
        instrucoes, 
        horarios,
        abreFds 
    ) VALUES(
        '${orphanage.lat}',
        '${orphanage.longitude}',
        '${orphanage.name}',
        '${orphanage.sobre}',
        '${orphanage.whatsapp}',
        '${orphanage.imgs}',
        '${orphanage.instrucoes}',
        '${orphanage.horarios}',
        '${orphanage.abreFds}'
    );
    `);
}
module.exports = saveOrphanage;