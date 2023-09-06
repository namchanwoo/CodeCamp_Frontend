// 컴포넌트 위에 만든 이유는, 컴포넌트가 리렌더링 될 때마다 새로운 배열이 만들어지는 것을 방지하기 위해서이다.
const FRUITS = [
  { id: 1, name: "레드향" },
  { id: 2, name: "샤인머스켓" },
  { id: 3, name: "산청딸기" },
  { id: 4, name: "한라봉" },
  { id: 5, name: "사과" },
  { id: 6, name: "애플망고" },
  { id: 7, name: "딸기" },
  { id: 8, name: "천혜향" },
  { id: 9, name: "과일선물세트" },
  { id: 10, name: "귤" },
];

export default function MapFruitsPage() {
  // 1.가장 기본 예제
  const aaa = [
    <div key={1}>1 레드향</div>,
    <div key={2}>2 샤인머스켓</div>,
    <div key={3}>3 산청딸기</div>,
  ];

  // 2. 실무 벡엔드 데이터 예제
  const bbb = FRUITS.map((data) => (
    <div key={data.id}>
      {data.id} {data.name}
    </div>
  ));

  return (
    <>
      <div>{aaa}</div>
      ===============================================
      <div>{bbb}</div>
      ===============================================
      {/* 3.실무 효율적인렌더링 예제 */}
      {FRUITS.map((data) => (
        <div key={data.id}>
          {data.id} {data.name}
        </div>
      ))}
    </>
  );
}
