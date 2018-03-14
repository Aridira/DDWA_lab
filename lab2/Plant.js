"use strict"

class Plant{
  constructor(description="green", name="kyst"){
      this.Name = name;
      this.Description = description;
      this.type;
      this.color;
      this.region;
      this.obl;
  }
  get Name(){
      return this.name;
  }
  set Name(n){
      this.name = n;
  }
  get Desc(){
      return this.Description;
  }
  set Desc(d){
      this.Description = d;
  }
   get Type(){
      return this.type;
  }
  set Type(t){
     this.type = t;
  }
   get Color(){
      return this.color;
  }
  set Color(cv){
    debugger;
     this.color = cv;
  }
  get Region(){
    return this.region;
}
set Region(rg){
   this.region = rg;
}
get Obl(){
    return this.obl;
}
set Obl(o){
  debugger;
   this.obl = o;
}

}
