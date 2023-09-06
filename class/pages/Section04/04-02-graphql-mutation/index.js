import { gql, useMutation } from "@apollo/client";

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

  const onClickRequest = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          title: "안녕하세요",
          contents: "내용입니다",
        },
      },
    });
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickRequest}>GRAPHQL-API 요청하기</button>;
    </div>
  );
}
