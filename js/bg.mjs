export default class {
    constructor(){
        this.body = document.querySelector("body");
        this.IMG_NUMBER = 4;
    }


    paintImage = (imgNumber) => {
        const image = new Image();
        image.src = `/imgs/img${imgNumber + 1}.jpg`;
        image.classList.add("bgImage");
        image.addEventListener('load', () => this.body.appendChild(image));
    }

    genRandom = () => {
        const number = Math.floor(Math.random() * this.IMG_NUMBER);
        return number;
    }

    init(){
        const randomNumber = this.genRandom();
        this.paintImage(randomNumber);
    }
}