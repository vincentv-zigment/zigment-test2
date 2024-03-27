import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react'
import { DashboardLayoutTypes, RoleTypes, useAuth } from '../contexts/AuthContext';
import { ChevronDownIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import { classNames } from '@/lib/common';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useToast } from '../hooks/useToast';
import axiosAPIWithAuth from '@/lib/axiosAPIWithAuth';
import { rolesRoutesAndNavigation } from './routes/DashboardRoutes';
import LoadingAnimationWithZigLogo from '../common/LoadingAnimationWithZigLogo';
import Spinner from '../common/Spinner';

type Props = {}

const SelectOrganisation = (props: Props) => {
  const { authState, handleOrgChange } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const toast = useToast();
  const [changeOrAddOrgSpinner, setChangeOrAddOrgSpinner] = useState(false);
  const [sidebarWide, setSideBarWide] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSideBarWide(true)
      }
    };

    // Call the function initially to set the screen type based on the current screen size
    handleResize();

    // Add the event listener for resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define the allowed routes for each role

  const changeCurrentOrg = async (orgId: string) => {
    setChangeOrAddOrgSpinner(true);
    await handleOrgChange(orgId);
  };
  const handleNewOrg = async () => {
    setChangeOrAddOrgSpinner(true);
    try {
      const createNewOrgRes = await axiosAPIWithAuth.post(
        "/organizations/create-new"
      );
      const newOrgId = createNewOrgRes.data;
      await handleOrgChange(newOrgId);
      toast.addToast("success", "New organization created successfully");
    } catch (err: any) {
      console.log(err);
      let errorMsg = "Something went wrong while creating organization";

      // Check if err object has response data and it has a message property
      if (err.response && err.response.data && err.response.data.message) {
        errorMsg = err.response.data.message;
      }

      toast.addToast("error", errorMsg);
    }
    setChangeOrAddOrgSpinner(false);
  };

  return (
    <>
      {authState.current_org
        &&
        <>
          {changeOrAddOrgSpinner && <Spinner color="text-brand-orange-deski" />}
          <Menu
            as="div"
            className="relative inline-block text-left w-[150px] md:w-[270px]"
          >
            <div>
              <Menu.Button className="flex h-10 md:h-fit w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-orange-deski focus:ring-offset-2 focus:ring-offset-gray-100 ">
                <span className="md:hidden text-xs flex items-center h-full">
                  {authState.current_org.org_name.slice(0, 18)} {authState.current_org.org_name.length > 18 && '..'}
                </span>
                <span className="hidden md:block">
                  {authState.current_org.org_name}
                </span>
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
                          if (!changeOrAddOrgSpinner) {
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
        </>
      }

    </>
  )
}

export default SelectOrganisation