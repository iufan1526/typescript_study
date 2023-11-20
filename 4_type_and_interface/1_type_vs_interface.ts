/**
 * 타입과 인터페이스의 차이
 *
 */

interface IObject {
  name: string;
  age: number;
}

type TObject = {
  name: string;
  age: number;
};

interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type만 할수있는것
 */

//1. primitive 타입 선언
type myString = string;

//2. union 타입 선언하기
type UnionType = string | number;

//3. primitive type list or tuple
type TulpeType = [string, number];

/**
 * Interface만 할수있는것
 */

// interface merging
// 중첩을 시킬수있다
interface IRectangle {
  width: number;
}
interface IRectangle {
  height: number;
}

let rectangle: IRectangle = {
  width: 100,
  height: 200,
};

class Review {
  getY = (x: number) => {
    return x;
  };

  getX(x: number) {
    return x;
  }
}
