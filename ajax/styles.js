"use strict"
var nombreUsuario= ""

function buscarInfo(){
  var input= $('input').val()
  $.ajax({
    url: "https://api.github.com/users/"+ input,
    success : function(datos) {
      $("#nombre").html(datos["name"])
      $("#repositorio").html(datos["public_repos"])
      $("#foto").attr("src",datos.avatar_url)
    }
  })
}

$("#buton").on("click", buscarInfo)

