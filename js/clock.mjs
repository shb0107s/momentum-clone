export default class {
    constructor() {
        this.clockContainer = document.querySelector(".js-clock");
        this.clockTitle = this.clockContainer.querySelector("h1");
    }

    getTime = () => {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();
    
        this.clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;
    }
    
    init(){
        this.getTime();
        setInterval(this.getTime, 1000);
    }
}