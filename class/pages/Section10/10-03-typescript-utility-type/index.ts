export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입
type aaa = Partial<IProfile>; // Partial<IProfile> 타입은 IProfile 타입의 모든 속성을 선택적으로 만들어준다.
const qqq: aaa = {
  name: "철수",
  age: 10,
  school: "다람쥐초등학교",
};
console.log(qqq);

// 2. Required 타입
type bbb = Required<IProfile>; // Required<IProfile> 타입은 IProfile 타입의 모든 속성을 필수로 만들어준다.

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">; // Pick<IProfile, 'name' | 'age'> 타입은 IProfile 타입의 name, age 속성만 가져온다.

// 4. Omit 타입
type ddd = Omit<IProfile, "school">; // Omit<IProfile, 'school'> 타입은 IProfile 타입의 school 속성을 제외한 속성만 가져온다.

// 5-1. Union 타입
type eee = "철수" | "영희" | "훈이"; // Union 타입
const child1: eee = "철수"; // Union 타입은 하나의 타입만 지정할 수 있다. 철수 영희 훈이만 됨
const child2: string = "사과"; // string 타입은 다됨

// 5-2. Record 타입
type fff1 = Record<eee, { age: number }>; // Record<eee, { age: number }> 타입은 eee 타입의 속성을 key로 하고, { age: number } 타입의 속성을 value로 하는 타입을 만든다.
type fff2 = Record<eee, IProfile>; // Record<eee, IProfile> 타입은 eee 타입의 속성을 key로 하고, IProfile 타입의 속성을 value로 하는 타입을 만든다.

// 6. 객체의 키를 추출하는 keyof 들로 타입 만들기
type ggg = keyof IProfile; // "Name" | "age" | "school" | "hobby" 타입을 만든다.
const myProfile: ggg = "hobby";

// 7. type vs interface 차이점 = type은 확장이 안되고 interface는 확장이 된다. 선언병합이 가능
export interface IProfile {
  candy: number;
}

// 8. 배운거 응용
const profile: Partial<IProfile> = {
  candy: 10,
};
