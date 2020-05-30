
// ---------------- Map
function initMap() {
  var london = {lat: 51.5127484, lng: -0.2052297};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: london});
}