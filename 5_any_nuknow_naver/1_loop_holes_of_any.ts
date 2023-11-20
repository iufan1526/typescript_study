/**
 *any의 문제점
 */

let number: number = 10;

// error
(number as any).toUpperCase();

// 어떠한 함수의 파라미터로 입력이 가능하다.
// 오브젝트도 any로 캐스팅 x
// any를 난발하면 안된다 오류를가 안나는경우가 많아서 리펙토링이나 디버깅이 힘들다.
