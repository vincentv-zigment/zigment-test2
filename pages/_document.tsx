import { Html, Head, Main, NextScript } from "next/document";


 

export default function Document() {
  return (
    <Html lang="en" >
      <Head>
        <meta name="description" content="AI Conversational Platform" />
        <link rel="icon" href="https://cdn.zigment.ai/assets/zigment.svg" />

        <link rel="preload" href={'https://cdn.zigment.ai/assets/1706524560-HeroImage.svg'} as="image" />
        <link rel="preload" href={'https://cdn.zigment.ai/assets/zigment_logo_latest.svg'} as="image" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
