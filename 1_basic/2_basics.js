"use strict";
/**
 * Types
 */
let helloText = "hello";
/**
 * JS에서 존재하는 타입
 * 7개의 타입
 */
const stringVar = "string";
const numberVar = 10;
const bigintVar = BigInt(100);
const boolVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에서만 존자하는 타입
 */
// any - 아무 타입을 넣을수있다 치트키 같은것 
let anyVar;
anyVar = 10;
anyVar = "aa";
// unknown - 알수없는 타입, 다른변수에 할당할때는 똑같이 unknown일때 할당이 가능함
let unknownVar;
unknownVar = 100;
unknownVar = 'aa';
// never - 어떠한 값도 저장되거나 반환되지 않는 타입
//let neverType: never = null; 오류남 어떠한것도 할당이 안된다.
/**
 * 리스트 타입
 */
const koreaGirlGruop = ["아이브", "블랙핑크", "레드벨벳"];
