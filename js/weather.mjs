export default function weather() {
    const weather = document.querySelector(".js-weather");
    const icon = weather.querySelector(".weather-icon");
    const degree = weather.querySelector(".degree");
    const place = weather.querySelector(".place");
    
    const COORDS = 'coords';
    const API_KEY = "7afd6dbfb74eac9025a9945fcf8a6b78";
    
    init();
    
    
    function init() {
        loadedCoords();
    }
    

    function loadedCoords() {
        const loadedCoords = localStorage.getItem(COORDS);
        if (loadedCoords === null){
            askForCoords();
        } else {
            const parseCoords = JSON.parse(loadedCoords);
            getWeather(parseCoords.latitude, parseCoords.longitude);
        }
    }


    function askForCoords() {
        navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
    }
    
    
    function handleGeoSucess(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            latitude,
            longitude,
        };

        saveCoords(coordsObj);
        getWeather(latitude, longitude);
    }

    function handleGeoError() {
        console.log("Can't access geo location");
    }


    function saveCoords(coordsObj) {
        localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    }


    function getWeather(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
            .then(response => {
                return response.json();
            }).then(json => { 
                const temperature = json.main.temp;
                const placeName = json.name;
                const iconName = json.weather[0].icon;
                icon.src = `http://openweathermap.org/img/wn/${iconName}@2x.png`;
                degree.innerText = `${temperature}˚`;
                place.innerText = `${placeName}`;
            });
    }  
}
