main = function() {

	// De momento no nos precupamos de esta parte del codigo.
	// Añado unos comentarios para saber lo que hace de todas formas

	// Busca el elemento con ID canvas en la pagina.
	var canvas    = document.getElementById('canvas');

	// obtiene el contexto
	var context   = canvas.getContext('2d');
	
	// definimos la dimension del canvas. 
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight - 200;

	// Ejercicio:
	// cargamos una imagen de imagenes/person01.png
	// AQUI EMPIEZA TU CODIGO
<<<<<<< HEAD
	var image=new Image();
	
	image.onload=onImageLoad;
	image.src="imagenes/person01.png";
=======

>>>>>>> 72ceb89f91f1a64a4c0978603956ba146a6dadf4


    // AQUI TERMINA TU CODIGO
};

onImageLoad = function(){
	// Imprime en consola cuando ha terminado de cargarse la imagen.
	// Nota: usa la funcion consola.log 

	// AQUI EMPIEZA TU CODIGO
<<<<<<< HEAD
	console.log("la imagen se ha cargado");
=======

>>>>>>> 72ceb89f91f1a64a4c0978603956ba146a6dadf4


    // AQUI TERMINA TU CODIGO
};

window.onload = main;