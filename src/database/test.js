const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-15.7951568",
    lng: "-47.88394991",
    name: "Lar das Crianças",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "3109403545",
    images: [
      "https://blog.conexasaude.com.br/wp-content/uploads/2019/05/thinkstockphotos-944585218.jpg",

      "https://static.wixstatic.com/media/1553af_5d3ec84bd8e24d74ba65577c071e7136~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90/1553af_5d3ec84bd8e24d74ba65577c071e7136~mv2.jpg"
    ].toString(),
    instruction: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 8h até 18h",
    open_on_weekends: "1"
  })

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  // consultar somente um orfanato, pelo id
  const orphanage = await db.all('SELECTED * FROM orphanages WHERE id = "2"')
  console.log(orphanage)

  // deletar um dado da tabela
  // console.log(await db.run('DELETE FROM orphanages WHERE id = "3"'))
})