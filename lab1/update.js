"use strict"

 var nam = document.getElementById("n");
  var des = document.getElementById("d");
  var typ = document.getElementById("t");
  var cvet = document.getElementById("hy");
  var mesto = document.getElementById("m");
  var obl = document.getElementById("o");
  var vozr = document.getElementById("v");
  var otkr = document.getElementById("ot");
  var vis = document.getElementById("vis");
  var tol = document.getElementById("tol");
  var id = getParam("id");
var selectedValue = document.getElementById("selectBox");

function Save(type){
  var plant = PlantFromForm(type);
  if(id!=null) Put(id,plant);
  else Post(plant);
}

function PlantFromForm(type){
  if(type == '0'){
      var plant = new Paporotnik(vozr.value, otkr.value);

  }
  else{
      var plant = new El(vis.value, tol.value);
  }
  plant.setName(nam.value);
  plant.setDesc(des.value);
  plant.setType(typ.value);
  debugger;
  plant.setCvet( cvet[cvet.selectedIndex].text);
  plant.setRegion(mesto.value);
  plant.setObl(obl.value);
  return plant;
}

function FormFromClass(plant, type){
  if(type == '0'){
      vozr.value = plant.getVozrast();
      otkr.value = plant.getOtkrivatel();
  }
  else{
      vis.value = plant.getVisota();
      tol.value = plant.getTolschina();
  }

  selectedValue.selectedIndex = type;
  nam.value = plant.getName();
  des.value = plant.getDesc();
  typ.value = plant.getType();
  setSelectValue(plant.getColor());
  mesto.value = plant.getReg();
  obl.value = plant.getObl();
}

function setSelectValue(name) {
   for(let i = 0; i < cvet.length; i++) {
    debugger;
      if(cvet[i].text == name) {
          cvet.selectedIndex = i
          break;
    }}
}

function getParam(name) {
  var param = location.search.split(name + '=')[1];
  return param !== undefined ? param.split('&')[0] : null;
}

function changeType() {
  var id = selectedValue.options[selectedValue.selectedIndex].value;
  if(id == "0"){
  document.getElementById("vC").hidden=false
  document.getElementById("oC").hidden=false
  document.getElementById("visC").hidden=true
  document.getElementById("tC").hidden=true
}
  else{
    document.getElementById("vC").hidden=true
    document.getElementById("oC").hidden=true
    document.getElementById("visC").hidden=false
    document.getElementById("tC").hidden=false
  }
}

function GetPlant(){
  if(id!=null){
    var func = function() {
        if (this.readyState == 4 && this.status == 200) {
          var obj = JSON.parse(this.responseText);
          if(obj["visota"]==undefined){
               var plant = new Paporotnik();
                plant.jsonToObject(obj);
                FormFromClass(plant,0);
                changeType();
          }
          else{
              var plant = new El();
               plant.jsonToObject(obj);
                FormFromClass(plant,1);
                changeType();
          }
         }};
    Get(id, func);
}}
