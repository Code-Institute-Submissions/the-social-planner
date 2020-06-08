// ----------------- Country Dropdown Menu - codebyamir
let currentCities;
var countryDropdown = $("#country-dropdown");

countryDropdown.empty();

countryDropdown.append('<option selected="true" disabled>select a country</option>');
countryDropdown.prop("selectedIndex", 0);

const countries = "assets/json/countries.json";

$.getJSON(countries, function(data) {
    $.each(data, function(key, entry) {
        countryDropdown.append(
            $("<option></option>").attr("value", entry.id).text(entry.name)
        );
    });
});

// ------------------- City Dropdown Menu

var cityDropdown = $("#city-dropdown");
const cities = ('assets/json/cities.json');

cityDropdown.append(`<option selected="true" disabled>select a city</option>`);
countryDropdown.on("change", function(city) {
    let selectedcountry = $("#country-dropdown option:selected").text();
    $.getJSON(cities, function(data) {
        cityDropdown.empty();
        cityDropdown.append('<option selected="true" disabled>select a city</option>');
        for (const city in data) {
            if (city.toLowerCase() === selectedcountry.toLowerCase()) {
                currentCities = data[city].cities;
                currentCities.forEach(current => {
                    cityDropdown.append($('<option></option>').attr('value', current.name).text(current.name));
                })
            }
        }
    })
});

/* ----------------- Reset Button */
function Reset() {
    var dropDownCountry = document.getElementById("country-dropdown");
    dropDownCountry.selectedIndex = 0;
    var dropDownCity = document.getElementById("city-dropdown");
    dropDownCity.selectedIndex = 0;
}






