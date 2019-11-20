var attempt = 3; // Variable to count number of attempts.


// Below function Executes on click of login button.
function validate(){
	var username = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
		if ( username == "lucasrosario@car.ba.gov.br" && password == "car123"){
			//alert ("Login successfully");
			window.location.href = "http://www.car.ba.gov.br"; // Redirecting to other page.
			return false;
		}else{
			attempt --;// Decrementing by one.
			alert("You have left "+attempt+" attempt");
			// Disabling fields after 3 attempts.
			if( attempt == 0){
				document.getElementById("username").disabled = true;
				document.getElementById("password").disabled = true;
				document.getElementById("submit").disabled = true;
				return false;
			}
		}
}