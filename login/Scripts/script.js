function toLogin() {
	var login = document.getElementById("login");
	var register = document.getElementById("registro");
	
	login.style.visibility = "visible";
	login.classList.remove("order-2");
	login.classList.add("order-1");

	register.style.visibility = "hidden";
	register.classList.remove("order-1");
	register.classList.add("order-2");
}
function toRegister() {
	var login = document.getElementById("login");
	var register = document.getElementById("registro");

	login.style.visibility = "hidden";
	login.classList.remove("order-1");
	login.classList.add("order-2");

	register.style.visibility = "visible";
	register.classList.remove("order-2");
	register.classList.add("order-1");
}
function validarRegistro (){
	var Nombre = document.getElementById("regNom");
	var Telefono = document.getElementById("regTel");
	var Correo = document.getElementById("regCor");
	var Contraseña = document.getElementById("regCon");
	var Contraseña2 = document.getElementById("regCon2");
	if (Nombre.value.length == 0) {
		alert("Por favor ingrese un Nombre");
		Nombre.focus();
	}else if (Telefono.value.length == 0) {
		alert("Por favor ingrese un Telefono");
		Telefono.focus();		
	}else if (!validar_email(Correo.value)) {
		alert("Por favor ingrese un correo valido");
		Correo.focus();
	}else if (!validar_contraseña(Contraseña.value)) {
		alert("Por favor ingrese una contraseña valida");
		Contraseña.focus();		
	}else if (Contraseña.value != Contraseña2.value) {
		alert("Las contraseñas no coinciden");
		Contraseña.value = "";
		Contraseña2.value = "";
		Contraseña.focus();
	}else {
		alert("Sign-in Confirmed")
	}
		
}
function validarLogin () {
	if( !validar_email( document.getElementById("logCor").value ) ){
		alert("Por favor ingrese un correo valido");
		document.getElementById("logCor").focus();
		return;
	}
	if (!validar_contraseña (document.getElementById("logCon").value)) {
		alert("La contraseña es muy corta");
		document.getElementById("logCon").focus();
		return;
	}

	alert("Log-in Confirmed");

};
function validar_contraseña( contraseña ) {
	var contra = contraseña;
	if(contra.length < 6){
		return false;	
	}
	return true;
}
function validar_email( email ){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}