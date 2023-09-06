import { useMutation } from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { useRouter } from 'next/router';

export default function BoardWrite(props) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onChangeWriter = event => {
    setWriter(event.target.value);
  };

  const onChangeTitle = event => {
    setTitle(event.target.value);
  };

  const onChangeContents = event => {
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

    router.push(`/Section09/09-03-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: contents,
      },
    });

    console.log(result);
    router.push(`/Section09/09-03-boards/${result.data.updateBoard.number}`);
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
    />
  );
}
