import CTASection from '@/components/ebook/CTASection';
import DeepDiveSection from '@/components/ebook/DeepDiveSection';
import HeroSection from '@/components/ebook/HeroSection';
import Footer from '@/components/landing-page/Footer';
import Head from 'next/head';
import { EbookI, ebookData } from '.';


export async function getServerSideProps(context: any) {
  const allEbooks = ebookData;
  const findEbook = allEbooks.find((data: EbookI) => data.slug === context.params.id);
  if (!findEbook) {
    return {
      props: {
        _id: '',
        title: '',
        slug: '',
        cover_image: ''
      },
    };
  }



  return {
    props: {
      data: findEbook
    }
  };
}

type Props = { 
  data: EbookI;
}

const page = ({ data }: Props) => {

  console.log(data, 'data')
  return (
    <>
      {/* <LandingPageLayout> */}
      <Head>
        <title>{data.title}</title>
        <meta
          name="description"
          content={data.subheading}
        />
        <meta
          property="og:title"
          content={data.title} />
        <meta
          property="og:description"
          content={data.subheading}
        />

        <meta
          property="og:image"
          content={data.cover_image }
          key="ogimage"
        />
      </Head>
        <div className="single-post-wrapper blog-detail border-b">
          <div className="single-post-content">
            <HeroSection data={data} />
            <DeepDiveSection  data={data}/>
            <CTASection />
          </div>
        </div>
        <Footer/>
      {/* </LandingPageLayout> */}
    </>
  )
}

export default page