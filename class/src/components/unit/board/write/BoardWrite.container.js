import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
    const [createBoard] = useMutation(CREATE_BOARD);

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const onChangeInput = (event) => {
        setWriter(event.target.value);
    };

    const onChangeWriter = (event) => {
        setTitle(event.target.value);
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
    };

    const onClickRequest = async () => {
        const result = await createBoard({
            variables: {
                writer: writer,
                title: title,
                contents: contents,
            },
        });

        console.log(result);
        alert(result.data.createBoard.message);
    };

    return (
        <BoardWriteUI
            onChangeInput={onChangeInput}
            onChangeWriter={onChangeWriter}
            onChangeContents={onChangeContents}
            onClickRequest={onClickRequest}
        />
    );
}
