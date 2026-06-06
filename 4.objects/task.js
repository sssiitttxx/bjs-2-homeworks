function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Алексей", "мужской", 19);
let student2 = new Student("Мария", "женский", 18);
let student3 = new Student("Олег", "мужской", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks) {
    this.marks.push(...marksToAdd);
  } else {
    console.log("Студент отчислен");
  }
};

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  } else {
    const GPA = this.marks.reduce((acc, currentMark) => acc + currentMark, 0);
    return GPA / this.marks.length;
  }
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
