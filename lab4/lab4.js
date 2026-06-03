// Класс Book представляет книгу с заголовком, годом публикации и ценой
class Book {
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    // Геттер для получения заголовка книги
    get title() {
        return this._title;
    }

    // Сеттер для установки заголовка книги
    set title(value) {
        if (value === "") {
            throw new Error("Заголовок не может быть пустым");
        }
        this._title = value;
    }

    // Геттер для получения года публикации книги
    get pubYear() {
        return this._pubYear;
    }

    // Сеттер для установки года публикации книги
    set pubYear(value) {
        if (value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this._pubYear = value;
    }

    // Геттер для получения цены книги
    get price() {
        return this._price;
    }

    // Сеттер для установки цены книги
    set price(value) {
        if (value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this._price = value;
    }

    // Метод для вывода заголовка и цены книги в консоль
    show() {
        console.log(`${this._title}: ${this._price}`);
    }

    // Статический метод для сравнения книг по году публикации
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

// Функция для проверки, пуст ли объект, включая неперечисляемые свойства
function isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0;
}

// Объект с методами для работы с классами
let obj = {
    className: 'open menu',
    // Метод для добавления класса, если его еще нет
    addClass: function (cls) {
        if (!this.className.split(' ').includes(cls)) {
            this.className += ' ' + cls;
        }
        this.className = this.className.trim();
        return this;
    },
    // Метод для удаления класса, если он существует
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

// Функция для получения количества секунд с начала текущего дня
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.floor(diff / 1000);
}

// Функция для форматирования даты в строку формата "дд.мм.гг"
function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear().toString().substr(-2);
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
}
