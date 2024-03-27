import { BlogI } from "@/lib/types/blog";
import Link from "next/link";
import React from "react";

type Props = {
  data: BlogI[];
  heading:string
};

 

const BlogListingPage1 = ({ data, heading }: Props) => {

  return (
    <section className="relative pt-8 md:pt-20    px-8 md:px-20 pb-[130px]">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{heading}</h2>
          
        </div>
        <div className="mx-auto mt-8 md:mt-12 grid max-w-lg gap-x-6 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {data.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden   group cursor-pointer">
              <div className="flex-shrink-0 bg-white mb-6">
                <img className="h-52 w-full object-cover bg-white group-hover:opacity-50" src={post.cover_image} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white px-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-800">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.category_name}
                    </Link>
                  </p>
                  <Link href={`/blog/${post.slug}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-600 group-hover:text-indigo-800 h-[120px] overflow-hidden">{post.description}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="sr-only">{post.author}</span>
                    </Link>
                  </div>
                  <div className="">
                    <p className="text-sm  text-gray-600 group-hover:text-indigo-800">
                      <Link href={`/blog/${post.slug}`} className=" flex items-center gap-3">
                      <span className="block uppercase w-12 h-12 flex  items-center justify-center text-2xl font-medium rounded-full bg-gray-200 shrink-0">{post.author[0]}</span> By {post.author} •  {post.time_to_read} min read 
                      </Link>
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListingPage1;
