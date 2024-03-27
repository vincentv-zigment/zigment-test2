import AppLayout from '@/components/Layout/LandingPageLayout';
import BlogListingPage1 from '@/components/blog/BlogListingPage1';
import { blogData } from '@/lib/blog/blog-data';
import { BlogI } from '@/lib/types/blog';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';


type Props = {
  data: BlogI[],
  heading:string,
  allblogs:BlogI[]
}

export async function getServerSideProps(context:GetServerSidePropsContext) {
  try {
    const allblogs = await blogData();
    if(context.params && context.params.tag){
      const blogs = allblogs.filter((x)=>x.tags.includes(context.params?.tag as string ))
      const heading = `"${context.params?.tag}" Articles`
      return { props: { data: blogs, heading, allblogs } };
    }else{
      return { props: { data: allblogs, heading:'All Blogs', allblogs } };
    }


  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}





function TagsPage({ data, heading, allblogs }: Props) {
 
  return (
    <AppLayout>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blogs, Articles, and Tips by Zigment.ai" />
        <meta property="og:title" content="Blogs, Articles, and Tips by Zigment.ai" />
        <meta property="og:description" content="Best blogs, tips, tricks, articles for all your AI needs." />
      </Head>
      {/* <BlogNav data={allblogs}/> */}
      <BlogListingPage1 data={data} heading={heading} />
    </AppLayout>
  )
}

export default TagsPage