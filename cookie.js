/**
 * Script des cookies
 *
 */
function setCookie(name,value) {//Génère cookie
	document.cookie = name+"="+value+""+"; path=/";
}



function readCookie(name) {//Retourne la valeur du cookie
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

//Verifie si l'id existe dans la BD
var url = window.location.href;
url = url.substring(url.length - 10, url.length);

if(url != "login.html" && readCookie("Membre ID") == null){
    alert("Veuillez vous enregistrer avant de continuer.");
    window.location.href = "./login.html";
  }                
                
