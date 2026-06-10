/**
 * Класс для создания объекта книги с приватной ценой, годом публикации и публичным заголовком.
 */
class Book {
    #price;
    #pubYear;

    /**
     * Создает экземпляр книги.
     * @param {string} title - Заголовок книги. Не может быть пустой строкой.
     * @param {number} pubYear - Год публикации. Должен быть положительным числом.
     * @param {number} price - Цена книги. Должна быть положительным числом.
     * @throws {Error} Если данные не проходят валидацию.
     */
    constructor(title, pubYear, price) {
        this.title = title; // Используем сеттер для валидации
        this.pubYear = pubYear; // Используем сеттер для валидации
        this.price = price;   // Используем сеттер для валидации
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (value === "") {
            throw new Error("Заголовок не может быть пустым");
        }
        this._title = value;
    }

    get pubYear() {
        return this.#pubYear;
    }

    set pubYear(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this.#pubYear = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this.#price = value;
    }

    show() {
        console.log(`${this.title}: ${this.#price}`);
    }

    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }

  
    /**
     * Добавляет CSS-класс к строке классов книги.
     * @param {string} cls - Имя класса для добавления.
     * @returns {string} Обновленная строка классов.
     */
    addClass(cls) {
        let arr = this.className.trim().split(/\s+/);
        if (!arr.includes(cls)) {
            arr.push(cls);
            this.className = arr.join(' ');
        }
        return this.className;
    }

    /**
     * Удаляет CSS-класс из строки классов книги.
     * @param {string} cls - Имя класса для удаления.
     * @returns {string} Обновленная строка классов.
     */
    removeClass(cls) {
        let arr = this.className.trim().split(/\s+/);
        let idx = arr.indexOf(cls);
        if (idx !== -1) {
            arr.splice(idx, 1);
            this.className = arr.join(' ');
        }
        return this.className;
    }
}

// --- ТЕСТИРОВАНИЕ ФУНКЦИЙ ---

console.log("--- Тестирование isEmpty ---");
let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";
console.log(isEmpty(schedule)); // false

Object.defineProperty(schedule, "nonEnum", {
    value: "невидимое свойство",
    enumerable: false
});
console.log(isEmpty(schedule)); // false, т.к. есть собственное свойство (хоть и неперечисляемое)

console.log("\n--- Тестирование методов работы со строками ---");
let obj = { className: 'open menu' };
obj.addClass('newClass');
console.log(obj.className); // 'open menu newClass'

obj.addClass('open'); 
console.log(obj.className); // 'open menu newClass'

obj.removeClass('open');
console.log(obj.className); // 'menu newClass'

console.log("\n--- Тестирование функций даты ---");
console.log(getSecondsToday()); // Текущее количество секунд с начала дня

const dateToFormat = new Date(2006, 8, 15);
console.log(formatDate(dateToFormat));

