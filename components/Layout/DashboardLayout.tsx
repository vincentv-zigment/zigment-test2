import axiosAPIWithAuth from "@/lib/axiosAPIWithAuth";
import { classNames } from "@/lib/common";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  BellIcon,
  ChevronDoubleLeftIcon,
  ChevronDownIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Spinner from "../common/Spinner";
import LoadingAnimationWithZigLogo from '../common/LoadingAnimationWithZigLogo'
import {
  DashboardLayoutTypes,
  RoleTypes,
  useAuth,
} from "../contexts/AuthContext";
import { useToast } from "../hooks/useToast";
import Submenu from "./Submenu";
import Unauthorized from "./Unauthorized";
import { rolesRoutesAndNavigation } from "./routes/DashboardRoutes";
import ProfileDropDown from "./ProfileDropDown";
import SelectOrganisation from "./SelectOrganisation";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { GoSignOut } from "react-icons/go";
import SidebarMobile from "./SidebarMobile";
import { MdMenu } from "react-icons/md";

function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { authState, handleOrgChange } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const toast = useToast();
  const [sidebarWide, setSideBarWide] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);



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


  const userHasAccessToRoute = (
    userRoles: RoleTypes[],
    pathname: string,
    layout: DashboardLayoutTypes
  ) => {
    if (!userRoles || userRoles.length === 0) return false;

    return userRoles.some((role) => {
      const allowedRoutes = rolesRoutesAndNavigation[layout][role].routes;
      let not_allowed_routes: string[] =
        rolesRoutesAndNavigation[layout][role].not_allowed_routes;
      const dashboardLayoutTypesArray: string[] =
        Object.values(DashboardLayoutTypes);

      let additional_not_allowed_routes: string[] = [];
      dashboardLayoutTypesArray
        .filter((elem) => elem !== layout)
        .forEach((elem) => {
          additional_not_allowed_routes.push(`/app/${elem}/`);
        });
      not_allowed_routes = [
        ...not_allowed_routes,
        ...additional_not_allowed_routes,
      ];
      if (
        not_allowed_routes.includes(pathname) ||
        not_allowed_routes.some((route) => pathname.startsWith(route))
      ) {
        return false;
      }
      return allowedRoutes.some((route) => {
        if (route.endsWith("*")) {
          return pathname.startsWith(route.slice(0, -1));
        }
        return route.toLowerCase() === pathname.toLowerCase();
      });
    });
  };


  useEffect(() => {
    if (authState.isAuthenticated && authState.current_org) {
      const isWaitlisted = authState?.current_org?.waitlist_approved
        ? false
        : true;
      const isSignUpCompleted = authState?.current_org?.signup_completed
        ? true
        : false;
      const isOnboardingCompleted = authState?.current_org?.onboarding_completed
        ? true
        : false;
      if (isWaitlisted) {
        // Redirect to a specific page if waitlist is not approved
        if (
          pathname !== "/app/waitlist" ||
          !pathname.startsWith("/app/waitlist")
        ) {
          window.location.href = `/app/waitlist`;
        }
      } else if (!isSignUpCompleted) {
        // Redirect to a signup completion page
        if (
          pathname !== "/app/sign-up-info" ||
          !pathname.startsWith("/app/sign-up-info")
        ) {
          window.location.href = "/app/sign-up-info";
        }
      } else if (!isOnboardingCompleted) {
        let current_layout = authState.layout_type;
        if (!pathname.startsWith(`/app/${current_layout}/onboarding`) && !pathname.startsWith(`/app/setting/integrations`)) {
          window.location.href = `/app/${current_layout}/onboarding`;
        }
      }
      // Additional conditions can be added here if needed
    }
  }, [authState, router]);

  if (authState.isLoading) {
    return (
      <LoadingAnimationWithZigLogo />
    );
  } else if (!authState.isAuthenticated && pathname.startsWith("/app")) {
    window.location.href = "/signin";
    return (
      <LoadingAnimationWithZigLogo />
    );
  } else if (authState && authState.hide_dashboard_layout) {
    return <div>{children}</div>;
  } else if (
    authState.isAuthenticated &&
    authState.user &&
    authState.current_org &&
    pathname.startsWith("/app")
  ) {
    const userRoles = authState.current_org.roles;
    const hasAccess = userHasAccessToRoute(
      userRoles,
      pathname,
      authState.layout_type
    );
    // Get the user's navigation based on their roles
    const navigation = userRoles
      .map(
        (role: RoleTypes) =>
          rolesRoutesAndNavigation[authState.layout_type][role].navigation
      )
      .flat()
      .filter((value, index, self) => {
        return self.findIndex((item) => item.href === value.href) === index;
      });

    if (!hasAccess) {
      return <Unauthorized />;
    }



    return (
      <div className="flex relative">

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
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                'mr-4 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 items-center justify-between border-t border-gray-200 p-4">
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

                    <GoSignOut className="w-7 h-7 text-red-500" />

                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Side bar for Mobile Screens */}

        <SidebarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navigation={navigation} />

        {/* Static sidebar for desktop */}
        <div
          className="hidden md:block"
          style={{ width: `${sidebarWide ? "60px" : "255px"}` }}
        >
          <div
            className={`fixed h-screen  z-10  md:inset-y-0 md:flex ${sidebarWide ? "w-[60px]" : "w-[255px]"
              }  md:flex-col  `}
            style={{
              backgroundImage:
                "var(--green-yellow, linear-gradient(266deg, #e7f0ff, #eef3f9 ))",
            }}
          >
            {/* Sidebar component, swap this element with another sidebar if you like */}

            <div className="flex flex-grow flex-col overflow-y-auto   border-r border-gray-200  pt-5">
              <div
                className={`flex  flex-shrink-0 items-center px-4 text-center text-zinc-900 text-[25px] font-extrabold`}
              >
                <span className=" ">
                  <Image
                    width={400}
                    height={400}
                    src="https://cdn.zigment.ai/assets/zigment.svg"
                    className={`w-full object-fit ${sidebarWide ? 'block' : 'hidden'}`}
                    alt="zigment"
                  />
                </span>
                <Image
                  src={
                    "https://cdn.zigment.ai/assets/zigment_logo_latest.svg"
                  }
                  width={300}
                  height={300}
                  className={`pr-2 ${sidebarWide ? 'hidden' : 'block'}`}
                  alt="zigment"
                />
              </div>
              <div className={`mt-5 flex  h-full  flex-col`}>
                <nav className="flex justify-between flex-col h-full  px-2 pb-4 ">
                  <div>
                    {navigation.map((item: any) => (
                      <>
                        {item.submenu ? (
                          <Submenu
                            item={item}
                            sidebarWide={sidebarWide}
                            key={`submenu_key_${item.name}`}
                          />
                        ) : (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`text-black    cursor-pointer
                                group flex ${sidebarWide && "justify-center"
                              } items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-600/10`}
                          >
                            <item.icon
                              className={`h-6 w-6     flex shrink-0   ${!sidebarWide && "mr-4"
                                }  `}
                            />

                            {!sidebarWide && (
                              <span
                                className={`${!sidebarWide && "ml-3"
                                  } flex w-full items-center justify-between`}
                              >
                                {item.name}
                              </span>
                            )}
                          </Link>
                        )}
                      </>
                    ))}
                  </div>
                  <div>
                    {!sidebarWide && (
                      <div className=" md:flex   w-full flex-col items-center justify-center">
                        <div className="w-[95%]   px-3 py-4 bg-green-800 bg-opacity-10 rounded-lg border border-gray-400 flex-col justify-start items-start gap-5 inline-flex">
                          <div className="w-full   flex-col justify-start items-start gap-2.5 flex">
                            <div className="  text-green-900 text-base font-medium ">
                              Tip
                            </div>
                            <div className="  text-neutral-500 text-xs font-normal ">
                              You can find all your integrations and
                              communication channels listed in Settings. You can
                              add and edit them as you like.
                            </div>
                          </div>

                        </div>
                        <button
                          className="w-[95%] h-12 p-2 mt-2 rounded-lg border border-gray-400 hover:bg-gray-600/10 flex  justify-start items-center gap-2.5 "
                          onClick={() => {
                            window.location.href = "/app/signout";
                          }}
                        >
                          <ArrowRightOnRectangleIcon className="w-6 h-6 relative text-brand-solidgreen " />
                          <span className="text-center text-brand-solidgreen text-sm font-medium ">
                            Log Out
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </nav>
              </div>
            </div>

          </div>
        </div>


        <div
          className={` flex flex-col ${sidebarWide ? "w-full md:w-[calc(100%-60px)]" : "w-full md:w-[calc(100%-254px)]"
            } `}

        >
          <div
            className={`w-full z-20 flex h-16 bg-white fixed shadow ${sidebarWide ? "w-full md:w-[calc(100%-60px)]" : "w-full md:w-[calc(100%-254px)]"
              }`}

          >
            <div className="w-full px-2 md:px-4 flex justify-between md:justify-end items-center  relative  ">
              <div className="md:hidden flex items-center gap-3 text-xl font-semibold">
                <button onClick={() => setSidebarOpen(true)}>
                 <MdMenu className="w-7 h-7 text-gray-600"/> 

                </button>
                <Image
                    src={
                      "https://cdn.zigment.ai/assets/1710501635-zigment-svg-exact.png"
                    }
                    width={300}
                    height={300}
                    className={` w-auto h-10 object-fit`}
                    alt="zigment"
                  />
                {pathname.split('/')[pathname.split('/').length - 2] === 'setting' ? 'Settings' : navigation.find((x) => x.href === pathname)?.name}
              </div>
              <button
                className="hidden sm:inline-block border absolute z-[2000] top-1/2 -translate-y-1/2 -left-[12px] bg-white p-1 rounded-md cursor-pointer"
                onClick={() => setSideBarWide(!sidebarWide)}
              >
                <ChevronDoubleLeftIcon
                  className={`w-4 h-4 ${sidebarWide && "rotate-180"}`}
                />
              </button>


              <div className="  flex gap-2 items-center w-fit  ">
                <SelectOrganisation />

                {/* <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-deski"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                <ProfileDropDown />
              </div>
            </div>
          </div>

          <main className="  pt-16">{children}</main>

        </div>
      </div>
    );
  } else {
    return <div className="relative">{children}</div>;
  }
}

export default DashboardLayout;
