document.getElementById("enviar").addEventListener("click", hacerSolicitudAPI);

function hacerSolicitudAPI(){
	var nombrePeli = document.getElementById("nombrep").value;
	alert(nombrePeli);
	
	var apiURL = "https://www.omdbapi.com/?t";
	
	var apiKEY ="c74b4aea";
	
	var headers = new Headers();
	headers.append("API-Key", apiKEY);
	headers.append("Content-Type", "application/json");
	
	fetch(apiURL,{
		method:"POST",
		body: JSON.stringify({nombrePeli: nombrePeli}),
		headers: headers
		
	})
	
	.then(function(response) {
	if (response.status !== 200) {
	alert("alerta 200")
	return;
	}
	
	response.json().then(function(data) {
	
		document.getElementById("director").innerHTML = JSON.stringify(data.Director);
		});
	})
	.catch(function(error){
		alert("error");
		});
	});

	
}
