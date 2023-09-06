import { gql, useQuery } from '@apollo/client';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../../src/commons/types/generated/types';
import { MouseEvent } from 'react';
import CheckBox from './checkbox';

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  console.log(data?.fetchBoards);

  const qqq1 = (event: any) => {
    alert('1번클릭');
  };

  const qqq2 = (event: any) => {
    alert('2번클릭');
  };

  const qqq3 = (event: any) => {
    alert('3번클릭');
    event.stopPropagation();
  };

  const qqq4 = (event: any) => {
    event.stopPropagation();
    alert('4번클릭');
  };

  return (
    <div>
      {data?.fetchBoards?.map(el => (
        <div id={String(el.title)} onClick={qqq1}>
          <CheckBox />
          <span style={{ margin: '10px' }} onClick={qqq4}>
            {el.number}
          </span>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
