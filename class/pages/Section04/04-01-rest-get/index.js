import axios from "axios";

export default function Section4RestGetPage() {
    function onClickRequestAsync() {
        const data = axios.get("https://koreanjson.com/posts/1");
        console.log(data); // {id: 1, title: "정당의 목적이나 활동이 ...", ...}
    }

    async function onClickRequestsync() {
        const data = await axios.get("https://koreanjson.com/posts/1");
        console.log(data); // {id: 1, title: "정당의 목적이나 활동이 ...", ...}
    }
    return (
        <div>
            <button onClick={onClickRequestAsync}>
                REST-API 요청하기(비동기)
            </button>
            <button onClick={onClickRequestsync}>
                REST-API 요청하기(동기)
            </button>
        </div>
    );
}
