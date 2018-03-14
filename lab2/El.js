"use strict"

class El extends Plant{
  constructor(v, t){
    super();
    this.visota = v;
    this.tolschina =t;;
  }
  get Visota(){
    return this.visota;
  }
  set Visota(v){
    this.visota = v;
  }
  get Tolschina(){
    return this.tolschina;
  }
  set Tolschina(t){
    this.tolschina = t;
  }
  jsonToObject(json){
        this.name = json["name"];
        this.description = json["description"];
        this.type = json["type"];
        this.color = json["color"];
        this.region = json["region"];
        this.obl = json["obl"];
        this.visota = json["visota"];
        this.tolschina = json["tolschina"];
  }
}
