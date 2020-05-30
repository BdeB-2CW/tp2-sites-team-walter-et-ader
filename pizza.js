function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const piz_ul = document.getElementById("employees");
//const URL = "http://localhost:8080/ords/hr2/employees"; si la bd est locale
const URL =
  "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/wtp2/pizza";
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let pizza = data.items; //.results;
    return pizza.map(function (pizza) {
      if (pizza.prix>0) {
                                    let li = createNode("li"),
                                      span = createNode("span");
                                    span.innerHTML = `${pizza.nom} ${pizza.description}`;
                                    append(li, span);
                                    append(piz_ul, li);
                                  }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
