"use strict"

let nam = document.getElementById("n");
let des = document.getElementById("d");
  let typ = document.getElementById("t");
  let cvet = document.getElementById("hy");
  let mesto = document.getElementById("m");
  let obl = document.getElementById("o");
  let vozr = document.getElementById("v");
  let otkr = document.getElementById("ot");
  let vis = document.getElementById("vis");
  let tol = document.getElementById("tol");
  let id = getParam("id");
  let selectedValue = document.getElementById("selectBox");
  let plant;

function Save(type){
  plant = PlantFromForm(  type);
  if(id!=null) Put(id,plant);
  else Post(plant);
}

function PlantFromForm(type){
  let newPlant;
  if(type == '0'){
    newPlant = new Paporotnik(vozr.value, otkr.value);
  }
  else{
    newPlant = new El(vis.value, tol.value);
  }
  newPlant.Name = nam.value;
  newPlant.Desc = des.value;
  newPlant.Type = typ.value;
  var t = cvet.selectedOptions[0]
  newPlant.Color = t.text
  newPlant.Region = mesto.value;
  newPlant.Obl = obl.value;
  return newPlant;
}

function FormFromClass(plant, type){
  if(type == '0'){

    vozr.value = plant.Vozrast;
    otkr.value = plant.Otkrivatel;
  }
  else{
    vis.value = plant.Visota;
    tol.value = plant.Tolschina;
  }
  selectedValue.selectedIndex = type;
  nam.value = plant.Name;
  des.value = plant.Desc;
  typ.value = plant.Type;
  setSelectValue(plant.Color);
  mesto.value = plant.Region;
  obl.value = plant.Obl;
  debugger;
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
  let param = location.search.split(name + '=')[1];
  return param !== undefined ? param.split('&')[0] : null;
}

function changeType() {
  let id = selectedValue.options[selectBox.selectedIndex].value;
  if(id == "0"){
  document.getElementById("vC").style.display='block';
  document.getElementById("oC").style.display='block';
  document.getElementById("visC").style.display='none';
  document.getElementById("tC").style.display='none';
}
  else{
  document.getElementById("vC").style.display='none';
  document.getElementById("oC").style.display='none';
  document.getElementById("visC").style.display='block';
  document.getElementById("tC").style.display='block';
  }
}

function GetPlant(){
  if(id!=null){
    let func = function(obj) {
          if(obj["visota"]==undefined){
                plant  = new Paporotnik();
                plant.jsonToObject(obj);
                FormFromClass(plant,0);
                changeType();
          }
          else{
               plant = new El();
               plant.jsonToObject(obj);
                FormFromClass(plant,1);
                changeType();
          }
         };
    Get(id, func);
}}
