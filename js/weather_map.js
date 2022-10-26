
// Get Map, display map
mapboxgl.accessToken = MAPBOX_KEY
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });

// Get weather
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data){
    updateFiveDayForecast(data);
});

function updateFiveDayForecast(data){
    console.log(data);
    // Set the City Name
    document.getElementById('cityName').innerHTML = `Current City: ${data.city.name}`;
    for (let i=1; i<6; i++){
        setCard(i, data);
    }
}

function setCard(card, data){
    let cardName=`CARD0`+card;
    [0,2,4,6,8].forEach((e)=>{
        let date = `${(data["list"][e]["dt_txt"]).slice(0,-9)}`
        let description = `Description: ${data["list"][e]["weather"][0]["description"]}`;
        let humidity = `Humidity: ${data['list'][e]['main']['humidity']}`;
        let wind = `Wind: ${data["list"][e]["wind"]["speed"]}`;
        let pressure = `Pressure: ${data["list"][e]["main"]["pressure"]}`;
        $(cardName).find('.card-header')[0].innerHTML = date;
        $(cardName).find('.list-group-item:nth-of-type(1)')[0].innerHTML = description +"<br><br>"+humidity;
        $(cardName).find('.list-group-item:nth-of-type(2)')[0].innerHTML = wind;
        $(cardName).find('.list-group-item:nth-of-type(3)')[0].innerHTML = pressure;
    });
}
