export default function TypescriptPage() {
  //타입 추론
  let aaa = '안녕하세요';
  aaa = 3;

  //타입 명시
  let bbb: string = '안녕하세요';
  bbb = 10;

  //타입 명시가 필요한 상황
  let ccc: number | string = 10;
  ccc = '1000';

  //숫자 타압
  let ddd: number = 10;
  ddd = '철수';

  //불린타입
  let eee: boolean = true;
  eee = 'false';

  //배열타입
  let fff: number[] = [1, 2, 3, 4, 5, '안녕하세요'];
  let ggg: string[] = ['안녕하세요', '반갑습니다', 10];
  let hhh: (number | string)[] = [1, 2, 3, 4, 5, '안녕하세요'];

  interface IProfile {
    name: string;
    age: number | string;
    school?: string;
    hobby?: string;
  }

  //객체타입
  const profile: IProfile = {
    name: '철수',
    age: 10,
    school: '다람쥐초등학교',
  };

  profile.name = '훈이';
  profile.age = 20;
  profile.hobby = '게임하기';

  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }

  const result1 = add(1, 2, 'kg'); //결과의 리턴 타입도 예측이 가능하다.

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };

  const result2 = add2(1000, 2000, '원'); //결과의 리턴 타입도 예측이 가능하다.

  //any타입
  let qqq: any = '안녕하세요';
  qqq = 10;
  qqq = true;
}
