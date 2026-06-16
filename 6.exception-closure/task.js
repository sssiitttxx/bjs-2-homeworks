function parseCount(value) {
  const parsed = Number.parseFloat(value);
  if (Number.isNaN(parsed)) {
    throw new Error("Невалидное значение");
  }
  return parsed;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(side1, side2, side3) {
    if (
      side1 + side2 <= side3 ||
      side1 + side3 <= side2 ||
      side2 + side3 <= side1
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this._side1 = side1;
    this._side2 = side2;
    this._side3 = side3;
  }

  get perimeter() {
    return this._side1 + this._side2 + this._side3;
  }
  get area() {
    const p = this.perimeter / 2;
    const area = Math.sqrt(
      p * (p - this._side1) * (p - this._side2) * (p - this._side3),
    );
    return Math.round(area * 1000) / 1000;
  }
}

function getTriangle(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
