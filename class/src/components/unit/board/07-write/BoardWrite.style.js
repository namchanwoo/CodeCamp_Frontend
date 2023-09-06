import styled from "@emotion/styled";

export const Redinput = styled.input`
    border: 1px solid red;
`;

export const Blueinput = styled.input`
    border: 1px solid blue;
    background-color: ${(props) => props.mycolor};
`;

export const Activeinput = styled.input`
    border: 1px solid blue;
    background-color: ${(props) => props.isActive && props.mycolor};
`;

export const GraphqlButton = styled.button`
    border: 1px solid blue;
    background-color: black;
    color: white;
    opacity: ${(props) => (props.isActive ? 1 : 0.2)};
`;
