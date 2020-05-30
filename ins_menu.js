function ins_comm() {
  /**
   * Insertion commande
   */
  let comm_rec = {
  };
  let verif=false;
  { //Boucle while
  comm_rec.commande_id =Math.floor((Math.random() * 9998) + 1);    
  let URL =
  "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/commande";
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let commande = data.items; //.results;
    return commande.map(function (commande) {
      if(commande.commande_id==comm_rec.commande_id){
        verif=true;
      }else{
        verif=false
      }
  });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
}while(verif);//Fin while

  comm_rec.membre_membre_id = document.getElementById("membre_membre_id").value;

   URL =
    "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/commande";

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comm_rec),
  })
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    })
  


/**
 * Insertion configuration
 */
  let config_rec = {
  };
  { //Boucle while
  config_rec.config_id =Math.floor((Math.random() * 9998) + 1);    
   URL =
  "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/configur";
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let configuration_garniture = data.items; //.results;
    return configuration_garniture.map(function (configuration_garniture) {
      if(configuration_garniture.commande_id==config_rec.commande_id){
        verif=true;
      }else{
        verif=false
      }
  });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
}while(verif);//Fin while

  config_rec.pizza_pizza_id = document.getElementById("pizza");
  config_rec.commande_commande_id = comm_rec.commande_id;
  config_rec.emplacement=document.getElementById("emplacement");
  config_rec.quantité=document.getElementById("quantité");
  config_rec.garniture_garniture_id=document.getElementById("garniture_garniture_id");

   URL =
    "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/config";

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(config_rec),
  })
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
}
