const {ipcRenderer} = require('electron')

//sign in validation and submit button
function validateForm()
 {
  /** var x = document.forms["myForm"]["inputEmail"].value;
	var y = document.forms["myForm"]["inputPassword"].value;**/
		var x=document.getElementById("inputEmail").value;
			var y=document.getElementById("inputPassword").value;
			var a=document.getElementById("inputuserid").value;
			var b=document.getElementById("inputstatus").value;
			
			
    if (x == "" || y == "")
	{
        alert("field must be filled out");
        return false;
    }
}
{
	ipcRenderer.send('btn-submit', document.getElementById('inputEmail').value +
		document.getElementById('inputPassword').value+document.getElementById('inputuserid').value +
		document.getElementById('inputstatus').value)
}

//sign up ,continue button
function funcContinue()
 {
  var name=document.getElementById("suname").value;
  var mnum=document.getElementById("sumnum").value;
  var email=document.getElementById("suemail").value;
  var psw=document.getElementById("supsw").value;			
}
{
	ipcRenderer.send('btn-continue', document.getElementById('name').value +
		document.getElementById('mnum').value + document.getElementById('email').value + document.getElementById('psw').value  )
}







