// With event.preventDefault()
// It prevents the default form submission behavior
// Ensuring that the custom JavaScript code executes smoothly without triggering a page reload when the search form is submitted.

// Without event.preventDefault()
// The default form submission behavior is allowed
// Potentially causing the page to reload or navigate to a new page,
// which could disrupt the intended functionality of the web application, such as updating cityElement.innerHTML.

function handleSearchSubmit(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-form-input");
	let cityElement = document.querySelector("#weather-app-city");

	let inputValue = searchInput.value;
	var capitalizedValue =
		inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

	cityElement.innerHTML = capitalizedValue;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
