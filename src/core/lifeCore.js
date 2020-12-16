class GameLife {

    /**
     * Инициализация рабочего поля
     * @param canvas DOM - элемент canvas
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        /**
         * Толщина сетки
         * @type {number} - толщина сетки матрицы
         */
        this.ctx.lineWidth = 0.3;
        /**
         *
         * @type {} - Начальное состояние пикселей матрицы
         */
        this.pixels = {
            "22-34": 1
        };

    }

    /**
     * Функция обновления канваса при изменении размеров окна
     */
    onResizeWindow() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.countPixels = Math.round(this.width / this.step);
        this.countPixelsY = Math.round(this.height / this.step);
    }

    /**
     * Установка шага сетки
     * @param step - шаг сетки. Чем больше шаг, тем больше квадраты, и тем все работает
     */
    setStep(step) {
        this.step = step;
        this.countPixels = Math.round(this.width / this.step);
        this.countPixelsY = Math.round(this.height / this.step);
    }

    /**
     * Изменение координат - из координат квадратов в пиксели экрана
     * @param value - координата квадрата (пикселя) матрицы в порядковом счете (1,2,3,4...)
     * @returns {number} - координата квадрата (пикселя) матрицы в наэкранных пикселях
     */
    transformCoordinates(value) {
        return value * this.step + 1;
    }

    /**
     * Алиас для transformCoordinates
     * @param v
     * @returns {number}
     */
    tc(v) {
        return this.transformCoordinates(v);
    }

    /**
     * Функция рисования сетки на канвасе
     */
    drawMatrix() {
        for (let i = 0; i <= this.countPixels; i++) {
            this.ctx.beginPath()
            this.ctx.moveTo(i * this.step, 0);
            this.ctx.lineTo(i * this.step, this.height - 1);
            this.ctx.stroke()
            this.ctx.closePath();

            this.ctx.beginPath()
            this.ctx.moveTo(0, i * this.step);
            this.ctx.lineTo(this.height - 1, i * this.step);
            this.ctx.stroke()
            this.ctx.closePath();

        }
    }

    /**
     * Генерация рандомного цвета для квадрата пикселя в заданных пределах
     * @param r
     * @param g
     * @param b
     * @param a
     * @returns {string}
     */
    generateStyle(r, g, b, a) {
        let f = 10;
        let rt = this.rand(r - f, r + f);
        let gt = this.rand(g - f, g + f);
        let bt = this.rand(b - f, b + f);
        //console.log(rt,gt,bt,`rgba(${(rt<0)?0:rt}, ${(gt<0)?0:gt}, ${(bt<0)?0:bt}, ${a})`);
        return `rgba(${(rt < 0) ? 0 : rt}, ${(gt < 0) ? 0 : gt}, ${(bt < 0) ? 0 : bt}, ${a})`
    }

    /**
     * Рисование пикселя
     * @param x - координата по горизонтали
     * @param y - координата по вертикали
     */
    drawPixel(x, y) {
        this.ctx.fillStyle = this.generateStyle(231, 111, 81, 0.4);
        this.ctx.fillRect(this.tc(x), this.tc(y), this.step - 2, this.step - 2);
        this.pixels[`${x}-${y}`] = 1;

    }

    /**
     * Очистить пиксель
     * @param x
     * @param y
     */
    clearPixel(x, y) {
        this.ctx.clearRect(this.tc(x), this.tc(y), this.step - 2, this.step - 2);
        delete this.pixels[`${x}-${y}`];
    }

    /**
     * Проверить, установлен ли пиксель
     * @param x
     * @param y
     * @returns {boolean}
     */
    checkPixel(x, y) {
        return (this.pixels[`${x}-${y}`] !== undefined);
    }

    /**
     * Проверить условия для клетки
     * @param x
     * @param y
     * @returns {number}  1 - зародилась 2 - осталась жива 3 - погибла
     */
    checkNested(x, y) {
        let alive = this.checkPixel(x, y);
        let aliveCondition = 0;
        if (this.checkPixel(x + 1, y)) aliveCondition++;
        if (this.checkPixel(x + 1, y + 1)) aliveCondition++;
        if (this.checkPixel(x + 1, y - 1)) aliveCondition++;
        if (this.checkPixel(x - 1, y)) aliveCondition++;
        if (this.checkPixel(x - 1, y + 1)) aliveCondition++;
        if (this.checkPixel(x - 1, y - 1)) aliveCondition++;
        if (this.checkPixel(x, y + 1)) aliveCondition++;
        if (this.checkPixel(x, y - 1)) aliveCondition++;

        if (!alive && aliveCondition === 3) // 1 - зародилась 2 - осталась жива 3 - погибла
            return 1;


        if (alive && (aliveCondition === 3 || aliveCondition === 2))
            return 2;


        return 3;

    }

    /**
     * Рисование пикселя при клики мышкой
     * @param event
     */
    setPixelsByMouse(event) {
        const rect = this.canvas.getBoundingClientRect()
        const x = Math.floor((event.clientX - rect.left) / this.step);
        const y = Math.floor((event.clientY - rect.top) / this.step);
        this.drawPixel(x, y);
    }

    /**
     * Функция отрисовки следующего кадра
     */
    tick() {

        for (let i = 0; i <= this.countPixels; i++) {
            for (let j = 0; j <= this.countPixelsY; j++) {
                switch (this.checkNested(i, j)) {
                    case 1:
                        this.drawPixel(i, j);
                        break;
                    case 2:
                        continue;

                    case 3:
                        this.clearPixel(i, j);
                        break;
                    default:
                        continue;


                }
            }
        }
    }

    /**
     * Рандомное значение из диапазона:
     * @param min - минимальное
     * @param max - максимальное
     * @returns {number}
     */
    rand(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    /**
     * Сбросить все пиксели
     */
    reset() {
        this.pixels = {}
    }

    /**
     * Сохранить пиксели
     * @returns {string}
     */
    export() {
        return JSON.stringify(this.pixels);
    }

    /**
     * Импортировать пиксели для работы
     * @param value
     * @returns {*}
     */
    import(value) {
        this.pixels = value;
        return value;
    }


}

export default GameLife