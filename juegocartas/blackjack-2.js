"use strict"
var baraja=[]
var palos=["corazones", "rombos", "treboles", "picas"]

for (var i = 1; i <= 13; i++)

  for (var j = 0; j < palos.length; j++) {

    var carta = {palo: palos[j], valor: i}
    baraja.push(carta)

  }


function puntuacionMano(mano) {
  var resultado= 0

  for (var i = 0; i < mano.length; i++)
    resultado= resultado + mano[i] ["valor"]

  console.log ("El resultado es: " + resultado)
  var divPuntuacion= document.querySelector(".puntuacion")
  if (resultado>21)
    divPuntuacion .innerHTML ="Has perdido"
  else
  divPuntuacion .innerHTML= resultado
  return resultado

}

var cartasMano=[]

function nuevoJuego(){
  var cartaImg= document.querySelector(".cartas img")
  cartaImg.src= ""
  cartasMano=[]
  puntuacionMano(cartasMano)


}

var botonNuevo = document.querySelector("#nuevo-juego")
botonNuevo.addEventListener("click", nuevoJuego)

function cartaAleatoria(){
  var posicionCartaAlAzar= Math.floor(Math.random()* baraja.length)
  var cartaAlAzar = baraja [posicionCartaAlAzar]
  var cartaImg= document.querySelector(".cartas img")
  cartaImg.src= "images/"+ cartaAlAzar["valor"]+ "-"+cartaAlAzar["palo"]+".png"
  cartasMano.push (cartaAlAzar)
  puntuacionMano(cartasMano)

}

var botonPedirCarta = document.querySelector("#pedir-carta")
botonPedirCarta.addEventListener("click", cartaAleatoria)


function plantarse(){
  var divPuntuacion=document.querySelector(".puntuacion")
  var resultado= puntuacionMano(cartasMano)
  console.log (resultado)

  if (resultado<10)
    divPuntuacion.innerHTML="Te has plantado demasiado pronto"

  else if(resultado<21)
    divPuntuacion.innerHTML="Otra vez será"


  else
    divPuntuacion.innerHTML="Lo has clavado eres un crack"


}
var botonMePlanto= document.querySelector("#plantarse")
botonMePlanto.addEventListener("click", plantarse)


