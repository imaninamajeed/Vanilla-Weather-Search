// With event.preventDefault()
// It prevents the default form submission behavior
// Ensuring that the custom JavaScript code executes smoothly without triggering a page reload when the search form is submitted.

// Without event.preventDefault()
// The default form submission behavior is allowed
// Potentially causing the page to reload or navigate to a new page,
// which could disrupt the intended functionality of the web application, such as updating cityElement.innerHTML.
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Paris");

function handleSearchSubmit(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-form-input");
	searchCity(searchInput.value);
	// let cityElement = document.querySelector("#weather-app-city");
	// let inputValue = searchInput.value;
	// var capitalizedValue =
	// 	inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
	// cityElement.innerHTML = capitalizedValue;
}

function searchCity(city) {
	let apiKey = "b2a5adcct04b33178913oc335f405433";
	let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
	axios.get(apiUrl).then(refreshWeather);
}

function refreshWeather(response) {
	let temperatureElement = document.querySelector("#weather-app-temperature");
	let temperature = response.data.temperature.current;
	alert(temperature);
	let cityElement = document.querySelector("#weather-app-city");
	cityElement.innerHTML = response.data.city;
	temperatureElement.innerHTML = Math.round(temperature);
}
