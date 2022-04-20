/* eslint-disable @next/next/no-document-import-in-page */
import { renderToString } from "@teliads/components/hydrate";
import { parse } from "node-html-parser";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    // Stencil renderToString options (optional): https://stenciljs.com/docs/hydrate-app#configuration-options
    const renderToStringOptions = {
      prettyHtml: true,
    };

    const initialProps = await Document.getInitialProps(ctx);
    const document = await renderToString(
      initialProps.html,
      renderToStringOptions
    );

    // Stencil hydrate generate a full page HTML
    // We need only content inside body
    const root = parse(document.html);
    const html = root.querySelector("body")?.innerHTML as string;

    return {
      ...initialProps,
      html,
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
