window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var palabra = document.getElementById("palabra").value;
		var segundos = parseInt(document.getElementById("segundos").value);
		myFunction(palabra,segundos);
	});

	function myFunction(palabra,segundos) {
		setTimeout(function(){
			var resultado = document.getElementById("resultado");
			resultado.innerHTML = (palabra);
		}, segundos*1000);
	}
	

});