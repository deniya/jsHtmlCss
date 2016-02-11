'use strict';
//alert("Hello, World!");

function valid(){
	console.log("Function valid's on");
	var title = document.getElementById("title");
	var theme = document.getElementById("theme");
	var author = document.getElementById("author");
	var content = document.getElementById("content");
	var date = document.getElementById("date");
	var invalidTitle = document.getElementById("invalidTitle");
	var invalidTheme = document.getElementById("invalidTheme");
	var invalidAuthor = document.getElementById("invalidAuthor");
	var invalidContent = document.getElementById("invalidContent");
	var invalidDate = document.getElementById("invalidDate");
	var invalidGender = document.getElementById("invalidGender")
	var valid = true;

	if(title.value == ""){
		title.className+=" invalid";
		invalidTitle.className = "invalidP";
		valid = false;
	}else{
		title.className="form-control";
		invalidTitle.className = "none-invalid";
	}

	if(theme.value == ""){
		theme.className+=" invalid";
		invalidTheme.className = "invalidP";
		valid = false;
	}else{
		theme.className="form-control";
		invalidTheme.className = "none-invalid";
	}

	if(author.value == ""){
		author.className+=" invalid";
		invalidAuthor.className = "invalidP";
		valid = false;
		//if (author.className==" invalid"){
		//	document.getElementById("invalidP").style.visibility='visible';
	}else{
		author.className="form-control";
		invalidAuthor.className = "none-invalid";
	}

	if(content.value == ""){
		content.className+=" invalid";
		invalidContent.className = "invalidP";
		valid = false;
	}else{
		content.className="form-control";
		invalidContent.className = "none-invalid";
	}
/*
	if(genderP.value == " --your gender-- "){
		genderP.className+=" invalid";
		invalidGender.className = "invalidP";
		valid = false;
	}else{
		genderP.className="form-control";
		invalidGender.className = "none-invalid";
	}

*/

	return valid;
	

}


var d = new Date();
	var date = document.getElementById("date");
		date.value = ("0" + d.getDate()).slice(-2)+"."+("0" + (d.getMonth() + 1)).slice(-2)+"."+d.getFullYear()+" -//- "+d.getHours()+":"+d.getMinutes()+":"+("0" + (d.getSeconds() + 1)).slice(-2);


var gender = new Array('male', 'female', 'Wish to be');
var sel=document.getElementById('gender');
for (var i=0; i <= gender.length; i++){
	if (0==i)sel.options[i]=new Option('','',true,false);  //
		sel.options[i]=new Option(gender[i-1],i-1,false,false);
}

//	document.getElementById("date").innerHTML = d.getDate()+"."+d.getMonth()+"."+d.getFullYear()+" // "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

/*
valid(){
	var title=document.forms["My-Form"]['title'].value;
	if(title == null || title = ""){
		console.log("Empty title")
	}
}
*/
