

import line from '@/assets/images/solutions/hero/line-shape-1.svg'
import Image from 'next/image';
import SolutionSectionHeading from './SolutionSectionHeading';

type Props = {
  heading:string,
  sub1:string,
  sub2:string,
  sub3:string
}

export default function EmphasisSection({heading, sub1, sub2, sub3}:Props) {
  return (
    <div className="bg-brand-orange-deskibg">
      <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-12 w-full">
        <div className="  rounded-lg  flex   w-full items-center justify-center">
          <div className=" sm:py-10 flex items-center justify-center w-full">
            <div className="lg:self-center">
              <div className='  text-center font-medium font-medium relative'>
                <SolutionSectionHeading>
                  {heading}
                </SolutionSectionHeading>
                <div className="absolute -bottom-4  inset-x-0 mx-auto">
                  <Image src={line} alt='' className='w-[200px]  mx-auto' />
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
