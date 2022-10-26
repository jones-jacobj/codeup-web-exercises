
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
    document.getElementById('cityName').innerHTML = `Current City: ${data.city.name}`;
});