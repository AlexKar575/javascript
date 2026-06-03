/**
 * Класс для представления книги с валидацией свойств.
 */
class Book {
    /**
     * Создает экземпляр книги.
     * @param {string} title - Заголовок книги.
     * @param {number} pubYear - Год публикации.
     * @param {number} price - Цена книги.
     */
    constructor(title, pubYear, price) {
        let _title;
        Object.defineProperty(this, 'title', {
            get() {
                return _title;
            },
            set(value) {
                if (value === "") {
                    throw new Error("Заголовок не может быть пустым");
                }
                _title = value;
            },
            enumerable: true,
            configurable: true
        });

        // Используем сеттеры для валидации при инициализации
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
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

// --- Геттеры и сеттеры для Book ---
Object.defineProperty(Book.prototype, 'pubYear', {
    get() {
        return this._pubYear;
    },
    set(value) {
        if (value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this._pubYear = value;
    },
    enumerable: true,
    configurable: true
});

Object.defineProperty(Book.prototype, 'price', {
    get() {
        return this._price;
    },
    set(value) {
        if (value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this._price = value;
    },
    enumerable: true,
    configurable: true
});


/**
 * Проверяет, есть ли у объекта любые собственные свойства.
 * Возвратит true, если объект полностью пустой.
 * @param {Object} obj - Любой объект.
 * @returns {boolean}
 */
function isEmpty(obj) {
    return (
        Object.getOwnPropertyNames(obj).length === 0 && // Обычные свойства
        Object.getOwnPropertySymbols(obj).length === 0 // Свойства-символы
    );
}


/**
 * Класс для управления строкой классов (аналог classList).
 */
class ClassListManager {
    /**
     * Создает менеджер классов.
     * @param {string} initialClasses - Начальная строка классов.
     */
    constructor(initialClasses = '') {
        // Приватное поле для хранения массива классов
        this.#classes = initialClasses.trim().split(/\s+/).filter(Boolean);
    }

    /** @private */
    #classes;

    /**
     * Возвращает строку классов.
     * @returns {string}
     */
    get className() {
        return this.#classes.join(' ');
    }

    /**
     * Добавляет класс, если его еще нет.
     * @param {string} cls - Имя класса для добавления.
     * @returns {ClassListManager}
     */
    addClass(cls) {
        if (!this.#classes.includes(cls)) {
            this.#classes.push(cls);
        }
        return this;
    }

    /**
     * Удаляет класс, если он существует.
     * @param {string} cls - Имя класса для удаления.
     * @returns {ClassListManager}
     */
    removeClass(cls) {
        const index = this.#classes.indexOf(cls);
        if (index !== -1) {
            this.#classes.splice(index, 1);
        }
        return this;
    }
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
    const year = date.getFullYear();

    const pad = (n) => n < 10 ? '0' + n : n;

    return `${pad(day)}.${pad(month)}.${year}`;
}


// --- Демонстрационный код ---
function runDemo() {
    console.log("--- Демонстрация JSON сериализации ---");

    // Используем новый класс для управления классами
    const obj = new ClassListManager('open menu');

    const jsonStr = JSON.stringify(obj);
    
    console.log("JSON представление объекта obj:");
    console.log(jsonStr); // Выведет {"className":"open menu"}

    const obj2 = JSON.parse(jsonStr);
    
    // Проверка работы геттера className
    console.log("Объект после декодирования:", obj2);
    
    // Проверка равенства строк классов
    console.log("Равенство className:", obj.className === obj2.className);
}

// Запускаем демонстрацию после загрузки скрипта
runDemo();
