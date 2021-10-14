db.match.mapReduce( 
   function(){
       let joueur =""
        for (let i = 0; i < this.joueurs_domicile.length; ++i) {
            joueur = this.joueurs_domicile[i];
            emit( joueur.pseudo, joueur.note );
        }
        for (let i = 0; i < this.joueurs_ext.length; ++i) {
            joueur = this.joueurs_ext[i];
            emit( joueur.pseudo, joueur.note );
        }
    },
    function(pseudo, notes){
        let moy = 0;
        if(notes.length <3) {return;}
        for (let i = 0; i < notes.length; ++i) {
            moy += notes[i];
        }
        moy /= notes.length

        return moy;
    },
    {
        out:"MoyenneNotes" 
    } 
            )
    
   db.MoyenneNotes.deleteMany(
       { "value" : null }
   );



   