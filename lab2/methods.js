"use strict"

const url = "http://localhost:3000/posts/";
function Get(id, func){
  fetch(url + id)
    .then(function(response) { return response.json(); })
    .then(func);
}

function GetAll(func){
  fetch(url)
    .then(function(response) { return response.json(); })
    .then(func);
}

function Delete(id, func){
  if(confirm("Delete this card?")){
    let options = {method:'Delete'};
    fetch(url + id, options).then(func);
  }
}

function Post(data){
  let options = {
    method:'Post',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(data)
  };
  fetch(url, options);
  alert("Saved");
}

function Put(id, data){
  let options = {
    method:'Put',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(data)
  };
  fetch(url + id, options);
  alert("Saved");
}

