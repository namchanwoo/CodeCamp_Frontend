import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

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
    const router = useRouter();

    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickRequest = async () => {
        try {
            const result = await createBoard({
                variables: {
                    writer: "포켓몬마스터",
                    title: "안녕하세요 저는 한지우입니다",
                    contents: "피카츄 라이츄 파이리 꼬부기 버터플 야도란",
                },
            });

            console.log(result);
            console.log(result.data.createBoard.number);
            router.push(
                `/Section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
            );
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <button onClick={onClickRequest}>GRAPHQL-API 요청하기</button>
        </div>
    );
}
