import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardWrite from '../../../../../src/components/unit/board/09-write2/BoardWrite.container';

const FETCH_BOARDS = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS, {
    variables: { number: Number(router.query.number) },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
