import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { GoSignOut } from 'react-icons/go'
import { classNames } from '../0unused/EmojiDropDown'
import { useAuth } from '../contexts/AuthContext'
import Submenu from './Submenu'

type Props = {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    navigation: any[]

}

const SidebarMobile = ({sidebarOpen, setSidebarOpen, navigation}: Props) => {
    const [show, setShow] = useState(false);
    const { authState } = useAuth();
  return (
    <>
        {/* Sidebar */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                        </div>
                    </Transition.Child>
                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                        <div className="flex flex-shrink-0 items-center px-4">
                        <img
                            className="h-8 w-auto"
                            src="https://cdn.zigment.ai/assets/zigment_logo_latest.svg"
                            alt="Your Company"
                        />
                        </div>
                        <nav aria-label="Sidebar" className="mt-5">
                        <div className="space-y-1 px-2">
                            {navigation.map((item) => {
                            
                            return (
                                <>
                                    {item.submenu ? 
                                        <div className='w-full' onClick={()=>setSidebarOpen(true)}>
                                                <Submenu
                                                    item={item}
                                                    sidebarWide={false}
                                                    key={`submenu_key_${item.name}`}
                                                    setSidebarOpen={setSidebarOpen}
                                                /> 
                                        </div>
                                    : 
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                            item.current
                                                ? 'bg-gray-100 text-black'
                                                : 'text-black hover:bg-gray-50 hover:text-black',
                                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                            )}
                                        >
                                            <item.icon
                                            className={classNames(
                                                item.current ? 'text-black' : 'text-black group-hover:text-black',
                                                'mr-4 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    
                                    }
                                </>
                            )})}
                        </div>
                        </nav>
                    </div>
                    <div className="flex flex-shrink-0 items-center justify-between border-t border-gray-200 p-4">
                        {authState.user && 
                        <Link href={'/app/setting/general-settings'} className="group block flex-shrink-0">
                        <div className="flex items-center">
                            <div>
                            <img
                                className="inline-block h-10 w-10 rounded-full"
                                referrerPolicy="no-referrer"
                                src={authState.user.image}
                                alt=""
                            />
                            </div>
                            <div className="ml-3">
                            <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                                {authState.user.fullName}
                            </p>
                            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                            </div>
                        </div>
                        </Link>
                        }

                        <button onClick={()=>setShow(true)} >
                            <GoSignOut className="w-7 h-7 text-red-500"/>
                        </button>
                        
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                <div className="w-14 flex-shrink-0" aria-hidden="true">
                    {/* Force sidebar to shrink to fit close icon */}
                </div>
                </div>
            </Dialog>
        </Transition.Root>

        {/* Modal */}
        <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-[20] inset-0 overflow-y-auto"
          onClose={setShow}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Are You Sure You want to Log Out
                    </Dialog.Title>
                    
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <div className="flex">
                    <button
                      type="button"
                      className="w-1/2 m-2 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-deski"
                      onClick={() => setShow(false)}
                    >
                      Cancel
                    </button>
                    <Link href={'/app/signout'}
                        onClick={()=>setShow(false)}
                      className="w-1/2 m-2 inline-flex 
                      justify-center w-full rounded-md 
                      border border-transparent shadow-sm px-4 py-2 bg-brand-orange-deski/90
                       text-base font-medium text-white 
                       hover:bg-brand-orange-deski focus:outline-none 
                       focus:ring-2 focus:ring-offset-2 
                       focus:ring-brand-orange-deski sm:text-sm
                       disabled:opacity-50
                       disabled:cursor-not-allowed
                       "

                    >
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default SidebarMobile