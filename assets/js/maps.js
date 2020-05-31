// ---------------- Initializing Google Map API
function initMap() {
  var london = {lat: 51.5127484, lng: -0.2052297};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: london});
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
  });
  marker.setMap(map);
}

// --------------- Marker


$(cityDropdown).on("change", function() { // upon changing cityDropdown, this grabs your selection and puts a marker on it

        DeleteMarkers();
        $("#city-dropdown").prop("disabled", true);

        var desiredLocation = {
            query: cityDropdown.val(),
            fields: ['geometry'],

        }

        console.log(map.getCenter().lat(), map.getCenter().lng());

        service.findPlaceFromQuery(desiredLocation, callback);

    });