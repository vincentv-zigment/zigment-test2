import AppLayout from '@/components/Layout/LandingPageLayout';
import BlogListingPage1 from '@/components/blog/BlogListingPage1';
import { blogData } from '@/lib/blog/blog-data';
import { BlogI } from '@/lib/types/blog';
import Head from 'next/head';


type Props = {
  data: BlogI[]
}

export async function getServerSideProps() {
  try {
    const getData = await blogData();

    return { props: { data: getData } };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}



function index({ data }: Props) {

  console.log(data, 'get Server Side Props')
 
  return (
    <AppLayout>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blogs, Articles, and Tips by Zigment.ai" />
        <meta property="og:title" content="Blogs, Articles, and Tips by Zigment.ai" />
        <meta property="og:description" content="Best blogs, tips, tricks, articles for all your AI needs." />
      </Head>
      {/* <BlogNav data={data}/> */}
      <BlogListingPage1 data={data} heading='All Blogs' />
    </AppLayout>
  )
}

export default index