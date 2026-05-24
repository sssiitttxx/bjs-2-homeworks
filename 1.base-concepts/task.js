"use strict"
function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  if ( d < 0 ) {
    return [];
  } else if ( d === 0) {
    const x = -b / (2 * a )
    return [x];
  } else {
    const x1 = (-b + Math.sqrt(d) )/(2*a);
    const x2 = (-b - Math.sqrt(d) )/(2*a);
    return [x1, x2]
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;

  let S = amount - contribution;
  if ( S <= 0) {
  return 0;
  }

  let degree = Math.pow((1 + P), countMonths);
  let payment = S * (P + (P / (degree - 1)));
  
  let totalAmount = payment * countMonths;
  return Number(totalAmount.toFixed(2));
}