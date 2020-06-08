var map;
var marker;
var service;

// ------------------- Initializing the Map

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {
            lat: 51.5000478,
            lng: -0.1461543
        }
    });
}

//------------------------- Markers

function createMarker(results) {
    var location = results.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: results.geometry.location
    });
}

//------------------------------Location Finding


$('#city-dropdown').on("change", function() {
    var resultsMap = map;
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
                location: {lat: map.getCenter().lat(), lng: map.getCenter().lng()},
                radius: '5000',
                type: ['restaurant', 'bar']
            };
            service = new google.maps.places.PlacesService(map),
            service.nearbySearch(request, callback);
            console.log(request.type);
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
