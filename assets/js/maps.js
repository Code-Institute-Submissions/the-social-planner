// ---------------- Creating the Map
function initMap() {
  var london = {lat: 51.5127484, lng: -0.2052297};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: london});
}

// --------------- Markers
var marker;
var placeInfo;
var markers = [];
var restMarkers = [];
var barMarkers = [];

/*
function createRestMarker(results){
    var restMarker = {
        url: "assets/images/restmarker.png",
        scaledSize: new google.maps.Size(40, 40),
    };
    marker = new google.maps.Marker({
        position: results.geometry.location,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: restMarker,
    });
    google.maps.event.addListener(marker, 'click', function(){
        if(placeInfo !=null){
            placeInfo.close();
        }
        placeInfo = new google.maps.InfoWindow({
            content: results.name + `<br/>>` + `<a href="https://www.google.com/maps/search/?api=1&query=` + results.name + '&query_place_id=' + results.place_id + '" target="_blank">Open on Google Maps</a>'
        });
        placeInfo.open(map, this);
    });
    restMarkers.push(marker);
}

function createBarMarker(results){
    var barMarker = {
        url: "assets/images/barmarker.png",
        scaledSize: new google.maps.Size(40, 40),
    };
    marker = new google.maps.Marker({
        position: results.geometry.location,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: barMarker,
    });
    google.maps.event.addListener(marker, 'click', function(){
        if(placeInfo !=null){
            placeInfo.close();
        }
        placeInfo = new google.maps.InfoWindow({
            content: results.name + `<br/>>` + `<a href="https://www.google.com/maps/search/?api=1&query=` + results.name + '&query_place_id=' + results.place_id + '" target="_blank">Open on Google Maps</a>'
        });
        placeInfo.open(map, this);
    });
    barMarkers.push(marker);
}*/

function DeleteMarkers() {

    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }

    for (var i = 0; i < restMarkers.length; i++) {
        restMarkers[i].setMap(null);
    }

    for (var i = 0; i < barMarkers.length; i++) {
        barMarkers[i].setMap(null);
    }
    markers = [];
    restMarkers = [];
    barMarkers = [];

};
//------------------------------Location Finding

/* $(cityDropdown).on("change", function(search){
    var search = {
        query: currentCities.name,
        location: center,
        radius: 6000,
        types: ['bar', 'restaurant']
    };
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
})
function callback(results, status) {
    if(status == google.maps.places.PlacesServicesStatus.OK){
        for (var i = 0; i < results.length; i++){
            createBarMarker(results[i]);
        }
    }
}
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
} */
$('#city-dropdown').on("change", function(){
    DeleteMarkers();
        $("#city-dropdown").prop("disabled", true);
    
        var request = {
            query: currentCities.name,
            fields: ['geometry'],
        };
        console.log('hello');
        var service = new google.maps.places.PlacesService(map);

        service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
    }
        map.setCenter(results[0].geometry.location);
     }
  });
}
)
