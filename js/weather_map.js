// Location search button
$('#locationSearchButton').on('click',function(){
    let val = $('#locationSearchInput')[0].value;
    $('#locationSearchInput')[0].value = "";    
    getLatLong(val);
});

// Get Map, display map
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
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

//GEOLOCATION FROM MAPBOX => OPENWEATHER
function getLatLong(location){
    let latLong = geocode(location);
    getWeather(latLong);
    
}

function getWeather(location){
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:   location[0],
        lon:   location[1], 
        units: "imperial",
    }).done(function(data){
        updateFiveDayForecast(data);
    });
}

getWeather([29.423017,-98.48527])


function updateFiveDayForecast(data){
    console.log(data);
    // Set the City Name
    document.getElementById('cityName').innerHTML = `Current City: ${data.city.name}`;
    for (let i=1; i<6; i++){
        setCards(i, data);
    }
}

// Makes the cards reflect the appropriate information for that date
function setCards(card, data){
    let i = card;
    let cardName=`#DAY0`+card;
    let temp = `${(data["list"][i]["main"]["temp"])}°F`
    let date = `${(data["list"][i]["dt_txt"]).slice(0,-9)}`
    let description = `Description: ${data["list"][i]["weather"][0]["description"]}`;
    let humidity = `Humidity: ${data['list'][i]['main']['humidity']}`;
    let wind = `Wind: ${data["list"][i]["wind"]["speed"]}`;
    let pressure = `Pressure: ${data["list"][i]["main"]["pressure"]}`;
    $(cardName).find('.card-header')[0].innerHTML = date;
    $(cardName).find('.list-group-item:nth-of-type(1)')[0].innerHTML = temp;
    $(cardName).find('.list-group-item:nth-of-type(2)')[0].innerHTML = description +"<br><br>"+humidity;
    $(cardName).find('.list-group-item:nth-of-type(3)')[0].innerHTML = wind;
    $(cardName).find('.list-group-item:nth-of-type(4)')[0].innerHTML = pressure;
    
}
