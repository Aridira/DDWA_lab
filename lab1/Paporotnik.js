"use strict"

function Paporotnik(v, o){
   Plant.call(this);
   this.vozrast = v;
   this.otkrivatel = o;
}
Paporotnik.prototype = Object.create(Plant.prototype);

Paporotnik.prototype.jsonToObject = function(json){
       var obj = json;
       this.name = obj["name"];
       this.description = obj["description"];
       this.type = obj["type"];
       this.color= obj["color"];
       this.region = obj["region"];
       this.obl = obj["obl"];
       this.vozrast = obj["vozrast"];
       this.otkrivatel = obj["otkrivatel"];
}
Paporotnik.prototype.setVozrast = function(v){
  this.vozrast = v;
}
Paporotnik.prototype.getVozrast = function(){
  return this.vozrast;
}
Paporotnik.prototype.setOtkrivatel = function(o){
  this.otkrivatel = o;
}
Paporotnik.prototype.getOtkrivatel = function(){
  return this.otkrivatel;
}
