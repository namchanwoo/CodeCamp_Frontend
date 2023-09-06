import { gql, useQuery } from "@apollo/client";

import { type MouseEvent } from "react";

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

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const OnClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id);
  };

  // const OnBublingClick = (event: any) => {
  //   alert("클릭 타이틀");
  // };

  return (
    <div>
      {data?.fetchBoards?.map((el: any) => (
        <div key={el.id} id={String(el.title)} onClick={OnClickAlert}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
