// --- Задание 1: Класс Book с методом show ---
class Book {
    constructor(title, pubYear, price) {
        this.title = title;
        this._pubYear = pubYear;
        this.#price = price;
    }

    show() {
        console.log(`Название: ${this.title}, Цена: ${this.#price}`);
    }
}
const book1 = new Book("Война и мир", 1869, 1500);
book1.show();
document.getElementById('task1').textContent = 'В консоль выведено: "Название: Война и мир, Цена: 1500"';


// --- Задание 2: Геттеры, сеттеры и модификаторы доступа ---
class Book {
   
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Название книги не может быть пустой строкой.");
        }
        this._title = value.trim();
    }
    get title() {
        return this._title;
    }

    
    set pubYear(value) {
        const num = Number(value);
        if (isNaN(num) || num <= 0) {
            throw new Error("Год публикации должен быть положительным числом.");
        }
        this._pubYear = num;
    }
    get pubYear() {
        return this._pubYear;
    }

    // Приватное свойство price (требование)
    set price(value) {
        const num = Number(value);
        if (isNaN(num) || num <= 0) {
            throw new Error("Цена должна быть положительным числом.");
        }
        this.#price = num;
    }
    get price() {
        return this.#price;
    }

    // Приватное поле класса
    #price;
}

try {
    const book2 = new Book("Мастер и Маргарита", 1966, 800);

    // Тестирование сеттеров и геттеров
    book2.title = "   Преступление и наказание   "; // Пробелы обрежутся
    console.log('Новое название:', book2.title); // Проверка геттера

} catch (e) {
    console.error(e.message);
}
document.getElementById('task2').textContent = 'Геттеры/сеттеры реализованы. Поле title - публичное, pubYear - защищенное (_pubYear), price - приватное (#price).';


// --- Задание 3: Статический метод compare и сортировка ---
class Book {


    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}
const books = [
    new Book("Книга С", 2010, 500),
    new Book("Книга А", 1995, 300),
    new Book("Книга Б", 2021, 700)
];
books.sort(Book.compare);
console.log("Сортировка по году публикации:");
books.forEach(b => console.log(`${b.title} - ${b.pubYear}`));
document.getElementById('task3').textContent = 'Массив books отсортирован по возрастанию года публикации.';


// --- Задание 4: Функция isEmpty ---
function isEmpty(obj) {
    // Проверка на наличие перечисляемых свойств
    for (let key in obj) return false;

    // Проверка на наличие символьных свойств
    const symbols = Object.getOwnPropertySymbols(obj);
    if (symbols.length > 0) return false;

    // Проверка на наличие неперечисляемых свойств
    const descs = Object.getOwnPropertyDescriptors(obj);
    for (let key in descs) {
        if (!descs[key].enumerable) return false;
    }

    return true;
}

// Тестирование функции isEmpty три раза (требование)
const testObj1 = {}; // Пустой объект
const testObj2 = { [Symbol()]: true }; // Объект с символьным свойством
const testObj3 = Object.defineProperty({}, 'name', { value: 'John', enumerable: false }); // Объект с неперечисляемым свойством

console.log('isEmpty(testObj1):', isEmpty(testObj1)); // true
console.log('isEmpty(testObj2):', isEmpty(testObj2)); // false
console.log('isEmpty(testObj3):', isEmpty(testObj3)); // false

document.getElementById('task4').textContent = `Функция isEmpty протестирована:
isEmpty({}) -> ${isEmpty({})}
isEmpty({[Symbol()]: true}) -> ${isEmpty({[Symbol()]: true})}
isEmpty(скрытое свойство) -> ${isEmpty(testObj3)}`;


// --- Задание 5: Методы addClass / removeClass и JSON ---
let obj = {
    className: 'open menu',
};
obj.addClass = function(cls) {
    const classes = this.className.split(' ');
    if (!classes.includes(cls)) {
        classes.push(cls);
        this.className = classes.join(' ').trim();
    }
};
obj.removeClass = function(cls) {
   const classes = this.className.split(' ').filter(c => c !== cls);
   this.className = classes.join(' ').trim();
};
obj.addClass('new'); // 'open menu new'
obj.addClass('open'); // 'open menu new' (не добавится)
obj.removeClass('menu'); // 'open new'
console.log(obj.className); // "open new"

// JSON.stringify и JSON.parse с форматированием
const jsonStr = JSON.stringify(obj, null, 2); 
console.log(jsonStr);
const obj2 = JSON.parse(jsonStr);
console.log('obj === obj2:', obj === obj2); // false (разные объекты)
console.log('Содержимое равно:', JSON.stringify(obj) === JSON.stringify(obj2)); // true

document.getElementById('task5').textContent = `Методы addClass/removeClass работают корректно.
JSON-строка:
${jsonStr}
Равенство объектов (obj === obj2): false`;


// --- Задание 6: Функции getSecondsToday и formatDate ---
function getSecondsToday() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - startOfDay) / 1000);
}
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}
console.log("Секунд с начала дня:", getSecondsToday());
console.log("Форматированная дата:", formatDate(new Date()));
document.getElementById('task6').textContent = `Секунд с начала дня: ${getSecondsToday()}
Форматированная дата: ${formatDate(new Date())}`;
window.Book = Book;
window.isEmpty = isEmpty;
window.getSecondsToday = getSecondsToday;
window.formatDate = formatDate;
