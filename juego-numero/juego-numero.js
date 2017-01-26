"use strict"
var numeroAdivinar= Math.ceil(Math.random() *100)

function comparaNumeros(numeroAdivinar, numeroUsuario) {
	if (numeroAdivinar<numeroUsuario) {
		return "Demasiado alto"
	}

else if(numeroAdivinar>numeroUsuario){
	return "Demasiado bajo"
}

else {
	return "Lo has acertado"
}

}
function usuarioPruebaNumero(){
  var feedbackParrafo= document.querySelector("#mensaje")
  var input= document.querySelector("input")
  var numeroUsuario= input.value
  var mensaje= comparaNumeros(numeroAdivinar, numeroUsuario)
  feedbackParrafo.innerHTML= mensaje

}

var boton =document.querySelector("#boton")
boton.addEventListener("click", usuarioPruebaNumero)
console.log(numeroAdivinar)





