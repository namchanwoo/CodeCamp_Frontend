export default function CheckBox() {
  const qqq2 = (event: any) => {
    alert('2번클릭');
  };

  const qqq3 = (event: any) => {
    alert('3번클릭');
    event.stopPropagation();
  };

  return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}
