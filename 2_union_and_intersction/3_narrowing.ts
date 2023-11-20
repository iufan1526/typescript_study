/**
 * Narrowing
 * 
 * 유니언 타입에서 더욱 구체적인 타입으로 논리적을 유추할수있게 되는걸 의미한다.
 * 코드를 보구 합당하게 타입을 유추한다.
 */


/**
 * Narrowing 종류
 * 1) Assignment Narrowing
 * 2) typeof 
 * 3) Truethy
 * 4) Equal
 * 5) in operator
 * 6) instance
 * 7) discrimated
 * *) exhaustiveness
 */

// 1.Assignment
let numberOrString: number | string = "code";
numberOrString

// 2. typeof
numberOrString = Math.random() > 0.5 ? 123: "아이유";
console.log(typeof numberOrString);

// 3. Truethy
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ["아이유", "레드벨벳"];

if (nullOrString) {
    nullOrString
} else {
    nullOrString
}

// 4. Equal
let numOrString: number | string = Math.random() > 0.5 ? 1234 : "아이유";
let stringOrBool: string | boolean = Math.random() > 0.5 ? true : "아이유";

if (numOrString === stringOrBool) {
    numOrString;
    stringOrBool;
} else {
    numOrString;
}

// 5. in operator
interface Human {
    name: string;
    age: number;
}

interface Animal {
    name: string;
    type: string;
}

let human: Human = {
    name: "홍길동",
    age: 20
}

let dog: Animal = {
    name: "오리",
    type: "시바견"
}

let humanOrDog: Human | Animal = Math.random() > 0.5 ? human : dog;

console.log("name" in human);

if ("type" in humanOrDog) {
    humanOrDog;
} else {
    humanOrDog;
}

// 6.InstanceOf
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : "코드";

if (dateOrString instanceof Date) {
    dateOrString
} else {
    dateOrString
}

// 7. discrimated
interface Animal2 { 
    type : "dog" | "human";
    height? : number;
    breed: string
}

// 8. exhaustiveness