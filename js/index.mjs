import Clock from "./clock.mjs";
import Greeting from "./greeting.mjs";
import Todo from "./todo.mjs";
import Bg from "./bg.mjs";
import Weather from "./weather.mjs";

window.addEventListener('DOMContentLoaded', () => {
    const clock = new Clock();
    const greeting = new Greeting();
    const todo = new Todo();
    const bg = new Bg();
    const weather = new Weather();

    clock.init();
    greeting.init();
    todo.init();
    bg.init();
    weather.init();
})
