import { ReactQueryDevtools } from 'react-query/devtools';
import { useRef } from 'react';
import { Hydrate, QueryClientProvider } from 'react-query';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { queryClient } from '@/react-query/queryClient';

const MyShop = ({ Component, pageProps }) => {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = queryClient;
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta charSet="utf-8" />
          <title>MyShop</title>
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
};

MyShop.propTypes = {
  Component: PropTypes.element.isRequired,
};

// MyShop.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};
//
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//
//   return { pageProps };
// };

export function reportWebVitals(metric) {
  console.log(metric);
}

export default MyShop;
