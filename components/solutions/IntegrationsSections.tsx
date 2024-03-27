import { PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { MdSms } from "react-icons/md";
import curveline from "@/assets/images/solutions/curveline.svg";
import Image from "next/image";
import line from '@/assets/images/solutions/hero/line-shape-1.svg'
import SolutionSectionHeading from "./SolutionSectionHeading";

type Props = {
  title:string,
  description:string
}

export default function IntegrationsSections({title,description }:Props) {
  return (
    <div className="sm:mb-10">
      <div className="relative   bg-[#fdf3e7]">
        <div className=" py-10 sm:py-16     ">
          <div className="relative mx-auto max-w-7xl sm:h-[330px] px-4 sm:static sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center font-outfit">
              <SolutionSectionHeading className="" >
                {title}{" "}
                <Image src={line} alt="line" width={200} className="w-[250px] sm:w-[400px]   absolute inset-x-0 mx-auto  "/>
              </SolutionSectionHeading>
              <p className="text-xs sm:text-lg text-brand-gray-300 mt-10">
                {" "}
                {description}
              </p>
            </div>
            <div className="md:absolute   mx-auto md:inset-x-0 sm:pt-10">
              <div className="mt-10 w-full   ">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className=" lg:w-full mx-auto flex justify-center"
                >
                  <div className="     ">
                    <div className="flex items-center space-x-2 lg:space-x-4">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4">
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer">
                          <Image
                            width={50}
                            height={50}
                            src="https://cdn.zigment.ai/assets/Google_Drive_logo.png"
                            alt=""
                            className="h-6 sm:h-12 w-6 sm:w-12 object-cover object-center"
                            priority={false}
                          />
                        </div>
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer">
                          <Image
                            width={50}
                            height={50}
                            src="https://cdn.zigment.ai/assets/Instagram_logo_2016.svg"
                            alt=""
                            className="h-6 sm:h-12 w-6 sm:w-12 object-cover object-center"
                            priority={false}
                          />
                        </div>
                      </div>
                      <div className="grid -mt-12 sm:-mt-24 flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4">
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer">
                          <Image
                            width={50}
                            height={50}
                            src="https://cdn.zigment.ai/assets/facebook.png"
                            alt=""
                            className="h-6 sm:h-12 w-6 sm:w-12 object-cover object-center"
                            priority={false}
                          />
                        </div>
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer">
                          <Image
                            width={50}
                            height={50}
                            src="https://cdn.zigment.ai/assets/WhatsApp.svg.webp"
                            alt=""
                            className="h-6 sm:h-12 w-6 sm:w-12 object-cover object-center"
                            priority={false}
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4">
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer">
                          <Image
                            width={50}
                            height={50}
                            src="https://cdn.zigment.ai/assets/Salesforce.com_logo.svg"
                            alt=""
                            className="h-6 sm:h-12 w-6 sm:w-12 object-fit object-center"
                            priority={false}
                          />
                        </div>
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer">
                          <Image
                            width={50}
                            height={50}
                            src="https://cdn.zigment.ai/assets/hubspot.webp"
                            alt=""
                            className="h-6 sm:h-12 w-6 sm:w-12 object-cover object-center"
                            priority={false}
                          />
                        </div>
                      </div>
                      <div className="grid -mt-12 sm:-mt-24 flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4">
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer">
                          <Image
                            width={50}
                            height={50}
                            src="https://cdn.zigment.ai/assets/microsoft.svg"
                            alt=""
                            className="h-6 sm:h-12 w-6 sm:w-12 object-cover object-center"
                            priority={false}
                          />
                        </div>
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer">
                          <Image
                            width={50}
                            height={50}
                            src="https://cdn.zigment.ai/assets/freshdesk.png"
                            alt=""
                            className="h-6 sm:h-12 w-6 sm:w-12 object-cover object-center"
                            priority={false}
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4">
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer">
                          <MdSms className="w-6 sm:w-12 h-6 sm:h-12 text-slate-400" />
                        </div>
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg     flex items-center   bg-white justify-center cursor-pointer">
                          <Image
                            width={50}
                            height={50}
                            src="https://cdn.zigment.ai/assets/Amazon_Web_Services_Logo.svg"
                            alt=""
                            className="h-6 sm:h-12 w-6 sm:w-12 object-fit object-center"
                            priority={false}
                          />
                        </div>
                      </div>
                      <div className="grid -mt-12 sm:-mt-24 flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4">
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg   lg:opacity-100 flex items-center   bg-white justify-center cursor-pointer">
                          <PhoneIcon className= "w-6 sm:w-12 h-6 sm:h-12 text-slate-400" />
                        </div>
                        <div className="h-12 sm:h-24 w-12 sm:w-24 overflow-hidden rounded-lg     flex items-center   bg-white justify-center cursor-pointer">
                          <Image
                            width={50}
                            height={50}
                            src="https://cdn.zigment.ai/assets/Gmail_icon_(2020).svg"
                            alt=""
                            className="h-6 sm:h-12 w-6 sm:w-12 object-fit object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image className="w-full" src={curveline} alt="curveline" />
    </div>
  );
}
