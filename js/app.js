/*
 * Archivo principal de funcionalidad de JS
 */




funcion crearModal(){
  var fondo= document.createElement("div");/*por que un div no es esquematizado*/
  var modal= document.createElement("div");
  var imagen= document.createElement("img");/*para crear una imagen*/
 /*estamos agregando el hijo*/
  fondo.appenchild(modal);
  modal.appenchild(imagen);
  modal.appenchild(cerrar);

/*crear las clases*/
  fondo.className="contenedor";
  modal.className="modal";

  /*crear el boton cerrar*/
var cerrar= document.createElement("div");
var x= document.createTextNode("X");
cerrar.appenchild(x);
cerrar.className="cerrar";
cerrar.addEventListener("click",function() {

  fondo.style.visibility="hidden";
});

document.body.appenchild(fondo);
return fondo;

}

/*para mostrar el modal*/

funcion mostrarModal(objeto){
  objeto.style.visibility="visible";
}
