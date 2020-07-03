import clock from "./clock.mjs";
import greeting from "./greeting.mjs";
import todo from "./todo.mjs";
import background from "./bg.mjs";
import weather from "./weather.mjs";

window.addEventListener('DOMContentLoaded', () => {
    clock();
    greeting();
    todo();
    background();
    weather();
})
