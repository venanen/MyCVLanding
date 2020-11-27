import GameLife from "./lifeCore";
import initialPixels from "@/plugins/Life/initialPixels";
class Core {
    constructor(GameLife) {
        this.hash = window.location.hash;
        this._gameLife = GameLife;
        this.life = {} //instance of GameLifeController
    }
    rnd(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.round(rand);
    }

    offset(el) {
        var rect = el.getBoundingClientRect(),

            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return Math.floor(rect.top + scrollTop);
    }

    placeNewElementByClick(event, el) {
        var div = document.createElement('div');
        div.style.position = 'absolute';
        //div.style.left = e.clientX;   // Координаты дива X и Y не забываем указать еденицы измерения,
        //div.style.top = e.clientY;    // например 40px или 20%
        div.style.background = 'red';   //  Див с красной заливкой ))
        div.appendChild(document.createTextNode('клик🤖'));  //  Добавим текст в див
        div.setAttribute("style", `position: absolute; top: ${event.clientY - this.offset(el)}px; left: ${event.clientX}px;`)
        div.setAttribute("data-scroll", '')
        div.setAttribute("data-scroll-speed", this.rnd(0, 3));
        el.appendChild(div);   //  Добавим наш див на страницу
    }

    isMobile() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
    isLifeRun(){
        return !(/disablelife/.test(this.hash));
    }
    isUseSmooth(){
        return /smooth/.test(this.hash)
    }

    mountGameLife(canvas){
        canvas.width = document.documentElement.clientWidth+60;
        canvas.height = canvas.parentElement.offsetHeight;
        let frameControl = 2,
            frameCurrent = 0;

        const gL = new this._gameLife(canvas);
        gL.setStep(40);
        gL.import(initialPixels);
        canvas.addEventListener('mousedown', function (e) {
            gL.setPixelsByMouse(e);
        })
        // eslint-disable-next-line no-unused-vars
        let animation = "";
        this.life.start = () => {

            if (frameCurrent++ > frameControl) {
                frameCurrent = 0;
                gL.tick()
            }
            animation = window.requestAnimationFrame(this.life.start)
        }

        this.life.stop = () => {
            window.cancelAnimationFrame(animation);
        }
        this.life.reset = () => {
            gL.reset();
        }
        this.life.start();
    }
}
let core = new Core(GameLife);
export default core;