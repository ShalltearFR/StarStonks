const Trip = require("../models/Trip.model");
launchMaintenance()

setInterval(()=>{
    launchMaintenance()
},3600000)

function launchMaintenance(){
    Trip.find() // Recherche tous les voyages
    .then(tripsFromDB => {
        tripsFromDB.forEach(el =>{
            if (el.date.getTime() < Date.now()){
                Trip.findByIdAndRemove(el._id)
                .then(()=>{
                    console.log("Suppression du tripID", el._id)
                })
                .catch(err => console.log("Erreur de suppression:",err))
            }
        })
        console.log("Maintenance Trip terminé avec succès")
    })
    .catch(err => console.log("Erreur Maintenance Trip :",err))
}
//1h  -> 3 600 000
//24h -> 8 640 000