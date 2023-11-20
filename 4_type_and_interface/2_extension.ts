/**
 * Extension
 * interface = extends 키워드
 * type = &를 쓴다
 */
interface IName {
  name: string;
}

interface Idol extends IName {
  age: number;
}

const idol: Idol = {
  name: "kim",
  age: 10,
};

type TName = {
  name: string;
};

type TIdol = TName & {
  age: number;
};

const idol2: TIdol = {
  name: "kim",
  age: 20,
};

//다중 extends가 된다
type DogName = {
  name: string;
};

type DogAge = {
  age: number;
};

type Dog = DogName & DogAge;

const dog: Dog = {
  name: "kim",
  age: 10,
};

interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  catInfo: string;
}

const cat: Cat = {
  name: "kim",
  age: 10,
  catInfo: "아아",
};
