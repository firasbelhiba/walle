/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
