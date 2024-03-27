import BlogDetailComp from '@/components/blog/BlogDetailsComp';
import BlogNav from '@/components/blog/BlogNav';
import ScrollProgressBar from '@/components/common/ScrollProgressBar';
import AppLayout from '@/components/Layout/LandingPageLayout';
import { blogData, getMarkdownDataForBlog } from '@/lib/blog/blog-data';
import { BlogI } from '@/lib/types/blog';
import Head from 'next/head';


export async function getServerSideProps(context: any) {
  const allBlogs = await blogData();
  const findBlog = allBlogs.find((blog: BlogI) => blog.slug === context.params.id);
  if (!findBlog) {
    return {
      props: {
        blog_content: '',
        blog_data: {}, 
        allBlogs
      },
    };
  }

  const blog_content = await getMarkdownDataForBlog(findBlog.slug);

  return {
    props: {
      blog_content,
      blog_data: findBlog, 
      allBlogs
    },
  };
}

type Props = {
  blog_content: string;
  blog_data: BlogI;
  allBlogs:BlogI[]
}

const BlogDetailsPage = ({ blog_content, blog_data, allBlogs }: Props) => {


  const content = blog_content;
  const data = blog_data
  return (
    <>

      <AppLayout>

        <Head>
          <title>{data.title}</title>
          <meta
            name="description"
            content={data.description}
          />
          <meta
            property="og:title"
            content={data.title} />
          <meta
            property="og:description"
            content={data.description}
          />
          <meta
            name="author"
            content={data.author}
          />
          <meta
            property="article:author"
            content={data.author}
          />
          <meta
            property="og:image"
            content={data.cover_image}
            key="ogimage"
          />
        </Head>

        {/* <BlogNav data={allBlogs}/> */}
        
        <BlogDetailComp
          blog_content={content}
          data={data}
        />
      </AppLayout>
    </>
  );
};

export default BlogDetailsPage;
