/**
 * 표현식과 선언식 (타입스크립트 기준)
 *
 */

function addTowNumbers(x: number, y: number) {
  return x + y;
}

const addTowNumbersExp = (x: number, y: number) => {};

/**
 * 표현식을 사용해라
 * 훨신더 간결하고 깔끔하고 유리함
 */

type CalculationType = (x: number, y: number) => number;
const add2: CalculationType = function (x, y) {
  return x + y;
};

const multyple: CalculationType = function (x, y) {
  return x + y;
};
