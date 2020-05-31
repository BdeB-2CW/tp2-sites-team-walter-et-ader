function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  
  const ul = document.getElementById("information");
  const id = document.getElementById("commande_id");
  
  const URL =
  "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/piz_vue/"
  fetch(URL)
    .then((resp) => resp.json())
    .then(function (data) {
      let vue = data.items; //.results;
      return vue.map(function (vue) {
        let nom_elements = ["Pizza: ", "Garniture: ", "Configuration: "];
        let elements = 
      [vue.pizza_id, vue.g_nom, vue.emplacement, vue.quantité];
  
        if(vue.membre_id === 420){
            numero = createNode("span");
          const URL =
          "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/commande/"
          fetch(URL)
            .then((resp) => resp.json())
            .then(function (data) {
              let commande = data.items; //.results;
              return commande.map(function (commande) {
                numero.innerHTML = commande.commande_id;
                append(id, numero);
              });
            })
            .catch(function (error) {
              console.log(JSON.stringify(error));
            });
          
  
          for(var i = 1; i < elements.length - 1; i++){
            let elementCourant = elements[i];
            let li = createNode("li"),
              p = createNode("p");
              img = createNode("img");
              
              img.src="images/line2.png";
              img.style="width: 400%; height: 1px";
              img.alt="Ligne Horizonatle";
              p.style="font-size: 30px; margin-bottom: 1px";
            p.innerHTML = nom_elements[i - 1] + `${elementCourant}`;
            
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