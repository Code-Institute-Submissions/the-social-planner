// ----------------- Dropdown Menus
var countries = ['Austria','Belgium','Croatia','Denmark','France','Germany','Greece','Ireland','Spain','Sweden','United Kingdom'],
    select = document.getElementById('countrySelect');
for( country in countries ) {
    select.add( new Option( countries[country] ) );
};

$("#countrySelect".value).click(function findCity(){
    var select = document.getElementById('countrySelect');
    var list2 = document.getElementById("citySelect");
    var list1SelectedValue = list1.options[list1.selectedIndex].value;
            if (list1SelectedValue=='Austria')
            {
            list2.options.length=0;
            list2.options[0] = new Option('select a city', '');
            list2.options[1] = new Option('Salzburg', 'Salzburg');
            list2.options[2] = new Option('Vienna', 'Vienna');
            }
            else if (list1SelectedValue=='Belgium')
            {  
            list2.options.length=0;
            list2.options[0] = new Option('select a city', '');
            list2.options[1] = new Option('Brussels', 'Brussels');
            list2.options[2] = new Option('Gent', 'Gent');
            }
})

// ---------------- Map
function initMap() {
  var london = {lat: 51.5127484, lng: -0.2052297};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: london});
}