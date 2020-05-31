// ----------------- Country Dropdown Menu - codebyamir
var countryDropdown = $("#country-dropdown");

countryDropdown.empty();

countryDropdown.append('<option selected="true" disabled>select a country</option>');
countryDropdown.prop("selectedIndex", 0);

const countries = "assets/json/countries.json";

$.getJSON(countries, function (data) {
  $.each(data, function (key, entry) {
    countryDropdown.append(
      $("<option></option>").attr("value", entry.id).text(entry.name)
    );
  });
});

// ------------------- City Dropdown Menu

var cityDropdown = $("#city-dropdown");
const cities = ('assets/json/cities.json');

cityDropdown.append(`<option selected="true" disabled>select a city</option>`);

countryDropdown.on("change", function(event){
    $.getJSON(cities, function(data){
        cityDropdown.empty();
        cityDropdown.append('<option selected="true" disabled>select a city</option>');
        $.each(data[cityDropdown.val()], function(key, entry){
            cityDropdown.append($('<option></option>').attr('value', entry.name).text(entry.name))
        })
    })
})

