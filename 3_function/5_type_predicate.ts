/**
 * Type Predicate
 */
function isNumber(input: any): input is number {
  return typeof input === "number";
}

// 왜 이렇게 사용하면 안될까??
function isNumberBool(input: any): boolean {
  return typeof input === "number";
}

let num: any = 5;

if (isNumberBool(num)) {
  num; // type이 any임
}

if (isNumber(num)) {
  num; // predicate를 사용해주면 안에서 number로 바뀜
  // 정확한 타입을 유추할수있다!!
  // 일반적으로 하면 유추하기 힘들다.
}
