import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            message
            number
        }
    }
`;

export default function GraphqlMutationPage() {
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
    };

    return (
        <div>
            작성자: <input type="text" onChange={onChangeInput} />
            제목: <input type="text" onChange={onChangeWriter} />
            내용: <input type="text" onChange={onChangeContents} />
            <button onClick={onClickRequest}>GRAPHQL-API 요청하기</button>
        </div>
    );
}
