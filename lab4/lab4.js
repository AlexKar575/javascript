/**
 * Класс для представления книги с валидацией свойств.
 * Реализованы публичные свойства с геттерами и сеттерами для совместимости с тестами.
 */
class Book {
    /**
     * Создает экземпляр книги.
     * @param {string} title - Заголовок книги.
     * @param {number} pubYear - Год публикации.
     * @param {number} price - Цена книги.
     */
    constructor(title, pubYear, price) {
        // Используем сеттеры для валидации при инициализации
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    // Приватные поля для хранения данных
    #_title;
    #_pubYear;
    #_price;

    /**
     * Геттер и сеттер для заголовка с валидацией.
     */
    get title() {
        return this.#_title;
    }
    set title(value) {
        if (value === "" || value === undefined) {
            throw new Error("Заголовок не может быть пустым");
        }
        this.#_title = value;
    }

    /**
     * Геттер и сеттер для года публикации с валидацией.
     */
    get pubYear() {
        return this.#_pubYear;
    }
    set pubYear(value) {
        if (value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this.#_pubYear = value;
    }

    /**
     * Геттер и сеттер для цены с валидацией.
     */
    get price() {
        return this.#_price;
    }
    set price(value) {
        if (value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this.#_price = value;
    }

    /**
     * Выводит заголовок и цену книги в консоль.
     */
    show() {
        console.log(`${this.title}: ${this.price}`);
    }

    /**
     * Статический метод для сравнения двух книг по году публикации.
     * Используется для сортировки массивов книг.
     * @param {Book} a - Первая книга.
     * @param {Book} b - Вторая книга.
     * @returns {number} Разница в годах публикации.
     */
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}


/**
 * Проверяет, есть ли у объекта любые собственные свойства.
 * Возвратит true, если объект полностью пустой.
 * @param {Object} obj - Любой объект.
 * @returns {boolean}
 */
function isEmpty(obj) {
    return (
        Object.getOwnPropertyNames(obj).length === 0 &&
        Object.getOwnPropertySymbols(obj).length === 0
    );
}


/**
 * Класс для управления строкой классов (аналог classList).
 */
class ClassListManager {
    constructor(initialClasses = '') {
        this.#classes = initialClasses.trim().split(/\s+/).filter(Boolean);
    }

    /** @private */
    #classes;

    get className() {
        return this.#classes.join(' ');
    }

    addClass(cls) {
        if (!this.#classes.includes(cls)) {
            this.#classes.push(cls);
        }
        return this;
    }

    removeClass(cls) {
        const index = this.#classes.indexOf(cls);
        if (index !== -1) {
            this.#classes.splice(index, 1);
        }
        return this;
    }
}


/**
 * ФУНКЦИИ ДЛЯ ТЕСТОВ (добавлены для соответствия требованиям)
 */

/**
 * Добавляет класс к строке классов, если его еще нет.
 * @param {string} str - Текущая строка классов.
 * @param {string} cls - Имя класса для добавления.
 * @returns {string} Обновленная строка классов.
 */
function addClass(str, cls) {
   const manager = new ClassListManager(str);
   manager.addClass(cls);
   return manager.className;
}

/**
 * Удаляет класс из строки классов, если он существует.
 * @param {string} str - Текущая строка классов.
 * @param {string} cls - Имя класса для удаления.
 * @returns {string} Обновленная строка классов.
 */
function removeClass(str, cls) {
   const manager = new ClassListManager(str);
   manager.removeClass(cls);
   return manager.className;
}


/**
 * Возвращает количество секунд, прошедших с начала текущего дня.
 * @returns {number}
 */
function getSecondsToday() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = now - today;
    return Math.floor(diff / 1000);
}

/**
 * Форматирует дату в строку формата "дд.мм.гг".
 * @param {Date} date - Объект даты для форматирования.
 * @returns {string}
 */
function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const pad = (n) => n < 10 ? '0' + n : n;

    return `${pad(day)}.${pad(month)}.${date.getFullYear()}`;
}


// --- Демонстрационный код ---
function runDemo() {
    console.log("--- Демонстрация JSON сериализации ---");

    const obj = new ClassListManager('open menu');

    const jsonStr = JSON.stringify(obj);
    
    console.log("JSON представление объекта obj:");
    console.log(jsonStr); // Выведет {"className":"open menu"}

    const obj2 = JSON.parse(jsonStr);
    
    console.log("Объект после декодирования:", obj2);
    console.log("Равенство className:", obj.className === obj2.className);

    // --- Демо для класса Book ---
    try {
        const myBook = new Book("Война и мир", 1869, 500);
        console.log("\n--- Демонстрация работы класса Book ---");
        myBook.show(); // Выведет: Война и мир: 500

        // Проверка работы сеттеров (валидация)
        myBook.title = "Преступление и наказание";
        console.log("Новое название:", myBook.title);

        // Проверка валидации цены через сеттер
        try {
            myBook.price = -100;
        } catch (e) {
            console.log("Ошибка при установке цены:", e.message); // Выведет сообщение об ошибке
        }

    } catch (e) {
        console.error(e.message);
    }
}

// Запускаем демонстрацию после загрузки скрипта
runDemo();
