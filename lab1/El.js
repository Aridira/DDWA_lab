"use strict"

function El(v,t){
  Plant.call(this);
  this.visota = v;
  this.tolschina =t;;
}
El.prototype = Object.create(Plant.prototype);

El.prototype.jsonToObject = function(json){
       var obj = json;
       this.name = obj["name"];
       this.description = obj["description"];
       this.type = obj["type"];
       this.color= obj["color"];
       this.region = obj["region"];
       this.obl = obj["obl"];
       this.visota = obj["visota"];
       this.tolschina = obj["tolschina"];
}

El.prototype.getVisota = function(){
  return this.visota;
}

El.prototype.setVisota = function(v){
  this.visota = v;
}
El.prototype.getTolschina = function(){
  return this.tolschina;
}
El.prototype.setTolschina = function(t){
  this.tolschina = t;
}
