export default function greeting() {
    const form = document.querySelector(".js-form");
    const input = form.querySelector("input");
    const greeting = document.querySelector(".js-greetings");

    const USER_LS = "currentUser";
    const SHOWING_CN = "showing";
    
    init();

    function init() {
        loadName();
    }
    

    function loadName() {
        const currentUser = localStorage.getItem(USER_LS);
        if (currentUser === null) askForName();
        else paintGreeting(currentUser);
    }
    

    function paintGreeting(text) {
        const hours = new Date().getHours();
        
        form.classList.remove(SHOWING_CN);
        greeting.classList.add(SHOWING_CN);
        greeting.innerText = `Good ${hours<12?"morning":hours<17?"afternoon":"evening"}, ${text}`;
    }
    

    function askForName() {
        form.classList.add(SHOWING_CN);
        form.addEventListener("submit", handleSubmit);
    }
    

    function handleSubmit(event) {
        event.preventDefault();
        const currentValue = input.value;

        paintGreeting(currentValue);
        saveName(currentValue);
    }
    
    
    function saveName(text) {
        localStorage.setItem(USER_LS, text);
    }
}
