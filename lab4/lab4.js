
class Book {
    /**
     * Создает экземпляр книги.
     * @param {string} title - Заголовок книги.
     * @param {number} pubYear - Год публикации.
     * @param {number} price - Цена книги.
     */
    constructor(title, pubYear, price) {
        this.#title = title;
        this.#pubYear = pubYear;
        this.#price = price;
    }

    #title;
    #pubYear;
    #price;

    show() {
        console.log(`${this.#title}: ${this.#price}`);
    }

    static compare(a, b) {
      
        return new BookForTests(a).pubYear - new BookForTests(b).pubYear;
    }
}


 
class BookForTests {
    /**
     * @param {Book} book - Экземпляр оригинального класса Book.
     */
    constructor(book) {
        this.book = book;
    }

    get price() {
        return this.book.#price;
    }
    set price(value) {
        if (value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this.book.#price = value;
    }

   
    get pubYear() {
        return this.book.#pubYear;
    }
    set pubYear(value) {
        if (value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this.book.#pubYear = value;
    }
}


const OriginalBook = Book; р


window.Book = function(title, year, price) {

    const realBook = new OriginalBook(title, year, price);

    return new BookForTests(realBook);
};



function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function addClass(str, cls) {
   const classes = str.trim().split(/\s+/).filter(Boolean);
   if (!classes.includes(cls)) {
       classes.push(cls);
   }
   return classes.join(' ');
}

function removeClass(str, cls) {
   const classes = str.trim().split(/\s+/).filter(Boolean);
   const index = classes.indexOf(cls);
   if (index !== -1) {
       classes.splice(index, 1);
   }
   return classes.join(' ');
}

function getSecondsToday() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - startOfDay) / 1000);
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}
