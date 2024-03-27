import Head from "next/head";
import Image from "next/image";

export default function CustomHero({
  children,
  img = "https://cdn.zigment.ai/assets/1706524560-HeroImage.svg",
}: any) {
  return (
    <div className="relative bg-white  ">
     
      <main className="lg:relative flex flex-col flex-col-reverse	 lg:flex-row  ">
        <div className="     w-full  max-w-2xl mx-auto  text-center  flex items-center lg:text-left ">
          <div className="px-4  sm:px-8 mx-auto lg:mx-0   ">{children}</div>
        </div>
        <div className="relative flex items-center justify-center px-4 w-full md:w-3/4 lg:w-1/2 mx-auto my-4 md:my-0">
          <Image
            className="inset-0 w-full h-full  md:h-[600px] md:my-4  object-fit"
            src={img}
            alt=""
            width={100}
            height={100}
            priority={true}
          />
        </div>
      </main>
    </div>
  );
}
