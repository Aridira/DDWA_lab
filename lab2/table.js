"use strict"

function getPlants(){
    let func = function(response) {
              addTable(response);
            };
    GetAll(func);
}

function showPlants(plants){
    debugger;
    let array = [...plants];
    addTable(plants);
}

function DeletePlants(id){
    let func = function() {
            let myTableDiv = document.getElementById("content");
                myTableDiv.innerHTML = "";
                getPlants();
            };
    Delete(id, func);
}

 function addTable(stock) {
    debugger;
    let myTableDiv = document.getElementById("content");
    for (let i = 0; i < stock.length; i++) {
        let tr = document.createElement('TR');
        let lastKey;
        for (let key in stock[i]) {
            let td = document.createElement('TD')
            td.width = "120";
            td.appendChild(document.createTextNode(stock[i][key]));
            tr.appendChild(td);
            lastKey = key;
        }
        let div = document.createElement('div');
        let link = document.createElement("a");
        let linkText = document.createTextNode("Edit ");
        let link2 = document.createElement("a");
        let link3 = document.createElement("a");
        let linkText2 = document.createTextNode(" Delete");
        let linkText3 = document.createTextNode("Информация  ");
        link.title = "Edit";
        link.href = `2.html?id=${stock[i][lastKey]}`;
        link2.href = `javascript:DeletePlants(${stock[i][lastKey]});`;
        link2.title = "Delete";
        link3.href =  `3.html?id=${stock[i][lastKey]}`;
        link3.title = "Информация";

        link.appendChild(linkText);
        link2.appendChild(linkText2);
        link3.appendChild(linkText3);
        div.appendChild(link);
        div.appendChild(link2);
        div.appendChild(link3);
        tr.appendChild(div);
        myTableDiv.appendChild(tr);
    }
}
