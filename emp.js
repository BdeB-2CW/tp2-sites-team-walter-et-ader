function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const emp_ul = document.getElementById("employees");
//const URL = "http://localhost:8080/ords/hr2/employees"; si la bd est locale
const URL =
  "https://dkearjhlg7gwib7-db202005071430.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/garniture";
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let garniture = data.items; //.results;
    return garniture.map(function (garniture) {
      if (garniture.prix>0) {
                                    let li = createNode("li"),
                                      span = createNode("span");
                                    span.innerHTML = `${garniture.nom} ${garniture.prix+",00$"}`;
                                    append(li, span);
                                    append(emp_ul, li);
                                  }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
