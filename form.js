function validar() {
	var Name = form1.Name.value;
	var Email = form1.Email.value;
	var Password = form1.Password.value;
	var rePassword = form1.rePassword.value;

	if (Name == "") {
	alert('Preencha o campo Name');
	form1.Name.focus();
	return false;

	}

	if (Name.length < 5) {
	alert('Digite seu nome completo');
	form1.Name.focus();
	return false;
}

	if (Email == "") {
	alert('Preencha o campo Email');
	form1.Email.focus();
	return false;

	}

	if (Password == ""){
	alert('Preencha o campo Password');
	form1.Password.focus();
	return false;

	}

	if (rePassword == ""){
	alert('Preencha o campo senhas');
	form1.rePassword.focus();
	return false;
	}

	if (rePassword != Password){
	alert('As senhas estão diferentes');
	form1.rePassword.focus();
	return false;
	}

	if (Name.length < 5) {
	alert('Digite seu nome completo');
	form1.Name.focus();
	return false;
}

}

