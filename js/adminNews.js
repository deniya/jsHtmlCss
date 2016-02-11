'use strict';



function valid(){
	
	var login = document.getElementById("login");
	var pass = document.getElementById("pwd");
	if(login.value ==""){
		alert("Enter the login!");
		return false;
	}
	if(pass.value == ""){
		alert("Enter the password!");
		return false;
	}
	return true;

}
