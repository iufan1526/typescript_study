/**
 * Intersection
 * And의 개념
 * 양쪽에 타입이 합쳐진다. 두개를 포함한 타입이된다.
 * 
 * 원시 타입을 넣으면 안된다.never로 된다.
 */

interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string; 
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: "홍길동",
    age: 10,
    phone: "010",
    address: "서울시"
}
