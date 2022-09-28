import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyShopDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
