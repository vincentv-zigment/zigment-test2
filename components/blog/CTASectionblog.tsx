import { BlogI } from "@/lib/types/blog";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Spinner from "../common/Spinner";

type Props = {
  data: BlogI;
};

const CTASectionblog = ({ data }: Props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`,
        {
          email: email,
          is_email_subscription: true,
        }
      );
      console.log(res, "res");
      // setIsSubmitted(true)
    } catch (error) {
      console.log(error, "error");
    }

    setLoading(false);
  };

  return (
    <section className=" border-y  border-gray-300 my-4 text-center">
      <div className="w-full max-w-6xl mx-auto py-6 px-2 md:px-10">
        <div>
          <h1 className="text-2xl   font-bold text-gray-900 lg:text-2xl   leading-tight">
            <div className="relative leading-tight">
              <p className="block xl:inline ">
                Get productivity tips delivered straight to your inbox
              </p>{" "}
            </div>
          </h1>
          <div className=" mt-6     text-center  ">
            <div className="rounded-md w-full flex flex-col md:flex-row items-center relative gap-4 md:px-10 justify-center lg:justify-center">
              <input
                type="text"
                className="block w-full rounded-md px-2    sm:py-3 py-2  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="inline-block w-full md:w-36 h-12 flex items-center justify-center shrink-0 bg-brand-orange-deski hover:bg-red-500 rounded-md text-white font-medium sm:font-semibold px-4 sm:px-8 disabled:bg-brand-orange-deski/50 disabled:cursor-not-allowed	  sm:py-3 py-2 text-sm sm:text-base"
                onClick={handleSubmit}
                disabled={isSubmitted}
              >
                {loading ? (
                  <span className="w-full  pl-3 block flex items-center justify-center">
                    <Spinner color="" />
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
            <div className="mx-auto max-w-7xl  py-4">
              <h2 className="lg:text-center md:text-lg font-semibold text-center leading-8 text-gray-900">
                We’ll email you 1-2 times per week—and never share your
                information.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left border-t border-gray-300 py-6 md:px-5 flex flex-col md:flex-row md:items-center gap-6 text-[15px]">
        <span className="block uppercase w-16 h-16 flex  items-center justify-center text-3xl font-medium rounded-full bg-gray-200 shrink-0">
          {data.author[0]}
        </span>
        <div>
          <h3 className="font-medium mb-1">{data.author}</h3>
          <p className="text-gray-700">{data.author_description}</p>
        </div>
      </div>
      <div className="flex  gap-3 lg:items-center py-6 px-5 border-t border-gray-300">
        <span className="font-semibold text-xl mt-2 lg:mt-0">Tags</span>
        <div className="flex flex-wrap gap-3">
          {data.tags.map((x) => {
            return (
              <Link
                href={`/blog/tags/${x}`}
                className="border  text-lg text-gray-900 font-medium border-gray-600 bg-gray-100 hover:bg-gray-800 hover:text-white py-2 px-6 rounded-full cursor-pointer"
              >
                {x}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTASectionblog;
