import img1 from '@/assets/images/blog/95.svg';
import img2 from '@/assets/images/blog/96.svg';
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import { BlogI } from '@/lib/types/blog';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: any[]
}



function BlogListingPage({ data }: Props) {


  return (
    <>
       
      <section className='pt-[120px] pt-10 pb-[130px] relative bg-[#f7faff]'>
        <Image src={img1} alt='img1' className='left-0 hidden lg:block absolute inset-y-0 my-auto' />
        <Image src={img2} alt='img1' className='right-0 hidden lg:block absolute inset-y-0 my-auto' />

        <div className='max-w-4xl w-full text-center mx-auto '>
          <h6 className='pb-2.5 uppercase text-xl lg:text-2xl font-medium text-gray-400 font-roboto leading-7 tracking-widest	'>Blogs</h6>
          <h2 className='font-bold   tracking-tight	 text-5xl lg:text-7xl relative leading-tight'>
            <span className='lg:block mx-6 md:mx-0'>
              Our Recently Published
            </span>
            <Image src={line} alt='' className='hidden md:block w-[400px] lg:w-[620px] absolute left-12 lg:inset-x-0 md:mx-auto -bottom-5   lg:bottom-[40px]' />
            <span className='hidden md:inline-block md:mx-2'>
              {' '}
            </span>
            <span className=''>
              Blogs
            </span>
          </h2>
        </div>
      </section>
      <section className=' mx-auto pt-32   w-full md:max-w-2xl lg:max-w-4xl  xl:max-w-6xl'>
        <div className='xl:mx-20 px-3 mx-auto   xl:max-w-5xl flex w-full flex-col justify-center'>
          {data.map((blogPost: BlogI, index) => {
            const cover = blogPost.cover_image
            const author = blogPost.author
            return (
              <div className='mb-16' key={`${blogPost._id}-new-blog-id-${index}`}>
                <div className=''>
                  <Image src={blogPost.cover_image} alt='' width={600} height={600} className='w-full h-[200px] md:h-[400px] lg:h-[500px] object-cover' />
                </div>
                <div className='pt-8 md:pt-12'>
                  <span className='block text-gray-500  '>{blogPost.published_at}</span>
                  <Link href={`/blog/${blogPost.slug}`}>
                    <h3 className='mt-1 mb-8 md:mb-12  text-3xl lg:text-5xl  font-black'>{blogPost.title}</h3>
                  </Link>
                  <p className="text-gray-500 leading-7 md:leading-8 text-lg md:text-xl   "
                    style={
                      {
                        fontFamily: `'Roboto', sans-serif`
                      }
                    }>
                    {blogPost.description}
                  </p>
                  <div className='mt-9 flex items-center w-full justify-between'>
                    <Link href={`/blog/${blogPost.slug}`} className='font-semibold text-lg underline-offset-2 underline'>Continue Reading</Link>
                    <Link href={`/blog/${blogPost.slug}`}>
                      <ArrowLongRightIcon className='text-black w-6' />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </>
  )
}

export default BlogListingPage