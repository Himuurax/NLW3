const Database = require('./db');
const saveOrphanage = require ('./saveOrphanage')
Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9899898989898",
        images: [
            "https://images.unsplash.com/photo-1597997547878-c01a230efdc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1598137203989-3152bec01cf4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours : "Horário de visistas - 8h até 18h",
        open_on_weekends : "0"
    },)
    
    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    
    // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)
    
    /*
    // deletar dado da tabela
    await db.run("DELETE FROM orphanages WHERE id = '4'")*/
})