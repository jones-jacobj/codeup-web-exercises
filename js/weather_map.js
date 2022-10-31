// Take input from search box and then pass to be geocoded
function parseInput() {
	let val = $('#locationSearchInput')[0].value;
	$('#locationSearchInput')[0].value = "";
	geocode(val);
}

// Location search button Event Listener
$('#locationSearchButton').on('click', parseInput);

// Enter Key Event Listener
document.addEventListener('keydown', function(event) {
		if(event.key === 'Enter') {
			parseInput();
		}
	})

// Get Map => display map
mapboxgl.accessToken = MAPBOX_KEY
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v9',
	zoom: 10,
	center: [-98.4916, 29.4252]
});

function geocode(search) {
	let token = MAPBOX_KEY;
	var baseUrl = 'https://api.mapbox.com';
	var endPoint = '/geocoding/v5/mapbox.places/';
	return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token).then(function(res) {
		return res.json();
		// to get all the data from the request, comment out the following three lines...
	}).then(function(data) {
        map.flyTo({center:[data['features'][0]['center'][0],data['features'][0]['center'][1]]});
		let invertedLatLong = [data['features'][0]['center'][1], data['features'][0]['center'][0]]
		getWeather(invertedLatLong);
	});
}
// Query Open Weather API for information
function getWeather(location) {
	$.get("http://api.openweathermap.org/data/2.5/forecast/", {
		APPID: OPEN_WEATHER_APPID,
		lat: location[0],
		lon: location[1],
		units: "imperial",
	}).done(function(data) {
		updateFiveDayForecast(data);
	});
}
// Default weather coordinates (San Antonio)
getWeather([29.423017, -98.48527])
	// Start at index 4, which is 12oclock noon
var count = 4;
let marker;

function updateFiveDayForecast(data) {
	console.log(data);
	if(marker){marker.remove();}	// If an old markers exist => remove it
	marker = new mapboxgl.Marker()
		.setLngLat([data.city.coord.lon,data.city.coord.lat])
		.addTo(map);

	// Set the City Name
	document.getElementById('cityName').innerHTML = `Current City: ${data.city.name}`;
    // document.getElementById('currently').innerHTML = `Time: ${data.city} Temp: ${}`;
	count = 4; // Reset count back to index 4 (12 oclock noon);
	for(let i = 1; i < 6; i++) {
		setCards(i, data);
	}
}
// Makes the cards reflect the appropriate information for that date
function setCards(card, data) {
	// Set values
	let icon = data["list"][count]["weather"][0]["icon"];
	let weatherIcon = 'http://openweathermap.org/img/w/' + icon + ".png";
	let cardName = `#DAY0` + card;
	let temp = `${data["list"][count]["main"]["temp"]}°F`;
	let date = `${data["list"][count]["dt_txt"]}`.slice(0, -9);
	let description = `Description: ${data["list"][count]["weather"][0]["description"]}`;
	let humidity = `Humidity: ${data['list'][count]['main']['humidity']}`;
	let wind = `Wind: ${data["list"][count]["wind"]["speed"]}`;
	let pressure = `Pressure: ${data["list"][count]["main"]["pressure"]}`;
	// Render Values to User
	$(cardName).find('.card-header')[0].innerHTML = date;
	$(cardName).find('.list-group-item:nth-of-type(1)')[0].innerHTML = `${temp} <br> <img src=${weatherIcon} alt='weather'></img>`;
	$(cardName).find('.list-group-item:nth-of-type(2)')[0].innerHTML = description + "<br><br>" + humidity;
	$(cardName).find('.list-group-item:nth-of-type(3)')[0].innerHTML = wind;
	$(cardName).find('.list-group-item:nth-of-type(4)')[0].innerHTML = pressure;
	// Increment index location, by 24 hours (from previous location of 12oclock noon)
	count += 8;
}