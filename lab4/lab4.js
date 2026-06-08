class Book {
  constructor(title, year, price) {
    this._title = title;
    this._year = year;
    this._price = price;
  }

  // Метод для вывода информации о книге
  show() {
    console.log(`${this.title}, ${this.price}₽`);
  }

  // Геттеры и сеттеры с валидацией
  get title() { return this._title; }
  set title(value) {
    if (value === '' || value === undefined) {
      throw new Error('Пустой заголовок');
    }
    this._title = value;
  }

  get year() { return this._year; }
  set year(value) {
    if (value < 0) {
      throw new Error('Отрицательный год');
    }
    this._year = value;
  }

  get price() { return this._price; }
  set price(value) {
    if (value < 0) {
      throw new Error('Отрицательная цена');
    }
    this._price = value;
  }

  // Статический метод для сортировки массива книг по году публикации
  static compare(a, b) {
    return a.year - b.year;
  }
}
