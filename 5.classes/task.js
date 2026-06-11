class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;

    this._state = 100;
    this.type = null;
  }

  get state() {
    return this._state;
  }

  set state(NewState) {
    if (NewState < 0) {
      this._state = 0;
    } else if (NewState > 100) {
      this._state = 100;
    } else {
      this._state = NewState;
    }
  }

  fix() {
    this.state = this.state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);

    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);

    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    return this.books.find((book) => book[type] === value) || null;
  }
  giveBookByName(bookName) {
    const index = this.books.findIndex((book) => book.name === bookName);
    if (index === -1) {
      return null;
    }
    const deletedBook = this.books.splice(index, 1)[0];
    return deletedBook;
  }
}

// Тестирование
const library = new Library("Библиотека имени Ленина");
library.addBook(new NovelBook("Лев Толстой", "Война и мир", 1869, 1300));
library.addBook(new FantasticBook("Макс Максимов", "Апокалипсис", 2019, 416));
library.addBook(
  new DetectiveBook(
    "Агата Кристи",
    "Убийство в Восточном экспрессе",
    1934,
    256,
  ),
);

let book1919 = library.findBookBy("releaseDate", 1919);
if (!book1919) {
  library.addBook(new Book("Неизвестный автор", "Тайны 1919 года", 1919, 300));
}

const givenBook = library.giveBookByName("Апокалипсис");
givenBook.state = 20;
givenBook.fix();
library.addBook(givenBook);



class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (this.marks[subject] === undefined) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined || this.marks[subject].length === 0) {
      return 0;
    }
    const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);

    if (subjects.length === 0) {
      return 0;
    }

    const totalAverageSum = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);
    return totalAverageSum / subjects.length;
  }
}


const student = new Student("Орлов Андрей");
student.addMark(5, 'Английский');
student.addMark(4, 'Физика');
student.addMark(5, 'Информатика');
student.addMark(3, 'Информатика');
student.addMark(3, 'Физика');
console.log(student.getAverageBySubject('Информатика'));
console.log(student.getAverage());
