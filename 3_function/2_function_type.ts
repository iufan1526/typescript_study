type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
  return ["안유진", "장원영"].map(callback);
};

console.log(runner((x) => `아이브 멤버 ${x}`));

/**
 * interface
 */
interface IMultiplyTwoNumbers {
  (x: number, y: number): number;
}

const multiplyTwoNumber: IMultiplyTwoNumbers = (x, y) => {
  return x + y;
};
