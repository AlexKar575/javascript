/**
 * Класс для представления книги.
 */
class Book {
    /**
     * Создает экземпляр книги.
     * @param {string} title - Название книги.
     * @param {number} pubYear - Год публикации.
     * @param {number} price - Цена книги.
     */
    constructor(title, pubYear, price) {
        this.title = title; // Используем сеттер
        this.pubYear = pubYear; // Используем сеттер
        this.#price = price; // Приватное поле устанавливается напрямую
    }

    /**
     * Выводит название и цену книги в консоль.
     */
    show() {
        console.log(`Книга "${this.title}" стоит ${this.price} руб.`);
    }

    /**
     * Сравнивает две книги по году публикации.
     * @static
     * @param {Book} bookA - Первая книга.
     * @param {Book} bookB - Вторая книга.
     * @returns {number} Положительное число, если A новее B; отрицательное, если старше; 0, если равны.
     */
    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }

    // --- Свойства ---

    #price; // Приватное свойство цены

    /** @private */ _pubYear; // Защищенное свойство года публикации

    /**
     * Получение названия книги.
     * @returns {string}
     */
    get title() {
        return this._title;
    }

    /**
     * Установка названия книги.
     * @param {string} value Новое название.
     * @throws {Error} Если значение не строка или пустая строка.
     */
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Название книги должно быть непустой строкой.");
        }
        this._title = value;
    }

    /**
     * Получение года публикации.
     * @returns {number}
     */
    get pubYear() {
        return this._pubYear;
    }

    /**
     * Установка года публикации.
     * @param {number} value Новый год публикации.
     * @throws {Error} Если значение не положительное число.
     */
    set pubYear(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error("Год публикации должен быть положительным целым числом.");
        }
        this._pubYear = value;
    }

    /**
     * Получение цены книги.
     * @returns {number}
     */
    get price() {
        return this.#price;
    }

    /**
     * Установка цены книги.
     * @param {number} value Новая цена.
     * @throws {Error} Если значение не положительное число.
     */
    set price(value) {
        if (typeof value !== 'number' || isNaN(value) || value <= 0) {
            throw new Error("Цена должна быть положительным числом.");
        }
        this.#price = value;
    }
}

/**
 * Проверяет, является ли объект пустым (не имеет собственных свойств).
 * @param {Object} obj Объект для проверки.
 * @returns {boolean} True, если объект пуст, иначе false.
 */
function isEmpty(obj) {
    return Object.keys(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0;
}

/**
 * Возвращает количество секунд, прошедших с начала текущего дня.
 * @returns {number} Число секунд.
 */
function getSecondsToday() {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

/**
 * Форматирует дату в строку вида "дд.мм.гг".
 * @param {Date} date Объект даты.
 * @returns {string} Отформатированная дата.
 */
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы с 0 до 11
    const year = String(date.getFullYear()).slice(-2); // Последние две цифры года
    return `${day}.${month}.${year}`;
}

// --- Основная функция для запуска всех тестов ---

/**
 * Функция, выполняющая все задания лабораторной работы.
 */
function runLab() {
    console.log("--- Задание 1: Класс Book и метод show ---");
    const book1 = new Book("Война и мир", 1869, 500);
    book1.show(); // Книга "Война и мир" стоит 500 руб.

    console.log("\n--- Задание 2: Геттеры, сеттеры и проверка значений ---");
    try {
        book1.title = ""; // Вызовет ошибку
    } catch (e) {
        console.error(e.message); // Название книги должно быть непустой строкой.
    }
    try {
        book1.pubYear = -100; // Вызовет ошибку
    } catch (e) {
        console.error(e.message); // Год публикации должен быть положительным целым числом.
    }
    try {
        book1.price = -50; // Вызовет ошибку
    } catch (e) {
        console.error(e.message); // Цена должна быть положительным числом.
    }

    console.log("\n--- Задание 3: Статический метод compare и сортировка ---");
    const books = [
        new Book("Преступление и наказание", 1866, 700),
        new Book("Мастер и Маргарита", 1966, 600),
        new Book("Евгений Онегин", 1833, 450)
    ];
    books.sort(Book.compare);
    console.log("Книги отсортированы по году публикации:");
    books.forEach(b => console.log(`${b.title}, ${b.pubYear}`));

    console.log("\n--- Задание 4: Функция isEmpty ---");
    console.log(isEmpty({})); // true
    console.log(isEmpty(Object.defineProperty({}, 'name', { value: 'John' }))); // false
    console.log(isEmpty({ [Symbol()]: true })); // false

    console.log("\n--- Задание 5: Методы addClass / removeClass ---");
    let obj = {
        className: 'open menu',
        /**
         * Добавляет класс cls к свойству className, если его там нет.
         * @param {string} cls Имя класса.
         * @returns {Object} Сам объект.
         */
        addClass(cls) {
            const classes = this.className.split(' ');
            if (!classes.includes(cls)) {
                classes.push(cls);
                this.className = classes.join(' ').trim();
            }
            return this;
        },
        /**
         * Удаляет класс cls из свойства className, если он есть.
         * @param {string} cls Имя класса.
         * @returns {Object} Сам объект.
         */
        removeClass(cls) {
            const classes = this.className.split(' ').filter(c => c !== '');
            this.className = classes.filter(c => c !== cls).join(' ').trim();
            return this;
        }
    };

    console.log(obj.addClass('new').addClass('menu')); // .addClass('menu') ничего не добавит
    console.log(obj.removeClass('open'));

    console.log("\n--- Задание 5: JSON stringify/parse ---");
    const jsonStr = JSON.stringify(obj, null, 2);
    console.log(jsonStr);
    const obj2 = JSON.parse(jsonStr);
    console.log("obj == obj2:", obj == obj2); // false
    console.log("Глубокое равенство:", JSON.stringify(obj) === JSON.stringify(obj2)); // true

    console.log("\n--- Задание 6: Функции для работы со временем ---");
    console.log("Секунд сегодня:", getSecondsToday());
    console.log(formatDate(new Date()));
}
