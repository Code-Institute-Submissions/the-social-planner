// ----------------- Country Dropdown Menu - codebyamir
/*let currentCities;
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
countryDropdown.on("change", function(city) {
    let selectedcountry = $("#country-dropdown option:selected").text();
    $.getJSON(cities, function(data){
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
});*/
async function getData(geonameId) {
    let response = await fetch(`//www.geonames.org/childrenJSON?geonameId=${geonameId}&style=long`);
    return response.json();
}
$('#country-dropdown').on("change", async function() {
    let $select = $('#city-dropdown'),
        geonameId = $(this).val();
        $select.empty();
    const places = await getData(geonameId);
    await places.geonames.map(({geonameId, name, lat, lng}) => {
        let op;
        if ($select.data('value') === geonameId && Ctrl.toLowerCase() === 'state') {
            op = `<option value="${geonameId}" selected="selected">${name}</option>`;
            getPlaces(geonameId, 'region');
        } else if ($select.data('value') === geonameId && Ctrl.toLowerCase() === 'region') {
            op = `<option value="${geonameId}" selected="selected">${name}</option>`;
        } else {
            op = `<option value="${geonameId}" data-lng="${lng}" data-lat="${lat}">${name}</option>`;
        }
        $select.append(op);
    });
});
async function getCountriesInContinents(geonameId)
{
    var $select = $('#country-dropdown');
    const continents = await getData(geonameId);
    await continents.geonames.map(async ({geonameId, name}) => {
        let countries = await getData(geonameId);
        let $optgroup = $(`<optgroup label="${name}"/>`);
        countries.geonames.map(({geonameId, name}) => {
            let op;
            if ($select.data('value') === geonameId) {
                op = `<option value="${geonameId}" selected="selected">${name}</option>`;
                getPlaces(geonameId, 'state');
            } else {
                op = `<option value="${geonameId}">${name}</option>`;
            }
            $optgroup.append(op);
        });
        $select.append($optgroup);
    });
};
getCountriesInContinents('6295630');





