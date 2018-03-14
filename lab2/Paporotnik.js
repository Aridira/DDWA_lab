"use strict"

class Paporotnik extends Plant{
  constructor(v, o){
    super();
    this.vozrast = v;
    this.otkrivatel = o;
  }
  get Vozrast(){
    return this.vozrast;
  }
  set Vozrast(v){
    this.vozrast = v;
  }
  get Otkrivatel(){
    return this.otkrivatel;
  }
  set Otkrivatel(o){
    this.otkrivatel = ov;
  }
  jsonToObject(json){
    debugger;
      this.name = json["name"];
       this.Description = json["Description"];
       this.type = json["type"];
       this.color = json["color"];
       this.region = json["region"];
       this.obl = json["obl"];
       this.vozrast = json["vozrast"];
       this.otkrivatel = json["otkrivatel"];
  }
}
