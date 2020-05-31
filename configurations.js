function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const nomPizza = document.getElementById("nom");
const imgPizza = document.getElementById("imagePizza");
conf = document.getElementById("conf1");
//const URL = "http://localhost:8080/ords/hr2/employees"; si la bd est locale
const URL =
"https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/piz_vue/"
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let piz_vue = data.items; //.results;
    
    return piz_vue.map(function (pizza) {
      let noms = ["Garnitures: ", "Emplacement: ", "Quantité :" ]
      let elements = [pizza.g_nom, pizza.emplacement, pizza.quantité]
      if(pizza.pizza_id === 685){   

                                    imgPizza.src = `${pizza.source_image}`;
                                    nomPizza.innerHTML = `${pizza.p_nom}`;
                                    for(var i = 0; i < noms.length; i++){
                                      li = createNode("li");
                                      h2 = createNode("h2");
                                      
                                      h2.innerHTML = noms[i] + `${elements[i]}`
                                      
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
