import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
       <meta name="google-site-verification" content="hAoxJvN2BjHkb0H6GTrUu_5uhrZbYO4L_KxHSrjWKxw" />
       <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument