export default class {
    constructor(){
        this.COORDS = 'coords';
        this.API_KEY = "7afd6dbfb74eac9025a9945fcf8a6b78";
        this.weather = document.querySelector(".js-weather");
        this.icon = this.weather.querySelector(".weather-icon");
        this.degree = this.weather.querySelector(".degree");
        this.place = this.weather.querySelector(".place");
    }

    getWeather = (lat, lon) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric`)
            .then(response => {
                return response.json();
            })
            .then(json => { 
                const temperature = json.main.temp;
                const place = json.name;
                const icon = json.weather[0].icon;
                this.icon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                this.degree.innerText = `${temperature}˚`;
                this.place.innerText = `${place}`;
            });
    }

    saveCoords = (coordsObj) => {
        localStorage.setItem(this.COORDS, JSON.stringify(coordsObj));
    }

    handleGeoSucess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            latitude,
            longitude
        };
        this.saveCoords(coordsObj);
        this.getWeather(latitude, longitude);
    }
    handleGeoError = () => {
        console.log("Can't access geo location");
    }

    askForCoords = () => {
        navigator.geolocation.getCurrentPosition(this.handleGeoSucess, this.handleGeoError);
    }

    loadedCoords = () => {
        const loadedCoords = localStorage.getItem(this.COORDS);
        if(loadedCoords === null){
            this.askForCoords();
        }else{
            const parseCoords = JSON.parse(loadedCoords);
            this.getWeather(parseCoords.latitude, parseCoords.longitude);
        }
    }
    


    init(){
        this.loadedCoords();
    }
}