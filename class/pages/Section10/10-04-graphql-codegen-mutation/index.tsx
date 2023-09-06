import { useMutation, gql } from '@apollo/client';
import {
  IMutation,
  IMutationCreateBoardArgs,
} from '../../../src/commons/types/generated/types';

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
  // const [createBoard] = useMutation<결과타입, 변수타입>(CREATE_BOARD);
  const [createBoard] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onClickRequest = async () => {
    const result = await createBoard({
      variables: {
        writer: '철수',
        title: '안녕하세요',
        contents: '내용입니다',
      },
    });

    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickRequest}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
