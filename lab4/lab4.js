
/**
 * Класс для представления книги с валидацией полей.
 * @class
 */
class Book {
    /**
     * Приватное поле для хранения цены.
     * @private
     */
    #price;

    /**
     * Создает экземпляр книги.
     * @param {string} title - Заголовок книги (не может быть пустой строкой).
     * @param {number} pubYear - Год публикации (должен быть положительным числом).
     * @param {number} price - Цена книги (должна быть положительным числом).
     */
    constructor(title, pubYear, price) {
        let storedTitle;
        Object.defineProperty(this, 'title', {
            get() {
                return storedTitle;
            },
            set(value) {
                if (value === "") {
                    throw new Error("Заголовок не может быть пустым");
                }
                storedTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        this.title = title;
        this.pubYear = pubYear;
        this.#price = price;
    }

    /**
     * Получает год публикации книги.
     * @returns {number} Год публикации.
     */
    get pubYear() {
        return this._pubYear;
    }

    /**
     * Устанавливает год публикации книги с валидацией.
     * @param {number} value - Новый год публикации.
     */
    set pubYear(value) {
        if (value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this._pubYear = value;
    }

    /**
     * Получает цену книги.
     * @returns {number} Цена книги.
     */
    get price() {
        return this.#price;
    }

    /**
     * Устанавливает цену книги с валидацией.
     * @param {number} value - Новая цена книги.
     */
    set price(value) {
        if (value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this.#price = value;
    }

    /**
     * Выводит заголовок и цену книги в консоль.
     */
    show() {
        console.log(`${this.title}: ${this.#price}`);
    }

    /**
     * Статический метод для сравнения двух книг по году публикации.
     * @static
     * @param {Book} a - Первая книга.
     * @param {Book} b - Вторая книга.
     * @returns {number} Разница лет (a.pubYear - b.pubYear).
     */
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

/**
 * Проверяет, является ли объект пустым, включая неперечисляемые свойства и символы.
 * @param {Object} obj - Проверяемый объект.
 * @returns {boolean} True, если объект пуст, иначе false.
 */unction isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0;
}

/**
 * Возвращает количество секунд, прошедших с начала текущего дня.
 * @returns {number} Секунды с полуночи.
 */unction getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.floor(diff / 1000);
}

/**
 * Форматирует объект Date в строку формата "дд.мм.гг" (например, 15.09.06).
 * @param {Date} date - Объект даты для форматирования.
 * @returns {string} Отформатированная строка даты.
 */unction formatDate(date) {
    let day = date.getDate();
s    let month = date.getMonth() + 1; // Месяцы с 0 до 11
    let year = date.getFullYear().toString().substr(-2);
s    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
s}
s
// Пример использования форматирования даты:
slet date = new Date(2006, 8, 15); // Сентябрь — это 8-й месяц (индексация с 0)
sconsole.log(formatDate(date)); // Выведет: 15.09.06
