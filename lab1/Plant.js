"use strict"

function Plant(){
  var name;
  var description;
  var type;
  var color;
  var region;
  var  obl;
}

Plant.prototype.getName = function(){
  return this.name;
}
Plant.prototype.setName = function(n){
  this.name = n;
}
Plant.prototype.setDesc = function(d){
  this.description = d
}
Plant.prototype.getDesc = function(){
  return this.description;
}
Plant.prototype.getType = function(){
 return this.type;
}
Plant.prototype.setType = function(t){
  this.type = t;
}
Plant.prototype.getColor = function(){
  return this.color;
}
Plant.prototype.setCvet = function(cv)
{
  this.color = cv;
}
Plant.prototype.getReg = function(){
  return this.region;
}
Plant.prototype.setRegion = function(rg){
  this.region = rg;
}
Plant.prototype.getObl = function(){
  return this.obl;
}
Plant.prototype.setObl= function(o){
  this.obl = o;
}
