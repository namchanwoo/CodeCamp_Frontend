import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_BOARDS = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARDS, {
        variables: { number: Number(router.query.boardsID) },
    });

    console.log("data", data);

    return (
        <>
            <div>1번 페이지 이동이 완료되었습니다.</div>
            <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>제목 : {data?.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div>
        </>
    );
}
