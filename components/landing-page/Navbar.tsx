"use client"

import { CurrencyDollarIcon } from '@heroicons/react/20/solid';
import { PencilSquareIcon, SquaresPlusIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiBuildings, BiSpa } from 'react-icons/bi';
import { BsFileEarmarkBarGraph, BsPersonWorkspace } from 'react-icons/bs';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdAutoGraph, MdOutlineSportsBasketball } from 'react-icons/md';
import { RiAdvertisementLine, RiBook2Fill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import FlyoutMenu2 from './Navbar/FlyoutMenu2';
import Logo from './Navbar/Logo';
import Sidebar from './Navbar/Sidebar';
import FlyoutMenu from './Navbar/TailwindNav';
import { useRouter } from 'next/router';
import { IoIosPeople } from 'react-icons/io'



const menuItems = [
  {
    name: 'Solutions',
    subMenu: [

      {
        name: 'Lead Automation',
        description: 'Automate Leads, Maximize Conversions',
        href: '/solutions/zigment',
        icon: MdAutoGraph
      }
      ,
      // {
      //   name: 'Sales Assistant',
      //   description: 'Never Miss a Conversation Again',
      //   href: '/solutions/salesassistant',
      //   icon: FcAssistant
      // },
      {
        name: 'For Coaches ',
        description: 'Engage More, Stress Less',
        href: '/solutions/coaches',
        icon: MdOutlineSportsBasketball
      },
      {
        name: 'For Webinars ',
        description: 'Webinar Follow-Ups, Automated and Personalized',
        href: '/solutions/webinars',
        icon: BsPersonWorkspace
      },
      {
        name: 'For Gyms and Spa ',
        description: 'Automate Leads, Maximize Conversions',
        href: '/solutions/gymnspa',
        icon: BiSpa
      },
      {
        name: 'For Fundraising ',
        description: 'AI Closers: Fundraising Made Easy',
        href: '/solutions/fundraising',
        icon: CurrencyDollarIcon
      },
      {
        name: 'For Advertising ',
        description: 'Turn Ads Into Conversations',
        href: '/solutions/advertising',
        icon: RiAdvertisementLine
      },
      {
        name: 'Managed Sales ',
        description: `Qualify Leads, Close Deals Faster With AI`,
        href: '/solutions/managedsales',
        icon: BsFileEarmarkBarGraph
      },
      {
        name: 'For Real Estate',
        description: 'AI Enhanced: Human Powered Sales',
        href: '/solutions/realestate',
        icon: BiBuildings
      },
      {
        name: 'For Saas',
        description: 'Replace your Chatbot With a Live AI Sales Rep',
        href: '/solutions/saas',
        icon: FaCloudDownloadAlt
      },
      {
        name: 'For HR',
        description: 'Reach More Candidates, Spend Less Time',
        href: '/solutions/zighr',
        icon: IoIosPeople
      },

    ]
  },
  {
    name: 'Pricing',
    href: '/pricing'
  },
  {
    name: 'Resources',
    subMenu: [
      {
        name: 'About us',
        href: '/aboutus',
        icon: UserGroupIcon,
        description: 'Building the most advanced conversational sales platform',
      },
      {
        name: 'Blogs',
        href: '/blog',
        icon: PencilSquareIcon,
        description: 'Your AI Sales assistant with superhuman abilities',
      },
      {
        name: 'Integrations',
        href: '/integrations',
        icon: SquaresPlusIcon,
        description: "Connect with third-party tools that you're already using",
      }
      ,
      {
        name: 'Ebooks',
        href: '/ebook',
        icon: RiBook2Fill,
        description: "Unlock successful conversational sales with our exclusive Ebook ",
      }

    ]
  },
  {
    name: 'Login',
    href: '/signin'
  },


]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter()
  console.log(router.pathname.split('/')[1], 'router pathname')

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>

        <nav
          className={`bg-white flex items-center  ${hasScrolled ? 'drop-shadow-md h-[80px]' : 'h-[100px]'}  z-40 fixed w-full duration-50 transition-all overflow-hidden lg:overflow-visible`}
        >
          <div className='w-full px-5 md:px-10 flex items-center   border-slate-300 justify-between h-[80px] z-40 relative bg-white'>
            <Logo src={'https://cdn.zigment.ai/assets/zigment_logo_latest.svg'} />
            <div className='flex gap-10 items-center hidden lg:flex'>
              {menuItems.map((x, i) => {
                if (x.href) {
                  return <Link href={x.href} key={`menu_items_key_${x.name}`} className='font-outfit text-md cursor-pointer hover:text-brand-orange-deski'>{x.name}</Link>
                }
                if (x.subMenu) {
                  if (x.name === 'Solutions') return <FlyoutMenu2 menu={x} key={`submenu_key_${i}`} />
                  else return <FlyoutMenu menu={x} key={`submenu_key_${i}`} />
                }
              })}
              <Link
                href="/contactus"
                className="group mx-auto lg:mx-0 inline-flex items-center space-x-2.5 bg-brand-orange-deskibg font-semibold text-brand-orange-deski rounded-full hover:bg-brand-orange-deski hover:text-white border border-brand-orange-deski transition duration-200 py-2 px-4 "

              >
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 lg:w-6 lg:h-6 group-hover:fill-brand-blue group-hover:translate-x-2 transition duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </Link>

            </div>
            <button className='lg:hidden' onClick={() => setOpen(true)}>  <RxHamburgerMenu size={25} />
            </button>
          </div>

        </nav>
      </header>

      <Sidebar open={open} setOpen={setOpen} menuItems={menuItems} />
    </>
  );
}
