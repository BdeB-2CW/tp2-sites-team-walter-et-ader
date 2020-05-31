function setCookie(membre_id) {
    var d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie =  cvalue + ";" + expires + ";path=/";
}

function getCookie(membre_id) {
    var nom = membre_id + "=";
    var ca = document.cookie.split(';');
    return ca[0];
}

function checkCookie() {
    var membre_cooki = getCookie("membre_id");
    const URL =
        "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/membre/"
    fetch(URL)
        .then((resp) => resp.json())
        .then(function (data) {
            let membre = data.items; //.results;
            return membre.map(function (membre) {
                if (membre_cooki != membre.membre_id) {
                    alert("Veuillez vous enregistrer avant de continuer.");
                    window.location.href = "../../tp2/profil.html";
                }
            });
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });


}