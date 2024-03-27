import React from 'react';
import { MdCheck, MdClose } from "react-icons/md";

import { FaCheck } from "react-icons/fa";
import { IoCloseSharp, IoCheckmarkSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { CgClose } from "react-icons/cg";
import { CgCheck } from "react-icons/cg";
import { IoCheckmark } from "react-icons/io5";

import SolutionSectionHeading from './SolutionSectionHeading';
import Image from 'next/image';


import line from "@/assets/images/solutions/hero/line-shape-1.svg";


const FeatureComparisonSection = () => {
  // This array would ideally come from props or a store in a real application
  const features = [
    { name: 'Smart Conversations', zigment: true, manual: true, bots:false },
    { name: 'Instant Response', zigment: true, manual: false, bots:true },
    { name: 'Funnel Tracking & Data Insights', zigment: true, manual: false, bots:false },
    { name: 'Infinitely Scalable', zigment: true, manual: false, bots:true },
    { name: 'Quick Setup', zigment: true, manual: false, bots:false },
    // Add the rest of the features here...
  ];

  return (
    <div className='relative bg-brand-orange-deskibg px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
        <div className="mx-auto w-full max-w-5xl">
        <SolutionSectionHeading className='lg:hidden mb-10 text-center' ><div>5 Reasons to </div>
          <Image src={line} alt="" className="w-[200px] ml-24 md:m-0 sm:w-[300px]  " />

          <div className="-mt-3">Choose Us</div></SolutionSectionHeading>
        <div className='grid grid-cols-10 md:grid-cols-12 gap-2 md:gap-6 items-center'>
            <div className='col-span-4  md:col-span-6 pr-10'>
            <SolutionSectionHeading className=" hidden md:block">
          <div>5 Reasons to </div>
          <Image src={line} alt="" className="w-[200px] sm:w-[300px]  " />

          <div className="-mt-3">Choose Us</div>
        </SolutionSectionHeading>
            </div>
           
            <PlanCard planType={'Manual'} src={'https://cdn.zigment.ai/assets/zigment_logo_latest.svg'} price={'FREE'}/>
            <PlanCard planType={'Human Agents'} price={'FREE'}/>
            <PlanCard planType={'Scripted Bots'} price={'FREE'}/>
            {/* Plan Cards */}
            {/* ... */}
        </div>
        <div className="w-full mt-8">
            {features.map((x, i)=>{
            return (
            <FeatureRow 
                key={`feature_key_${x.name}`}
                zigment={x.zigment} 
                manual={x.manual} 
                bots={x.bots} 
                featureName={x.name} 
                index={i}
            />
            )
            })}
            
            {/* Feature Comparison Grid */}
            {/* ... */}
        </div>
        </div>
    </div>
  );
};

export default FeatureComparisonSection;

// Plan Card Component
type PlanCardProp = {
    planType: string,
    price: string,
    src?: string
}
const PlanCard = ({ planType,src, price }:PlanCardProp) => {
  return (
    <div className="w-full flex items-end  col-span-2">
      <div className='w-28  md:bg-white lg:w-36  lg:h-36  rounded overflow-hidden md:drop-shadow-lg   rounded-xl flex flex-col items-center justify-between'>

        {src ? 
            <div className='flex flex-col w-full h-full items-center justify-center  font-bold text-center'>
                
                <Image src={src} className='w-3/4  object-contain' width={100} height={200} alt=''/>
                <p className='flex items-center justify-between  md:text-lg lg:text-2xl font-bold text-center'>
                    Agents
                </p>
            </div> : 
            <div className='flex h-full items-center justify-between  md:text-lg lg:text-2xl font-bold text-center'>
            {planType}
            </div>
        }
        {/* <div className={`w-full text-center px-3 py-2 font-bold rounded-b text-white ${price === 'FREE' ? 'bg-green-700/60' : 'bg-red-400'}`}>{price}</div> */}
      </div>
    </div>
  );
};

type FeatureRowI = {
    featureName: string;
    zigment:boolean;
    bots:boolean;
    manual:boolean;
    index: number

}

// Feature Row Component
const FeatureRow = ({ featureName, zigment, bots, manual, index }: FeatureRowI) => {
  return (
    <div className={`grid grid-cols-10 md:grid-cols-12 w-full gap-2 md:gap-6  py-4 ${index%2===0 && 'bg-[#FFEAC7]' }  rounded-lg`} >
      <span className="col-span-4   md:col-span-6 px-6 font-bold text-sm md:text-lg">{featureName}</span>
      <span className="flex items-center justify-center col-span-2">{zigment ? <CheckIcon/> : <CrossIcons/>}</span>
      <span className="flex items-center justify-center col-span-2">{manual ? <CheckIcon/> : <CrossIcons/>}</span>
      <span className="flex items-center justify-center col-span-2">{bots ? <CheckIcon/> : <CrossIcons/>}</span>
    </div>
  );
};


const spanstyle = 'p-1 md:p-1 rounded-md  md:w-5 md:h-5 flex items-center justify-center scale-150	'
const CheckIcon = () => {
  return (
    <span className={`${spanstyle} bg-green-700/60`}>
        <IoCheckmarkSharp className='text-white w-3 h-3 md:font-bold  md:stroke-2 md:hidden'/>
        <FaCheck className='text-white w-3 h-3 md:font-bold stroke-1 md:stroke-2 hidden md:block'/>
    </span>
  )
} 

const CrossIcons = () => {
  return(

  <span className={`${spanstyle} bg-red-400`}>
    <CgClose className='text-white w-3 h-3 md:font-bold md:stroke-2	'/>
  </span>
  )
}

