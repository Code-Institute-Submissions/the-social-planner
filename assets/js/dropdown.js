// ----------------- Dropdown Menus - codebyamir
let countryDropdown = $('#country-dropdown');

countryDropdown.empty();

countryDropdown.append('<option selected="true" disabled>select a country</option>');
countryDropdown.prop('selectedIndex', 0);

const countries = 'assets/json/countries.json';

$.getJSON(countries, function (data) {
  $.each(data, function (key, entry) {
    countryDropdown.append($('<option></option>').attr('value', entry.id).text(entry.name));
  })
});