db.match.insert({
    domicile:'Team Vitality',
    exterieur:'Natus Vincere',
    competition:'Blast Premier',
    score_domicile:2,
    score_ext:1,
    joueurs_domicile: {
          pseudo: db.equipe.findOne( { "nom": "Team Vitality" } ).effectif,
          note: [10,8,9,7,8]
        },
    joueurs_ext:{
          pseudo: db.equipe.findOne( { "nom": "Natus Vincere" } ).effectif,
          note: [9,7,7,6,7]
        }
});