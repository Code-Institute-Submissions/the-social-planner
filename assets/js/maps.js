var map;
var marker;
var service;
var placeInfo;
var markers = [];
var restMarkers = [];
var barMarkers = [];
var callCounter = 0;

// ------------------- Initializing the Map

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {
            lat: 51.5000478,
            lng: -0.1461543
        }
    });
}

//------------------------- Markers
function createMarker(place) {
    var location = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
}

//------------------------------Location Finding


$('#city-dropdown').on("change", function() {
    let resultsMap = map;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': cityDropdown.val(),
    }, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            var request = {
                location: results[0].geometry.location,
                radius: '2000',
                type: ['restaurant', 'meal_delivery', 'meal_takeaway', 'bar']
            };
            service = new google.maps.places.PlacesService(map),
                service.nearbySearch(request, callback);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
});



function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}