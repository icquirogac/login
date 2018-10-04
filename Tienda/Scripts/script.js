function calcularTotal() {
	var precioLeche = document.getElementById("valLec").value;
	var precioPan = document.getElementById("valPan").value;
	var precioHuevos = document.getElementById("valHue").value;
	var precioJabon = document.getElementById("valJab").value;
	var precioShampoo = document.getElementById("valSha").value;
	var precioCrema = document.getElementById("valCre").value;
	var canLec = document.getElementById("numLec").value;
	var canPan = document.getElementById("numPan").value;
	var canHue = document.getElementById("numHue").value;
	var canJab = document.getElementById("numJab").value;
	var canSha = document.getElementById("numSha").value;
	var canCre = document.getElementById("numCre").value;
	
	document.getElementById("numSub1").value = (precioLeche * canLec) + (precioHuevos * canHue) + (precioPan * canPan);
	document.getElementById("numSub2").value = (precioJabon * canJab) + (precioShampoo * canSha) + (precioCrema * canCre);
	
	var sub1 =document.getElementById("numSub1").value;
	var sub2 =document.getElementById("numSub2").value;
	var iva1 =document.getElementById("valIva1").value;
	var iva2 =document.getElementById("valIva2").value;
	
	var valorIva1 = calcularIva(sub1,iva1);
	var valorIva2 = calcularIva(sub2,iva2);

	document.getElementById("numIva1").value = valorIva1;
	document.getElementById("numIva2").value = valorIva2;

	var totalIva = parseInt(valorIva1) + parseInt(valorIva2); 
	var totalSub = parseInt(sub1) + parseInt(sub2);
	var Total = parseInt(totalIva) + parseInt(totalSub);

	document.getElementById("numSub3").value = totalSub;
	document.getElementById("numIva3").value = totalIva;
	document.getElementById("numTot").value = Total;
}
function calcularIva(valor, iva) {
	return valor*iva;
}
