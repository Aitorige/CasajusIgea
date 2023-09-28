

document.getElementById("enviar").addEventListener("click", hacerSolicitudAPI);

function hacerSolicitudAPI(event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página.

  var nombrePeli = document.getElementById("nombrep").value;
  var apiURL = "https://www.omdbapi.com/?t=" + encodeURIComponent(nombrePeli); // Agregar el nombre de la película a la URL.
  var apiKEY = "c74b4aea";

  fetch(apiURL + "&apikey=" + apiKEY)
    .then(function (response) {
      if (!response.ok) {
        alert("Error al buscar la película");
        return;
      }

      response.json().then(function (data) {
        if (data.Error) {
          alert("No se encontró información para la película");
        } else {
          var director = data.Director;
		  alert(director);
          document.getElementById("director").textContent = "Director: " + director;
        }
      });
    })
    .catch(function (error) {
      alert("Error en la solicitud: " + error.message);
    });
}