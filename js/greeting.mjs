export default class {
    constructor(){
        this.form = document.querySelector(".js-form");
        this.input = this.form.querySelector("input");
        this.greeting = document.querySelector(".js-greetings");

        this.USER_LS = "currentUser";
        this.SHOWING_CN = "showing";
    }

    saveName = (text) => {
        localStorage.setItem(this.USER_LS, text);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const currentValue = this.input.value;
        this.paintGreeting(currentValue);
        this.saveName(currentValue);
    }

    askForName = () => {
        this.form.classList.add(this.SHOWING_CN);
        this.form.addEventListener("submit", this.handleSubmit);
    }

    paintGreeting = (text) => {
        const hours = new Date().getHours();
        
        this.form.classList.remove(this.SHOWING_CN);
        this.greeting.classList.add(this.SHOWING_CN);
        this.greeting.innerText = `Good ${hours<12?"morning":hours<17?"afternoon":"evening"}, ${text}`;
    }

    loadName = () => {
        const currentUser = localStorage.getItem(this.USER_LS);
        if(currentUser === null){
            this.askForName();
        }
        else this.paintGreeting(currentUser);
    }

    init(){
        this.loadName();
    }
}


// const form = document.querySelector(".js-form");
// const input = form.querySelector("input");
// const greeting = document.querySelector(".js-greetings");

// const USER_LS = "currentUser";
// const SHOWING_CN = "showing";


// function saveName(text){
//     localStorage.setItem(USER_LS, text);
// }

// function handleSubmit(event){
//     event.preventDefault();
//     const currentValue = input.value;
//     paintGreeting(currentValue);
//     saveName(currentValue);
// }

// function askForName(){
//     form.classList.add(SHOWING_CN);
//     form.addEventListener("submit", handleSubmit);
// }

// function paintGreeting(text){
//     form.classList.remove(SHOWING_CN);
//     greeting.classList.add(SHOWING_CN);
//     greeting.innerText = `Hello ${text}`;
// }

// function loadName(){
//     const currentUser = localStorage.getItem(USER_LS);
//     if(currentUser === null){
//         askForName();
//     }
//     else paintGreeting(currentUser);
// }

// function init(){
//     loadName();
// }

// // init();

// export default init;