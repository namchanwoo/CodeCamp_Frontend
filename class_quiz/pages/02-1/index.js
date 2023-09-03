import { useState } from "react";

export default function Home() {
    const [buttonText, SetButtonText] = useState("안녕하세요");

    const onClickButton = () => {
        SetButtonText("반갑습니다");
    };

    return (
        <>
            <button onClick={onClickButton}>{buttonText}</button>
        </>
    );
}
