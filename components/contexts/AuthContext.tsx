import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../common/Spinner";
import { posthog } from "posthog-js";
import { jwtPayload } from "@/pages/sso/callback";
import { CookieKeys } from "@/lib/static-common-data";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import LoadingAnimationWithZigLogo from "../common/LoadingAnimationWithZigLogo";

export enum RoleTypes {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  TEAM_MEMBER = "TEAM_MEMBER",
}

export const rolePriority = [
  RoleTypes.SUPER_ADMIN,
  RoleTypes.ADMIN,
  RoleTypes.TEAM_MEMBER,
];

interface User {
  // You can add fields according to your requirements
  email: string;
  fullName: string;
  image: string;
  email_verified: boolean;
  timezone: string;
  _id: string;
}
export enum DashboardLayoutTypes {
  DEFAULT = 'DEFAULT',
  CTWA = 'CTWA',
  CREATOR = 'CREATOR',
  SUPEHR = 'SUPEHR'
}
export interface OrgLevelData {
  org_id: string;
  roles: RoleTypes[];
  onboarding_completed: boolean;
  signup_completed: boolean;
  waitlist_approved: boolean;
  org_name: string;
  layout: DashboardLayoutTypes;
  is_account_paid?: boolean;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  all_orgs: OrgLevelData[];
  current_org: OrgLevelData | null;
  isLoading: boolean;
  hide_dashboard_layout: boolean;
  layout_type: DashboardLayoutTypes;
}

interface AuthContextType {
  authState: AuthState;
  triggerAuth: () => void;
  handleOrgChange: (org_id: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  authState: {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    all_orgs: [],
    current_org: null,
    hide_dashboard_layout: false,
    layout_type: DashboardLayoutTypes.DEFAULT
  },
  triggerAuth: () => { },
  handleOrgChange: (org_id: string) => { },
  signOut: () => { },
});

export const AuthProvider = ({ children }: any) => {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    isLoading: true,
    current_org: null,
    all_orgs: [],
    hide_dashboard_layout: false,
    layout_type: DashboardLayoutTypes.DEFAULT
  });

  const signOut = () => {
    Cookies.set(CookieKeys.ACCESS_TOKEN, "", { expires: 0 });
    Cookies.set(CookieKeys.PAYLOAD_DATA, "", { expires: 0 });
    Cookies.set(CookieKeys.CURRENT_ORG_ID, "", { expires: 0 });
    window.location.href = "/signin";
  };
  const handleOrgChange = async (org_id: string) => {

    try {
      Cookies.set(CookieKeys.CURRENT_ORG_ID, org_id);
      getAuthData(`/app`);
    }
    catch (err) {
      console.log(err)
    }
  };
  const getAuthData = async (change_url?: string) => {
    const token = Cookies.get(CookieKeys.ACCESS_TOKEN);
    const prePayload = Cookies.get(CookieKeys.PAYLOAD_DATA);
    const payload: jwtPayload = prePayload ? JSON.parse(prePayload) : null;
    const selectedOrgId = Cookies.get(CookieKeys.CURRENT_ORG_ID);

    if (token && payload && selectedOrgId) {
      let selectedOrg = selectedOrgId ? selectedOrgId : undefined;

      let findOrgData: OrgLevelData | undefined = payload.current_org;
      let access_roles = findOrgData ? findOrgData.roles : [];
      if (access_roles.length === 0) {
        access_roles = [];
      }


      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/users/verify-token`, {
          headers: {
            Authorization: `Bearer ${token}`, // assuming the server expects a Bearer token
            "x-org-id": selectedOrg,
          },
        })
        .then((response) => {

          const user: User = response.data.user;
          const org_data: OrgLevelData[] = response.data.orgsAndRoles
            ? response.data.orgsAndRoles
            : [];
          const getLatestOrgData = org_data.find(
            (org: OrgLevelData) => org.org_id === selectedOrg
          );

          posthog.identify(user._id, {
            name: user.fullName,
            email: user.email,
            onboarding_completed: findOrgData
              ? findOrgData.onboarding_completed
              : false,
            signup_completed: findOrgData ? findOrgData.signup_completed : false,
          });
          setAuthState({
            isAuthenticated: true,
            user,
            isLoading: false,
            current_org: getLatestOrgData ? getLatestOrgData : null,
            all_orgs: org_data,
            hide_dashboard_layout: checkPathname(),
            layout_type: getLatestOrgData ? getLatestOrgData.layout : DashboardLayoutTypes.DEFAULT
          });
          if (change_url && change_url.length > 0) {
            window.location.href = change_url;
          }
        })
        .catch((error) => {
          // Token verification failed
          setAuthState({
            isAuthenticated: false,
            user: null,
            isLoading: false,
            all_orgs: [],
            current_org: null,
            hide_dashboard_layout: checkPathname(),
            layout_type: DashboardLayoutTypes.DEFAULT
          });
        });
    } else {
      // No token in local storage
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        current_org: null,
        all_orgs: [],
        hide_dashboard_layout: checkPathname(),
        layout_type: DashboardLayoutTypes.DEFAULT
      });
    }
  };

  const checkPathname = () => {
    const dashboardLayoutTypesArray: string[] = Object.values(DashboardLayoutTypes);
    const convertedStringsForOnboarding = dashboardLayoutTypesArray.map((elem) => {
      return `/app/${elem}/onboarding`;
    })
    const hideForPaths = [
      "/app/setting/integrations/",
      "/app/waitlist",
      "/app/sign-up-info",
      ...convertedStringsForOnboarding
    ]
    return hideForPaths.some((path) => router.pathname.startsWith(path))
  }
  useEffect(() => {
    console.log(router.pathname.startsWith("/app/setting/integrations/"))
    if (checkPathname()) {
      setAuthState({
        ...authState,
        hide_dashboard_layout: true,
      })
    }
  }, [router.pathname])
  useEffect(() => {
    getAuthData();
  }, []);



  return (
    <AuthContext.Provider
      value={{ authState, triggerAuth: getAuthData, signOut, handleOrgChange }}
    >
      {authState.isLoading ? (
        <LoadingAnimationWithZigLogo />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
