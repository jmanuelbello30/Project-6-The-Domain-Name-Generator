'use strict'

// Producto final : pronouns + adjetives + names + dominio random

let pronouns = ['the','our']; 
let adjetives = ['great', 'big' ];
let names = ['jogger','racoon'];
let randomPages = [".cl",".com",".ve",".net"];

// función para encontrar dominio random

function randomNumber(array){
  return Math.floor((Math.random() * (array.length))); 
}

//función para encontrar posibles dominios

function posibilityGenerator(array1,array2,array3){
  
  let result = [];

  let diferentePage = 0;

  array1.forEach(element1 => {
  
    array2.forEach(element2 => {
    
      array3.forEach(element3 => {
        
        diferentePage = randomNumber(randomPages);

        result.push("- "+element1 + element2 + element3 + randomPages[diferentePage]);

      });

    });

  });

  return result;
}

// Agregando resultado de la función a HTML y agregar Li de Boostrap 

function resultDomain (array){  

  let ul_tag = document.getElementById("domains");
  let li_tag = "";
  let text = "";

  array.forEach(element => {
    text = document.createTextNode(element);
    li_tag = document.createElement("LI");
    li_tag.className = "list-group-item";
    li_tag.appendChild(text);
    ul_tag.appendChild(li_tag);

  });

}

//Agregando Li al ul

function fillLi(){

  const ordenedDomains = posibilityGenerator(pronouns,adjetives,names);

  document.getElementById('domains').innerHTML = "";

  resultDomain(ordenedDomains);

}