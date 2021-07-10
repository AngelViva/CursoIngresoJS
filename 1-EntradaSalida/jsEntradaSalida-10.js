/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{	
	//txtIdImporte
	//txtIdResultado
	var sueldo
	var descuento
	var finSueldo

	sueldo=document.getElementById("txtIdImporte").value;
	sueldo=parseInt(sueldo);
	descuento= sueldo*25/100;
	finSueldo= sueldo-descuento;
	document.getElementById("txtIdResultado").value= finSueldo;
}
