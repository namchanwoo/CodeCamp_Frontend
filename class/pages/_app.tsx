// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AppProps } from 'next/app';

export default function MyApp({ Component }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://practice.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}
