import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { classNames } from '@/lib/common';

type Props = {};
const userNavigation = [
    // { name: "Your Profile", href: "/app/profile" },
    { name: "Settings", href: "/app/setting/general-settings" },
    { name: "Sign out", href: "/app/signout" },
  ];

const ProfileDropDown = (props: Props) => {
    const { authState, handleOrgChange } = useAuth();
  return (
    <Menu as="div" className="ml-3 shrink-0  relative hidden md:block">
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
                            <span
                              onClick={() => {
                                window.location.href = item.href;
                              }}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                              )}
                            >
                              {item.name}
                            </span>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
  )
}

export default ProfileDropDown