import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from "react";

type Props = {
    item: any;
    sidebarWide: boolean;
    setSidebarOpen?: Dispatch<SetStateAction<boolean>>
};

const Submenu = ({ item, sidebarWide, setSidebarOpen }: Props) => {
    const [open, setOpen] = useState(false);




    return (
        <Menu as='div' className="relative w-full" onClick={() => setOpen(!open)}  >
            <Menu.Button
                key={item.name}
                className={`text-black w-full cursor-pointer
        group flex relative ${sidebarWide && "justify-center"
                    } items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-600/10`}
            >
                <item.icon
                    className={`h-6 w-6     flex shrink-0   ${!sidebarWide && "mr-4"}  `}
                />

                {!sidebarWide && (
                    <span
                        className={`${!sidebarWide && "md:ml-3 "
                            } flex w-full items-center justify-between`}
                    >
                        {item.name}
                        <button>
                            {<ChevronDownIcon className="h-4 w-4 flex shrink-0" />}
                        </button>
                    </span>
                )}
            </Menu.Button>
            <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >

                    <div className={` bg-white ${!sidebarWide && 'p-1'} absolute top-10 rounded-lg ${!sidebarWide && 'ml-4'} max-h-64  block`} >
                        {item.submenu.map((x: any) => {
                            return (
                                <Menu.Items>
                                    <Link
                                          onClick={()=>{
                                            if(setSidebarOpen){
                                              setTimeout(()=>{
                                                setSidebarOpen(false)
                                              },200)
                                            }
                                          }}
                                          href={x.href}
                                          key={x.name}
                                        className={`text-black cursor-pointer
                                          group flex ${sidebarWide && "justify-center"} items-center p-2 text-sm font-medium rounded-md hover:bg-gray-600/10`}
                                        >
                                        <x.icon
                                            className={`h-6 w-6     flex shrink-0   ${!sidebarWide && "mr-1"
                                                }  `}
                                        />

                                        {!sidebarWide && (
                                            <span
                                                className={`${!sidebarWide && "ml-2"
                                                    } flex w-full items-center justify-between`}
                                            >
                                                {x.name}
                                            </span>
                                        )}
                                    </Link>
                                </Menu.Items>
                            );
                        })}
                    </div>
                  </Transition>
        </Menu>
    );
};

export default Submenu;


{/* <div className="  flex gap-2 items-center  ">
                {isAddingNewOrg && <Spinner color="text-brand-orange-deski" />}
                <Menu as="div" className="relative inline-block text-left w-[270px]">
                  <div>
                    <Menu.Button className="flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-orange-deski focus:ring-offset-2 focus:ring-offset-gray-100 ">
                      {authState.current_org.org_name}
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {authState.all_orgs.map((org) => (
                          <Menu.Item key={`menu_item_${org.org_id}`}>
                            {({ active }) => (
                              <span
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "group flex items-center px-4 py-2 text-sm cursor-pointer"
                                )}
                                onClick={() => {
                                  if (
                                    org.org_id !== authState.current_org?.org_id
                                  ) {
                                    changeCurrentOrg(org.org_id);
                                  }
                                }}
                              >
                                {org.org_name}
                                <span
                                  className={classNames(
                                    "text-xs",
                                    org.org_id === authState.current_org?.org_id
                                      ? "text-rose-500"
                                      : "text-gray-400"
                                  )}
                                >
                                  {org.org_id ===
                                    authState.current_org?.org_id &&
                                    `(Current)`}
                                </span>
                              </span>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "group flex items-center px-4 py-2 text-sm cursor-pointer"
                              )}
                              onClick={(e) => {
                                if (!isAddingNewOrg) {
                                  handleNewOrg();
                                }
                              }}
                            >
                              <PlusCircleIcon
                                className="mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Add Organization
                            </span>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-deski"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <Menu as="div" className="ml-3 shrink-0  relative">
                  <div>
                    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-deski">
                      <span className="sr-only">Open user menu</span>
                      {authState.user && (
                        <img
                          className="h-8 w-8 shrink-0 rounded-full obect-cover"
                          src={authState.user.image}
                          alt=""
                        />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div> */}