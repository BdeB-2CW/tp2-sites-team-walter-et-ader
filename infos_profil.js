/**
 * Script affichant les informations du membre
 * 
 */

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const ul = document.getElementById("information");
const pts = document.getElementById("points");

const URL =
  "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/membre/"
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let membres = data.items; //Résultat
    return membres.map(function (membres) {
      let nom_elements = ["Nom: ", "Prénom: ", "Ville: ", "Email: ", "Mot de passe: "];
    
      let elements =
        [membres.membre_id, membres.nom, membres.prenom, membres.ville, membres.email, membres.mot_de_passe, membres.points];

      if (membres.membre_id === Number(readCookie("Membre ID"))) {
        pointage = createNode("span");
        pointage.innerHTML = membres.points;//Retourne le pointage associé a l'id membre
        append(pts, pointage);

        for (var i = 1; i < elements.length - 1; i++) {
          let elementCourant = elements[i];
          let li = createNode("li"),
            p = createNode("p");
          img = createNode("img");

          img.src = "images/line2.png";
          img.style = "width: 400%; height: 1px";
          img.alt = "Ligne Horizonatle";
          p.style = "font-size: 30px; margin-bottom: 1px";
          p.innerHTML = nom_elements[i - 1] + `${elementCourant}`;//Répartit les éléments a afficher

          append(li, p);
          append(li, img);
          append(ul, li);
        }
      }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });

