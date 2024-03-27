
import Image from 'next/image';
import Link from 'next/link';
import MarkdownToHTML from '../common/MarkdownToHTML';
import BlogBreadCrumbs from './BlogBreadCrumbs';
import { BlogI } from '@/lib/types/blog';
import CTASection from '../ebook/CTASection';
import CTASectionblog from './CTASectionblog';

type Props = {
  blog_content:any
  data:BlogI
}






const BlogDetailComp = ({ data, blog_content }: Props) => {
  console.log(data, 'data')

  const {  author, published_at, title, cover_image, category_name, time_to_read} = data
  const renderers = {
    a: ({ node, children, href, ...props }: any) => {
      return <Link href={href}><a>{children}</a></Link>

    },
    image: ({ src, alt }: any) => (
      <Image src={src} alt={alt} className="w-full h-full" />
    ),
  };  


  if (!blog_content) return null

  console.log(category_name, 'category_name')

  return (
    <>
      <section className='pt-4 md:pt-16 sm:px-20 xl:px-0 lg:max-w-7xl mx-auto'>
        
        <BlogBreadCrumbs data={data}/>
        <div className=' mx-auto w-full md:max-w-2xl lg:max-w-3xl '>
          <div className=' bg-white rounded-md flex w-full flex-col justify-center p-8 md:px-10 md:py-[35px]  mx-auto      items-center 
            [&_img]:md:w-full
            [&_img]:w-full
            [&_img]:rounded-md
            [&_img]:mx-auto'>
            
            <div className='text-center   block w-full'>
              <div className='flex text-center  items-center justify-center gap-2'>
                <Link href={`/blog/categories/${data.category_id}`} className='my-2 md:my-4  font-semibold underline text-indigo-800'>
                  {category_name} 
                </Link>
                <span className='no-underline text-gray-800'>{time_to_read} min read</span>
              </div>
              <h2 className='text-3xl md:text-5xl font-bold  '>
                {title}
              </h2>
              <p className='text-gray-500 text-sm my-4 md:my-6'>
                By {author} • {published_at}
              </p>
            </div>
            
            <Image src={cover_image} alt='' width={500} height={500} className='w-full h-[400px] object-cover rounded-xl'/>
            <MarkdownToHTML content={blog_content} />
            <CTASectionblog data={data} />
          </div>
        </div>
      </section>
      <CTASection/>
    </>
  )
}

export default BlogDetailComp



