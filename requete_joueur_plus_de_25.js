db.joueur.find( {
   $and: [
       {date_de_naissance: { $gt: new ISODate('1996-01-01') }},
       {poste: 'Soldat'}
   ]
} ).pretty()