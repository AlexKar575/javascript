// Класс Book
class Book {
    constructor(title, pubYear, price) {
        this.title = title;      // Используем сеттер для проверки
        this._pubYear = pubYear; // Защищенное свойство (через сеттер)
        this.#price = price;     // Приватное свойство (через сеттер)
    }

    // Приватное поле цены
    #price;

    // Метод для вывода информации в консоль
    show() {
      console.log(`${this.title}: ${this.#price}`);
    }

    // Геттеры и сеттеры для title
    get title() {
      return this._title;
    }
    set title(value) {
      if (value === '') {
          throw new Error("Название книги не может быть пустой строкой");
      }
      this._title = value;
    }

    // Геттеры и сеттеры для pubYear (защищенное свойство)
    get pubYear() {
      return this._pubYear;
    }
    set pubYear(value) {
      if (typeof value !== 'number' || value <= 0) {
          throw new Error("Год публикации должен быть положительным числом");
      }
      this._pubYear = value;
    }

    // Геттеры и сеттеры для price (приватное свойство)
    get price() {
      return this.#price;
    }
    set price(value) {
      if (typeof value !== 'number' || value <= 0) {
          throw new Error("Цена должна быть положительным числом");
      }
      this.#price = value;
    }

    // Статический метод для сравнения книг по году публикации
    static compare(a, b) {
      return a.pubYear - b.pubYear;
    }
}


// Функция isEmpty
function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    // Проверка на символьные свойства и неперечисляемые свойства c hasOwnProperty,
    // так как цикл for..in не видит неперечисляемые свойства.
    return Object.getOwnPropertySymbols(obj).length === 0 && !Object.getOwnPropertyDescriptor(obj, 'name');
}


// Функция getSecondsToday
function getSecondsToday() {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}


// Функция formatDate
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы от 0 до 11
    const year = String(date.getFullYear()).slice(-2);         // Последние две цифры года

    return `${day}.${month}.${year}`;
}
