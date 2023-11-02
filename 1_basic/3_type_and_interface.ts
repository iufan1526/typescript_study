/**
 * Type and Interface
 */

/**
 * Type
 * 
 * TS의 타입에 이름을 지어준다
 * 
 */

// NewStringType을 string 처럼 사용할수 있다!
type NewStringType = string;
const stringVar1: NewStringType = "안녕하셍요";

type IdolType = {
    groupName: string,
    year: number
}

const idolGroup: IdolType = {
    groupName : "빅뱅",
    year : 100
}

/**
 * Interface
 * Type이 하지못하는 일을 하기위해 나왔다.. 둘의 기능이 겹치는 부분이 있다
 * 
 */

interface IdolInterface { 
    name: string;
    year: number;
}

const yujin: IdolInterface = {
    name : "안유진",
    year : 20
}

/**
 * Optional
 */

interface IdolOptional {
    name : string;
    age?: number;
}

const yujin2: IdolOptional = {
    name : "안유진"
}