/**
 * 
 * Defining Function
 * 
 */

function printName(name: string) {
    console.log(name);
}

/**
 * 
 * Optional Parameter
 * 
 */
function multiplyOrReturn(x: number, y?: number) {

}

/**
 * 나머지 매개변수
 */

function getInfiniteParam(...a: string[]) {
    return a.map((x) => `너무좋아 ${x}`);
}

console.log(getInfiniteParam("아이유", "수지"));

/**
 * 리턴 타입
 */

function add(a: number, b: number): number {
    return a + b;
}

/**
 * 특수 반환 타입
 * void / never
 */
function doNotReturn(): void {
    console.log("반환 x");
}

function doNotReturn2(): never {
   throw Error();
}