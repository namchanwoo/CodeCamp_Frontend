import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
    const [isActive, setIsActive] = useState(false);

    const [createBoard] = useMutation(CREATE_BOARD);

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const onChangeWriter = (event) => {
        setWriter(event.target.value);

        if (event.target.value && title && contents) {
            setIsActive(true);
        }
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);

        if (writer && event.target.value && contents) {
            setIsActive(true);
        }
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);

        if (writer && title && event.target.value) {
            setIsActive(true);
        }
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
            onChangeInput={onChangeWriter}
            onChangeWriter={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickRequest={onClickRequest}
            isActive={isActive}
        />
    );
}
