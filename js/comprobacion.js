function validar(email) {

	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	error = true;

    if (!expr.test(email.value)){
    	alert("Error: La dirección de correo " + email.value + " es incorrecta.");
    	error = false;
    }

	return error;    
}

window.onload = function(){
	$('#myTabs a').click(function (e) {
  		e.preventDefault()
	  $(this).tab('show')
	})

	$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
	$('#myTabs a:first').tab('show') // Select first tab
	$('#myTabs a:last').tab('show') // Select last tab
	$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
}
