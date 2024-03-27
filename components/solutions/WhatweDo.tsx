import circle from "@/assets/images/solutions/circle.svg";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import triangle from "@/assets/images/solutions/triangle.svg";
import Image from "next/image";
import { FaSms, FaWhatsapp } from "react-icons/fa";
import { MdHeadsetMic, MdMessage, MdOutlineMail } from "react-icons/md";
import SolutionSectionHeading from "./SolutionSectionHeading";
import React from "react";

type Props = {
  data: { id: number; question: string; answer: string; img: any }[];
  title?:string
};

const array = [
  {
    id:1,
    icon:FaWhatsapp
  },
  {
    id:2,
    icon:FaSms
  },
  {
    id:3,
    icon:MdOutlineMail
  },
  {
    id:4,
    icon:MdMessage
  },
  {
    id:5,
    icon:MdHeadsetMic
  },
]

export default function WhatWeDo({ data, title='Zigment is Your 24/7 Sales Super Agent' }: Props) {

  const titleLines = title.split('\\n')
  return (
    <section className="bg-orange-100/60 m-4 rounded-md py-10 px-4 sm:py-20">
      <div className="max-2xl mx-auto     ">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-24">
          {/* <p className="uppercase   text-base text-gray-500">What we Do</p> */}
          <div className="relative">
            
            <SolutionSectionHeading>
              {titleLines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </SolutionSectionHeading>
            <Image
              src={line}
              alt="line"
              className="w-[200px] sm:w-[200px] absolute mx-auto inset-x-0 "
            />
          </div>
        </div>
        <div className="mx-auto sm:px-10 relative">
          <Image
            src={circle}
            alt=""
            className="absolute w-40 h-40 -right-2 -bottom-20"
          />
          <Image
            src={triangle}
            alt=""
            className="absolute w-40 h-40 -left-2   sm:-top-28 rotate-[35deg] "
          />
          <dl className=" relative z-[10]  grid grid-cols-1 gap-y-4 sm:gap-y-10 sm:mt-9   md:gap-x-10 lg:grid-cols-3">
            {data.map((x) => (
              <div
                key={x.id}
                className="bg-white w-full   gap-5 p-4 md:p-7 flex flex-col text-center  "
              >
                <div className="  flex flex-col gap-2  ">
                  <div className="flex items-center justify-center  ">
                    <Image src={x.img} alt="" className="  h-20 object-contain" />
                  </div>
                  <dt
                    className="text-base underline font-semibold text-black text-xl"
                    style={{
                      textDecorationColor: "#ffb840",
                      textUnderlineOffset: "5px",
                    }}
                  >
                    {x.question}
                  </dt>
                </div>
                <div>
                  <dd className="sm:text-lg font-medium  text-slate-600">
                    {x.answer}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          {/* <p className="font-semibold text-black text-xl mt-20 text-center">
            Engage with your customers where they are
          </p>
          <div className=" flex items-center w-full justify-center text-slate-600  ">
            {array.map((x:any)=>{
              return (

                <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center  justify-center cursor-pointer">
                  <x.icon className="h-6 sm:h-12 w-6 sm:w-12 object-cover object-center"/>
                
                </div>
              )
            })}
            
          </div> */}
        </div>
      </div>
    </section>
  );
}
