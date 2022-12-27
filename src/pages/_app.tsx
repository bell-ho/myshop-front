import { ReactQueryDevtools } from 'react-query/devtools';
import { useRef } from 'react';
import Head from 'next/head';
import { queryClient } from '@/react-query/queryClient';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from '@/GlobalStyle';

const MyShop = ({ Component, pageProps }: AppProps<{ dehydratedState: unknown }>) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = queryClient;
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <GlobalStyle />
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta charSet="utf-8" />
          <title>Hello</title>
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools position={'top-right'} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyShop;
