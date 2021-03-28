function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    showError();
    
  }
}


function showPosition(position) {
    console.log(position);
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
}

function showError(){
    console.log("Location not able to be retrived!");
}