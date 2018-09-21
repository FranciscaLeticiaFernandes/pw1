function validarformulario(){
	var n = document.forms["forma1"]["nome"].value;
	if (n == "") {
		alert ("Nome deve ser preenchido");
		//return false;
	}
	
}
function validarcpf(){
	var cpf = document.forms["forma1"]["cpf"].value;
	if (cpf ==""){
		alert ("cpf inválido,por favor refaça");
	}
}
function validaremail(){
	var email = document.forms["forma1"]["mail"].value;
	if( email == ""){
		alert("Por favor digite seu E-mail");
	}
}
function validarendereco(){
	var endereco =document.forms["forma1"]["endereco"].value;
	if (endereco == ""){
		alert ("Por favor,digite seu endereço");
	}
}
function validarcidade(){
	var cidade =document.forms["forma1"]["cidade"].value;
	if (cidade == ""){
		alert ("Por favor,informe sua cidade");
	}
}
function validarestado(){
	var estado =document.forms["forma1"]["estado"].value;
	if (estado == ""){
		alert ("Por favor,informe seu estado");
	}
}
function validaruf(){
	var uf=document.forms["forma1"]["uf"].value;
	if (uf == ""){
		alert ("Por favor,apresente sua UF");
	}
}
function validarcep(){
	var cep=document.forms["forma1"]["cep"].value;
	if (cep == ""){
		alert ("Por favor,informe seu CEP");
	}
}function validarpais(){
	var pais=document.forms["forma1"]["pais"].value;
	if (pais == ""){
		alert ("Por favor diga seu país");
	}
}