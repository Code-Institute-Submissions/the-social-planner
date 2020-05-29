function initMap() {
  var london = {lat: 51.5127484, lng: -0.2052297};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: london});
  var marker = new google.maps.Marker({position: london, map: map});
}
// 51.5127484,-0.2052297