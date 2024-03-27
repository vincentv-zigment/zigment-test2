import Link from "next/link";
import React, { useEffect, useState } from "react";
import ScrollProgressBar from "../common/ScrollProgressBar";
import { BlogI } from "@/lib/types/blog";
import camelCase from 'camelcase';


type Props = {
  data: BlogI[]
};



const BlogNav = ({data}: Props) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div
      className={`border-y   bg-white w-full  fixed  ${
        hasScrolled ? "top-[100px]" : "top-[100px]"
      }  z-[20] text-black border-y py-4  transition-all`}
    >
      <div className="max-w-7xl px-4 gap-8 text-gray-700 sm:px-20 xl:px-0 flex  w-full mx-auto">
        <Link href={'/blog'}>Home</Link> 
        {data && Array.from(new Set(data.map(obj => obj.category_id))).map((x) => {
          return <Link href={`/blog/categories/${x}`} key={`category_key_${x}`}>
            {camelCase(x, {pascalCase: true})}
          </Link>;
        })}
        
      </div>
      <ScrollProgressBar/>
    </div>
  );
};

export default BlogNav;
