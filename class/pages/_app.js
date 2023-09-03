// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }) {
    const client = new ApolloClient({
        uri: "http://practice.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp; // 이 부분을 확인해주세요.
