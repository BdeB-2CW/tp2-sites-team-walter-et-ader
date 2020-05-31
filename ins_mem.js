function ins_membre() {
  let membr_rec = {
    points: 0,
  };
  membr_rec.membre_id = Math.floor((Math.random() * 9998) + 1);
  membr_rec.nom = document.getElementById("nom").value;
  membr_rec.prenom = document.getElementById("prenom").value;
  membr_rec.ville = document.getElementById("ville").value;
  membr_rec.email = document.getElementById("email").value;
  membr_rec.mot_de_passe = document.getElementById("mdp").value;
  setCookie(membr_rec.email, membr_rec.membre_id);
  //Afficher un message d'alerte si une des cases sont vides, sinon, envoie les données vers la BD
  if (membr_rec.nom === "" || membr_rec.prenom === "" || membr_rec.Ville === "" || membr_rec.email === "" || membr_rec.mot_de_passe === "") {
    alert("Veuillez bien remplir les cases!!");
  } else {

    const URL =
      "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/membre/"

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(membr_rec),
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
  }
} 