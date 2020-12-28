import { SSRWrapper } from "@vkontakte/vkui";
import Document, { Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <SSRWrapper>
        <Html className="vkui">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </SSRWrapper>
    );
  }
}

export default MyDocument;
