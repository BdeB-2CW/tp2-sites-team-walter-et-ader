function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const ul = document.getElementById("information");
//const url = "http://localhost:8080/ords/hr2/employees";
const URL =
"https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/membre/"
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let membres = data.items; //.results;
    let elements = 
    [membres.membre_id, membres.nom, membres.prenom, membres.ville, membres.mot_de_passe, membres.points];
    return membres.map(function (membres) {
      if(membres.membre_id === 420){
        for(var i = 1; i < elements.length; i++){
          let li = createNode("li"),
            span = createNode("span");
            img = createNode("img");
            img.innerHTML = "<img class=\"lingneHor\" src=\"images/line2.png\" alt=\"Line Horizontale\"/>"
          span.innerHTML = `${whos}`;
          
          append(li, span);
          append(li, img);
          append(ul, li);
      }
      }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });

  