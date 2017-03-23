function agregarFruta(){

  var nuevoValorEntradaTexto = document.getElementById('valorNuevoItem').value;
  var nuevoElemento = document.createElement("li");
  nuevoElemento.innerHTML = nuevoValorEntradaTexto;
  document.getElementById("lista").appendChild(nuevoElemento);
  document.getElementById("valorNuevoItem").value= "";
}
