import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    const onClickButton = () => {
        setCount(count + 1);
    };

    return (
        <>
            <button onClick={onClickButton}>{count}</button>
        </>
    );
}
