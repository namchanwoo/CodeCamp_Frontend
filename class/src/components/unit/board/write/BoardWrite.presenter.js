import { Redinput, Blueinput } from "./BoardWrite.style";

export default function BoardWriteUI(props) {
    return (
        <div>
            작성자: <Redinput type="text" onChange={props.onChangeInput} />
            제목: <Blueinput type="text" onChange={props.onChangeWriter} />
            내용: <Redinput
                type="text"
                onChange={props.onChangeContents}
            />{" "}
            <br />
            <button onClick={props.onClickRequest}>
                {" "}
                GRAPHQL-API 요청하기
            </button>
        </div>
    );
}
