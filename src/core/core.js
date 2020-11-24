class Core {
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
}

export default new Core;