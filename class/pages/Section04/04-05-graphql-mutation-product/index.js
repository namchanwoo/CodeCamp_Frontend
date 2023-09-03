import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
    mutation createProduct(
        $seller: String
        $createProductInput: CreateProductInput!
    ) {
        createProduct(
            seller: $seller
            createProductInput: $createProductInput
        ) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT);

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "지우",
                createProductInput: {
                    name: "피카츄",
                    detail: "전기타입 포켓몬",
                    price: 99999,
                },
            },
        });
        console.log(result);
        alert(result.data.createProduct.message);
    };

    return (
        <div>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
        </div>
    );
}
