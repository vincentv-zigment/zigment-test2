import Head from 'next/head'
import React from 'react'

type Props = {
  title: string,
  description: string,
  keywords: string
}

const MetaTagsComponents = ({ title, description, keywords }: Props) => {
  return (
    <Head>

      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={'https://cdn.zigment.ai/assets/zigment_logo_latest.svg'} key="ogimage" itemProp='image' />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:url" content="https://zigment.ai" />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image:type" content="image/jpeg"/> */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="zigment.ai" />
      <meta property="twitter:creator" content="@zigment" />
      <meta property="twitter:url" content="https://zigment.ai" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={"https://cdn.zigment.ai/assets/zigment_logo_latest.svg"} />
    </Head>
  )
}

export default MetaTagsComponents