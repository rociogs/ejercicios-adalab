"use strict"
var logo= ["7up.jpg", "fanta.jpg"]
var elegirLogo= Math.round(Math.random())
var imagenFanta=document.querySelector("#fanta")
var imagenUp= document.querySelector("#up")

imagenFanta.src = "images/" + logo[elegirLogo]
imagenUp.src="images/"+logo[elegirLogo]

for (var i = 0; i < logo.length; i++) {
var numeroAleatorio= Math.round(Math.random()* logo.length-1)
	if(logo.length=1)
}
