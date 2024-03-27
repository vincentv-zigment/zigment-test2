import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Reports',
    description: 'Get detailed reports that will help you make more informed decisions',
    href: '#',
    icon: DocumentChartBarIcon,
  },
]

 

export default function FlyoutMenu2({menu }:any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group ">
      <div
        className="inline-flex items-center gap-2 cursor-pointer  h-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='font-outfit text-md'>{menu.name}</div>
        <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
      </div>

      {/* Show the Popover.Panel when isHovered is true */}
      {(
        <div
          className={`absolute -translate-x-1/3 top-[60px] z-[100] mt-5 flex w-screen max-w-max px-4 ${isHovered ? 'h-fit opacity-1' : 'h-0 opacity-0'} transition-all	duration-300	`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}

        >
          <div className="w-screen  max-w-4xl   flex-auto overflow-hidden rounded-lg bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 ">
            <div className="p-2 grid grid-cols-2 relative  ">
              {menu.subMenu.map((item: any) => (
                <div key={item.name} className="group    relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-200 ">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                    {typeof item.icon === 'string' && <Image   src={item.icon} width={20} height={20} alt='' />}
                    {
                      typeof item.icon !== 'string' &&
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-brand-orange-deski" aria-hidden="true" />
                    }
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    
  )
}
