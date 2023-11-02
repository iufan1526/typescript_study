/**
 * Type Inference
 * 타입 추론
 * 타입을 유추한다
 */

// 초기화 할때 값을 할당하면 타입추론에 의해서 타입이 결정된다.
// const를 이용해서 선언하면 구체적으로 적용된다
let stringType = "안녕하세요";
const constString = 'const string';

// 객체에서는 const를 사용해도 구체화된 값을 넣을수가 없다
// as로 캐스팅 해주어야함
const yujin = {
    name : "안유진" as const
}

/**
 * Array
 */
let numbers = [1, 2, 3, 4];
let numbersAndString = [1, 2, 3, 4, "5"];

const twoNumbers = [1, 2] as const;