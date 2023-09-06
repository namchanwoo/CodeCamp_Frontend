import { GraphqlButton, Activeinput } from "./BoardWrite.style";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자:
      <Activeinput
        mycolor={"blue"}
        isActive={props.isActive}
        type="text"
        onChange={props.onChangeInput}
      />
      제목:
      <Activeinput
        mycolor={"blue"}
        isActive={props.isActive}
        type="text"
        onChange={props.onChangeWriter}
      />
      내용:
      <Activeinput
        mycolor={"blue"}
        isActive={props.isActive}
        type="text"
        onChange={props.onChangeContents}
      />{" "}
      <br />
      <GraphqlButton isActive={props.isActive} onClick={props.onClickRequest}>
        GRAPHQL-API 요청하기
      </GraphqlButton>
    </div>
  );
}
