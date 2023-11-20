/**
 * Union
 * 유니온은 TS에서 타입을 병합 할수있는 수많은 방법중 한개이다.
 * 
 */
type stringType = string | boolean;
let stringType1: stringType = true;


/**
 * 리스트의 유니언
 * 섞어서 넣을수는 없다
 */

type StringListOrBooleanList = string[] | boolean[];
let list: StringListOrBooleanList = ["a", "b", "c"];
let list2: StringListOrBooleanList = [true, false];

// 여러가지 넣으려면
type StringListOrBooleanList2 = (string | boolean)[];
let list3: StringListOrBooleanList2 = ["1", "2", false];


/**
 * Interface로 사용하는 유니언
 * 
 */
interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
    name : "홍길등",
    age : 13,
    address : "서울"
} 