function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const image = document.getElementById("image");
//const URL = "http://localhost:8080/ords/hr2/employees"; si la bd est locale
const URL =
"https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/pizza/"
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let pizza = data.items; //.results;
    return pizza.map(function (pizza) {
      if(pizza.pizza_id === 685){     
                                    let img = createNode("img");
                                    img.src = `${pizza.source_image}`;
                                    append(image, img);
                                  }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
