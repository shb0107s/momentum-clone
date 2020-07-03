export default function background() {
    const body = document.querySelector("body");
    const IMG_NUMBER = 4;


    init();
    
    function init() {
        const randomNumber = genRandom();
        
        paintImage(randomNumber);
    }

    
    function genRandom() {
        const number = Math.floor(Math.random() * IMG_NUMBER);
        
        return number;
    }
    

    function paintImage(imgNumber) {
        const image = new Image();
        image.src = `/imgs/img${imgNumber + 1}.jpg`;
        image.classList.add("bgImage");
        image.addEventListener('load', () => body.appendChild(image));
    }
}