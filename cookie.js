/**
 * Script des cookies
 *
 */

function setCookie(email, membre_id,nom) {//Génère cookie
    document.cookie = membre_id + ";" + email + ";"+ nom;
}

function getCookie(index) {//Retourn l'id du membre préservé dans le cookie 0:id ; 1:email ; 2:detail
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedcookie.split(';');
    return ca[index];
}

function checkCookie() {//Verifie si l'id existe dans la BD
    var membre_email = getCookie(1);
    const URL =
        "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/membre/"
    fetch(URL)
        .then((resp) => resp.json())
        .then(function (data) {
            let membre = data.items; //.results;
            return membre.map(function (membre) {
                if (membre_email != membre.email) {
                    alert("Veuillez vous enregistrer avant de continuer.");
                    window.location.href = "./login.html";
                } else {
                    return membre.membre_id;
                }
            });
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}
;
