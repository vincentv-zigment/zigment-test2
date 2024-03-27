import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { OrgLevelData, RoleTypes, useAuth } from "@/components/contexts/AuthContext";
import Spinner from "@/components/common/Spinner";
import { CookieKeys } from "@/lib/static-common-data";
import Cookies from "js-cookie";
import axiosWithoutAuth from "@/lib/axiosAPIwithoutAuth";
import Image from "next/image";
import LoadingAnimationWithZigLogo from "@/components/common/LoadingAnimationWithZigLogo";
export interface jwtPayload {
  email: string;
  current_org: OrgLevelData;
}

export default function LoginSuccess() {
  const router = useRouter();
  const { triggerAuth } = useAuth();

  useEffect(() => {
    const { jwt, integration_redirect } = router.query;

    const exchangeToken = async (token: string | string[]) => {

      try {
        const response = await axiosWithoutAuth.post(`/users/exchange-token`, {
          token: token
        });
        if (response.data) {
          let app_jwt_token = response.data as string;
          let jwt_token = app_jwt_token
          const payload = JSON.parse(
            Buffer.from(jwt_token.split(".")[1], "base64").toString()
          ) as jwtPayload;

          let current_org = payload.current_org;
          if (!current_org) {
            console.log("No orgs found for the user");
            throw new Error("No orgs found for the user");
          }

          Cookies.set(CookieKeys.ACCESS_TOKEN, app_jwt_token as string);
          Cookies.set(CookieKeys.PAYLOAD_DATA, JSON.stringify(payload));
          Cookies.set(CookieKeys.CURRENT_ORG_ID, current_org.org_id);

          if (integration_redirect === "true") {
            window.location.href = '/app/setting/integrations';
          } else {
            window.location.href = "/app";
          }
        }
        else {
          console.log("Error in exchange token");
          throw new Error("Error in exchange token");
        }
      }
      catch (err) {
        console.log(err);
        // window.location.href = "/signin";
      }
    }
    if (jwt) {
      exchangeToken(jwt);
    }
  }, [router]);

  // Render a loading spinner or some other placeholder content here
  return (
    <LoadingAnimationWithZigLogo />
  );
}
