import { useRouter } from "next/router";

export default function StaticRoutingPage() {
    const router = useRouter();

    const onClickMove1 = () => {
        router.push("/Section05/05-04-dynamic-routing-board-query-moved/55");
    };
    const onClickMove2 = () => {
        router.push("/Section05/05-04-dynamic-routing-board-query-moved/150");
    };

    const onClickMove3 = () => {
        router.push("/Section05/05-04-dynamic-routing-board-query-moved/32");
    };

    return (
        <>
            <button onClick={onClickMove1}> 1 번 게시글로 이동하기!!!</button>
            <button onClick={onClickMove2}> 2 번 게시글로 이동하기!!!</button>
            <button onClick={onClickMove3}> 3 번 게시글로 이동하기!!!</button>
        </>
    );
}
