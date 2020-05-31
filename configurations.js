/**
 * Script d'insertion des données de configuration des pizzas
 *  créé par Walter
 * 
 */
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const nomPizza = document.getElementById("nom");
const imgPizza = document.getElementById("imagePizza");
let config_id1;
let config_id2;
conf = document.getElementById("conf1");
//Accède a la vue de la BD contenant les tables pizza, configuration et garniture
const URL =
  "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/piz_vue/"
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let piz_vue = data.items; //Résultats
    config_id1 = piz_vue.config_id;
    config_id2 = config_id1 + 1;//Prend 2 id
    return piz_vue.map(function (pizza) {

      let noms = ["Garnitures: ", "Emplacement: ", "Quantité :"]//Structure d'affichage
      let elements = [pizza.g_nom, pizza.emplacement, pizza.quantité]//Éléments a afficher
      if (pizza.pizza_id === 685) {//Test avec un seul id de pizza
        imgPizza.src = `${pizza.source_image}`;
        nomPizza.innerHTML = `${pizza.p_nom}`;
        for (var i = 0; i < noms.length; i++) {
          li = createNode("li");
          h2 = createNode("h2");

          h2.innerHTML = noms[i] + `${elements[i]}`//Répartit l'affichage avec boucle for

          append(li, h2);
          append(conf, li);
        }

        conf = document.getElementById("conf2");
      }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });

config_id1 = 1;
config_id2 = 2;



function genericName(number) {
  alert('Bon');


  let configID;
  let commande_rec = {};

alert(config_id1);
if(boolean){//Détermine le config_id a donner a l'entrée de commande
  configID = config_id1;
} else {
  configID = config_id2;
}
let commande_rec = {};//Créé une entrée commande

  commande_rec.membre_membre_id = 420;
  commande_rec.commande_id = 20;
  commande_rec.configuration_config_id = number;



  const URL2 =
    "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/commande/"

  fetch(URL2, {//Envoi la commande ver la table commande
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commande_rec),
  })
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
}
