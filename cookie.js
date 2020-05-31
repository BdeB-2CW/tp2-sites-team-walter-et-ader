function setCookie(email, membre_id) {
    document.cookie = membre_id + ";" + email;
}

function getCookie() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedcookie.split(';');
    return ca[0];
}

function checkCookie() {
    var membre_email = getCookie();
    const URL =
        "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/membre/"
    fetch(URL)
        .then((resp) => resp.json())
        .then(function (data) {
            let membre = data.items; //.results;
            return membre.map(function (membre) {
                if (membre_email != membre.email) {
                    alert("Veuillez vous enregistrer avant de continuer.");
                    window.location.href = "../../tp2/login.html";
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
