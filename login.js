function checkLogin(s_email) {
    var membre_email = s_email;
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