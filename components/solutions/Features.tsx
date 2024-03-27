import Image from "next/image";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import { ReactNode } from "react";



type Props = {
  contents: {
    id: number,
    title: string,
    para: string,
    img: any
  }[],
  heading?: string,
  children: ReactNode
}


export default function Features(
  {
    contents,
    children
  }: Props) {
  return (
    <div className="overflow-hidden   py-16  ">
      <div className="relative mx-auto max-w-xl px-4 lg:max-w-7xl lg:px-8">
        <div className="relative">
          {children}
        </div>
        <div className="space-y-6 lg:space-y-0">
          {contents.map((content, i) => {
            return (
              <div className={`relative lg:grid  lg:grid-cols-2 lg:items-center  `} key={`feature_key_${content.id}`}>
                <div className={`relative px-2 lg:px-10 ${i % 2 === 0 && 'lg:order-last'}`}>
                  <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {content.title}
                  </h3>
                  <p className="mt-3 sm:text-lg text-gray-500">{content.para}</p>
                </div>

                <div className="relative   lg:mt-0" aria-hidden="true">
                  <Image
                    className="relative mx-auto"
                    width={300}
                    src={content.img}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
