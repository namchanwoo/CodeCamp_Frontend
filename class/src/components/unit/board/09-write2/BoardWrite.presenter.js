import { Redinput, Blueinput } from './BoardWrite.style';

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자:
      <Blueinput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      제목:
      <Blueinput
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      내용:
      <Blueinput
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? '수정' : '등록'}
      </button>
    </div>
  );
}
