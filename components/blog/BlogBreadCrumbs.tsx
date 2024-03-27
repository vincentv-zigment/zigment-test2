import { BlogI } from "@/lib/types/blog";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = {
  data: BlogI;
};

const BlogBreadCrumbs = ({ data }: Props) => {

  return (
    <nav className="flex  hidden md:block" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center ">
        <li>
          <div>
            <Link
              href={'/blog'}
              className=" text-sm font-medium text-indigo-900 underline"
            >
              <span className="">Home</span>
            </Link>
          </div>
        </li>
        <li key={data.category_name}>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5   shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <Link
              href={`/blog/categories/${data.category_id}`}
              className=" text-sm font-medium text-indigo-900 underline"
            >
              <span>{data.category_name}</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5   shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <a
              href={`/blog/${data.slug}`}
              className=" text-sm font-medium text-gray-600 underline "
            >
              <span>{data.title} category</span>
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BlogBreadCrumbs;
