const weather_form = document.querySelector('form');
const search = document.querySelector('input');
const box_result = document.querySelector("#results");
const box_error = document.querySelector("#error");

weather_form.addEventListener('submit', (e)=> {
	e.preventDefault();

	const current_location = search.value;
	
	let weather_report = '';
	let error_message = '';	

	box_result.textContent = "Loading...";

	fetch(`http://localhost:8080/weather?postalCode=${current_location}`).then((response) => {
		response.json().then((data)=> {
			if (data.error) {
				error_message = "An error occurred.";
			} else {
				let { current_probability_precip, current_temperature, date, locale_name } = data;
				weather_report = 
					`As of ${date}, it is ${current_temperature} degrees with a ${current_probability_precip}% chance of precipitation in ${locale_name}.`;	
			}
		}).catch(() => {
			error_message = "An error occurred.";	
		}).finally(() => {
			box_result.textContent = weather_report;
			box_error.textContent = error_message;
		});
	});
});