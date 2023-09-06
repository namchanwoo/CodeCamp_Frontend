import { useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { useRouter } from 'next/router';
import { IBoardWriteProps, IMyvariables } from './BoardWrite.types';

//import * as S from './BoardWrite.styles';
//S.Redinput
//S.Blueinput

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });

    console.log(result);

    alert(result.data.createBoard.message);

    router.push(
      `/Section10/10-02-typescript-boards/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myvariables: IMyvariables = { number: Number(router.query.number) };

    if (title) myvariables.title = title;
    if (writer) myvariables.writer = writer;
    if (contents) myvariables.contents = contents;

    const result = await updateBoard({
      variables: myvariables,
    });

    console.log(result);
    router.push(
      `/Section10/10-02-typescript-boards/${result.data.updateBoard.number}`
    );
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
