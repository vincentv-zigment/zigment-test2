import img from "@/assets/images/solutions/features/FiveAdvantages3.svg";
import Image from "next/image";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import Feature from "./Feature";
import circle from "@/assets/images/solutions/circle.svg";
import cross from '@/assets/images/solutions/cross.svg'
import square from '@/assets/images/solutions/square.svg'
import Link from "next/link";
import { ReactNode } from "react";



type Props = {
  comparisionFeatures:{
    id:number, 
    name:string, 
    description:string}[], 
    children:ReactNode
}

export default function ComparisionSection(
  {
    comparisionFeatures,  
    children
  }:Props) {
  return (
    <div className="overflow-hidden  py-16 bg-brand-orange-deskibg ">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-0 lg:pl-8">
        <div className="relative     lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            {children}

            <dl className="mt-10 space-y-5  ">
              {comparisionFeatures.map((item, index) => (
                <Feature item={item} key={`feature_key_${item.id}_${index}`} />
              ))}
            </dl>

            <Link href={'/contactus'} className="  bg-brand-orange-deski hover:bg-red-500 rounded-md right-2 inline-block text-white font-medium sm:font-semibold px-4 sm:px-8 mt-8 sm:py-3 py-2 text-sm sm:text-base">
                  Start Here
                </Link>
          </div>

          <div
            className="relative   items-center justify-end mt-10 lg:mt-0"
            aria-hidden="true"
          >
                
            <Image
              src={circle}
              alt=""
              className="absolute w-40 h-40 left-10 -bottom-20"
              style={{
                animation: 'rotate 10s linear infinite'
              }}
            />
            <Image
              src={cross}
              alt=""
              className="absolute w-6 h-6 left-32 -top-10"
              style={{
                animation: "moveUpDown 4s ease-in infinite",
              }}
            />
            <Image
              src={square}
              alt=""
              className="absolute w-4 h-4 right-52 -top-12"

            />
            <Image src={square} alt="" className="absolute w-4 h-4 left-10  inset-y-0 my-auto" />
            <Image
              src={cross}
              alt=""
              className="absolute w-4 h-4 right-64 -bottom-10"
              style={{
                animation: "moveUpDown 4s ease-in infinite",
              }}
            />

            <Image
              className="w-[490px] relative ml-auto"
              width={500}
              height={500}
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
