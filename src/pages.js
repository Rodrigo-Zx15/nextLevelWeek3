
const Database = require("./database/db");
const salvarOrfanato = require("./database/saveOrphanage");
module.exports = {
    index(request, response){
        //const city = request.query.city;
        return response.render('index')
    },
    async orphanage(request, response){
        const id = request.query.id;
        try{
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id ="${id}"`);
            const orphanage = results[0];
            orphanage.imgs = orphanage.imgs.split(",");
            orphanage.firstImage = orphanage.imgs[0];
            orphanage.abreFds == false
            if(orphanage.abreFds == "1"){
                orphanage.abreFds == true;
            }
            return response.render('orphanage', {orphanage});
        }catch(error){
            console.log(error);
            return response.send('alerta de macaco');
        }
    },
    async orphanages(request, response){
        //botar pelo banco
        try{
            const db = await Database;
            const orphanages = await db.all('SELECT * FROM orphanages');
            return response.render('orphanages', {orphanages});
        }catch(error){
            console.log(error);
            return response.send('alerta de macaco');
        }
    },
    createOrphanage(request, response){
        return response.render('create-orphanage')
    }, 

    async saveOrphanage(request, response){
        const fields = request.body;
        //ver se tudo está preenchido
        // return console.log(":D");
        if(Object.values(fields).includes('')){
            return response.send('Todos os campos devem ser preenchidos')
        }
        //salvar um orfanato
        try{ 
                const db = await Database
                await salvarOrfanato(db,{
                lat:fields.latitude,
                longitude:fields.longitude,
                name:fields.name,
                sobre: fields.about,
                whatsapp:fields.wpp,
                imgs: fields.imgs.toString(),
                instrucoes:fields.instructions,
                horarios: fields.opening_hours,
                abreFds:fields.abreFds
            });
            return response.redirect('/orphanages')
        }catch(error){
            console.log(error);
            return response.send('Erro de macaco!')
        }
        
    }
}