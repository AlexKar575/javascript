// Класс Book представляет книгу с названием, годом публикации и ценой
class Book {
    // Защищённые поля (доступны по соглашению внутри класса и наследникам)
    _title;
    _pubYear;
    
    // Приватное поле (доступно только внутри класса)
    #price;

    /**
     * Создает объект книги.
     * @param {string} title - название книги
     * @param {number} pubYear - год публикации
     * @param {number} price - цена книги
     */
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.#price = price;
    }

    /**
     * Возвращает название книги.
     */
    get title() {
        return this._title;
    }

    /**
     * Устанавливает название книги.
     * Заголовок не может быть пустым.
     */
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Заголовок не может быть пустым");
        }
        this._title = value;
    }

    /**
     * Возвращает год публикации книги.
     */
    get pubYear() {
        return this._pubYear;
    }

    /**
     * Устанавливает год публикации книги.
     * Год должен быть положительным целым числом.
     */
    set pubYear(value) {
        if (
            typeof value !== 'number' ||
            !Number.isInteger(value) ||
            value <= 0
        ) {
            throw new Error("Год публикации должен быть положительным целым числом");
        }
        this._pubYear = value;
    }

    /**
     * Возвращает цену книги.
     */
    get price() {
        return this.#price;
    }

    /**
     * Устанавливает цену книги.
     * Цена должна быть положительным числом.
     */
    set price(value) {
        if (
            typeof value !== 'number' ||
            !Number.isFinite(value) ||
            value <= 0
        ) {
            throw new Error("Цена должна быть положительным числом");
        }
        this.#price = value;
    }

    /**
     * Выводит название и цену книги в консоль.
     */
    show() {
        console.log(`${this.title}: ${this.price}`);
    }

    /**
     * Сравнивает две книги по году публикации.
     * @param {Book} a - первая книга
     * @param {Book} b - вторая книга
     * @returns {number}
     */
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

/**
 * Проверяет, является ли объект пустым.
 * Учитываются обычные и символьные свойства.
 * @param {Object} obj
 * @returns {boolean}
 */
function isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 0 &&
           Object.getOwnPropertySymbols(obj).length === 0;
}

// Объект для работы с CSS-классами
let obj = {
    className: 'open menu',

    /**
     * Добавляет класс, если его еще нет.
     * @param {string} cls
     * @returns {Object}
     */
    addClass: function (cls) {
        if (!this.className.split(' ').includes(cls)) {
            this.className += ' ' + cls;
        }
        this.className = this.className.trim();
        return this;
    },

    /**
     * Удаляет класс, если он существует.
     * @param {string} cls
     * @returns {Object}
     */
    removeClass: function (cls) {
        let classes = this.className.split(' ');
        let index = classes.indexOf(cls);

        if (index !== -1) {
            classes.splice(index, 1);
            this.className = classes.join(' ');
        }

        return this;
    }
};

// Преобразование объекта в JSON
const jsonStr = JSON.stringify(obj, null, 2);

console.log("JSON представление объекта obj:");
console.log(jsonStr);

// Восстановление объекта из JSON
const obj2 = JSON.parse(jsonStr);

console.log("Объект после декодирования:", obj2);
console.log("Равенство className:", obj.className === obj2.className);

/**
 * Возвращает количество секунд,
 * прошедших с начала текущего дня.
 * @returns {number}
 */
function getSecondsToday() {
    let now = new Date();
    let today = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    let diff = now - today;

    return Math.floor(diff / 1000);
}

/**
 * Форматирует дату в строку вида "дд.мм.гг".
 * @param {Date} date
 * @returns {string}
 */
function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear().toString().slice(-2);

    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
}
