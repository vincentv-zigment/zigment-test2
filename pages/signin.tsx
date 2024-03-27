import Spinner from "@/components/common/Spinner";
import { useAuth } from "@/components/contexts/AuthContext";
import { useToast } from "@/components/hooks/useToast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRouter as useNextRouter } from "next/router";
import { useEffect, useState } from "react";
import validator from "validator";

export default function SignInPage() {
  const { authState } = useAuth();
  const [email, setEmail] = useState("");
  const router = useRouter();
  const nRouter = useNextRouter();
  const [showMesssage, setShowMessage] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const [isloginPage, setIsloginPage] = useState(false);

  useEffect(() => {
    if (authState.isAuthenticated && authState.user) {
      let redirectURL = nRouter.query.redirectURL as string;
      let temp_redirect_url =
        typeof redirectURL === "string" ? redirectURL : "";
      if (temp_redirect_url && temp_redirect_url.length > 0) {
        console.log("sso");
      } else {
        router.push("/app");
      }
    }
  }, [authState]);

  const SignInWithGoogle = async () => {
    let redirectURL = nRouter.query.redirectURL as string;
    let loginURL = `${process.env.NEXT_PUBLIC_API_URL}/users/auth/google?afterLogin=${process.env.NEXT_PUBLIC_APP_URL}/sso/callback`;
    if (redirectURL) {
      loginURL = `${process.env.NEXT_PUBLIC_API_URL}/users/auth/google?afterLogin=${redirectURL}`;
    }
    window.location.href = loginURL;
  };
  const SignInWithLinkedin = async () => {
    let redirectURL = nRouter.query.redirectURL as string;
    let loginURL = `${process.env.NEXT_PUBLIC_API_URL}/users/auth/linkedin?afterLogin=${process.env.NEXT_PUBLIC_APP_URL}/sso/callback`;
    if (redirectURL) {
      loginURL = `${process.env.NEXT_PUBLIC_API_URL}/users/auth/linkedin?afterLogin=${redirectURL}`;
    }
    window.location.href = loginURL;
  };
  const SignInWithMicrosoft = async () => {
    let redirectURL = nRouter.query.redirectURL as string;
    let loginURL = `${process.env.NEXT_PUBLIC_API_URL}/users/auth/microsoft?afterLogin=${process.env.NEXT_PUBLIC_APP_URL}/sso/callback`;
    if (redirectURL) {
      loginURL = `${process.env.NEXT_PUBLIC_API_URL}/users/auth/microsoft?afterLogin=${redirectURL}`;
    }
    window.location.href = loginURL;
  };
  const SignInWithZoho = async () => {
    let redirectURL = nRouter.query.redirectURL as string;
    let loginURL = `${process.env.NEXT_PUBLIC_API_URL}/users/auth/zoho?afterLogin=${process.env.NEXT_PUBLIC_APP_URL}/sso/callback`;
    if (redirectURL) {
      loginURL = `${process.env.NEXT_PUBLIC_API_URL}/users/auth/zoho?afterLogin=${redirectURL}`;
    }
    window.location.href = loginURL;
  };
  const signInWithMagicLink = async () => {
    setIsSubmitting(true);

    try {
      let redirectURL = nRouter.query.redirectURL as string;
      let loginURL = `${process.env.NEXT_PUBLIC_API_URL}/users/auth/magic-link?afterLogin=${process.env.NEXT_PUBLIC_APP_URL}/sso/callback`;
      if (redirectURL) {
        loginURL = `${process.env.NEXT_PUBLIC_API_URL}/users/auth/magic-link?afterLogin=${redirectURL}`;
      }
      const sendLink = await axios.post(`${loginURL}`, {
        email,
      });
      setShowMessage({
        show: true,
        message: "Email sent!",
        type: "success",
      });
      toast.addToast("success", "Email sent!");
    } catch (err: any) {
      console.log(err);
      setShowMessage({
        show: true,
        message: "Something went wrong!",
        type: "error",
      });
      let errorMsg = "Something went wrong.";

      // Check if err object has response data and it has a message property
      if (err.response && err.response.data && err.response.data.message) {
        errorMsg = err.response.data.message;
      }

      toast.addToast("error", errorMsg);
    }
    setIsSubmitting(false);
  };
  if (authState.isLoading) {
    <div className="text-center">
      <Spinner color="text-orange-deski" />
    </div>;
  }
  return (
    <div className="min-h-screen flex relative w-full">
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-fit ">
        <img
          className="h-12 w-auto   "
          src="https://cdn.zigment.ai/assets/zigment_logo_latest.svg"
          alt="zigment logo"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center relative py-12 px-4 sm:px-6 ">
        <div className="mx-auto w-full max-w-xs relative">
          <div className="mt-8">
            <div>
              <div className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-center text-gray-700 text-3xl font-bold">
                      {isloginPage ? "Welcome back" : "Create your account"}{" "}
                    </h2>
                    <div className="mt-6">
                      <input
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email address"
                        required
                        className="appearance-none block w-full px-4 h-[52px] py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange-deski focus:border-brand-orange-deski sm:text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    {isSubmitting && (
                      <div className="text-center">
                        <Spinner color="text-brand-orange-deski" />
                      </div>
                    )}
                    <button
                      disabled={isSubmitting}
                      onClick={() => {
                        if (validator.isEmail(email)) {
                          setShowMessage({
                            ...showMesssage,
                            show: false,
                          });
                          signInWithMagicLink();
                        } else {
                          setShowMessage({
                            show: true,
                            message: "Please enter valid email",
                            type: "error",
                          });
                        }
                      }}
                      className="w-full flex justify-center items-center py-2 h-[52px] px-4 border 
                    border-transparent rounded-md shadow-sm 
                     font-medium text-white
                     bg-brand-orange-deski hover:drop-shadow-lg focus:outline-none 
                     focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-deski  disabled:opacity-50
                    disabled:cursor-not-allowed"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-4 mx-auto w-fit text-center">
                {isloginPage
                  ? `Don't have an account?`
                  : `Already have an account?`}

                <button
                  onClick={() => setIsloginPage(!isloginPage)}
                  className="ml-1 px-2 py-1 text-brand-orange-deski/90 rounded-sm font-medium focus:bg-brand-orange-deskibg"
                >
                  {isloginPage ? "Sign up" : "Log in"}
                </button>
              </p>

              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>
            <div>
              {/* Sign In Buttons */}
              <div className="mt-6 grid grid-cols-1 gap-3">
                <div
                  onClick={() => {
                    SignInWithGoogle();
                  }}
                  className="  inline-flex 
                    justify-start items-center py-2 px-4 border 
                    h-[52px]  
                    border-gray-300 rounded-md shadow-sm 
                    bg-white cursor-pointer transition-all   relative text-black hover:bg-gray-100"
                >
                  <span className="w-5 h-5 absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 128 128"
                      xmlSpace="preserve"
                    >
                      <g>
                        <g fillRule="evenodd" clipRule="evenodd">
                          <path fill="none" d="M0 0H128V128H0z"></path>
                          <path
                            fill="#FBBC05"
                            d="M27.585 64c0-4.157.69-8.143 1.923-11.881L7.938 35.648C3.734 44.183 1.366 53.801 1.366 64c0 10.191 2.366 19.802 6.563 28.332l21.558-16.503A37.86 37.86 0 0127.585 64"
                          ></path>
                          <path
                            fill="#EA4335"
                            d="M65.457 26.182c9.031 0 17.188 3.2 23.597 8.436L107.698 16C96.337 6.109 81.771 0 65.457 0 40.129 0 18.361 14.484 7.938 35.648l21.569 16.471a37.77 37.77 0 0135.95-25.937"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M65.457 101.818a37.77 37.77 0 01-35.949-25.937L7.938 92.349C18.361 113.516 40.129 128 65.457 128c15.632 0 30.557-5.551 41.758-15.951L86.741 96.221c-5.777 3.639-13.052 5.597-21.284 5.597"
                          ></path>
                          <path
                            fill="#4285F4"
                            d="M126.634 64c0-3.782-.583-7.855-1.457-11.636h-59.72v24.727h34.376c-1.719 8.431-6.397 14.912-13.092 19.13l20.474 15.828c11.766-10.92 19.419-27.188 19.419-48.049"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="pl-12">Continue with Google</span>
                </div>
                <div
                  onClick={() => {
                    SignInWithMicrosoft();
                  }}
                  className="  inline-flex 
                    justify-start items-center py-2 px-4 border 
                    h-[52px]  
                    border-gray-300 rounded-md shadow-sm 
                    bg-white cursor-pointer transition-all   relative text-black hover:bg-gray-100"
                >
                  <span className="w-5 h-5 absolute  ">
                    {/* svg to go here.. */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
                      <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                      <path fill="#f35325" d="M1 1h10v10H1z" />
                      <path fill="#81bc06" d="M12 1h10v10H12z" />
                      <path fill="#05a6f0" d="M1 12h10v10H1z" />
                      <path fill="#ffba08" d="M12 12h10v10H12z" />
                    </svg>
                  </span>
                  <span className="pl-12 ">Continue with Microsoft</span>
                </div>
                <div
                  onClick={() => {
                    SignInWithLinkedin();
                  }}
                  className="  inline-flex 
                    justify-start items-center py-2 px-4 border 
                    h-[52px]  
                    border-gray-300 rounded-md shadow-sm 
                    bg-white cursor-pointer transition-all relative text-black hover:bg-gray-100"
                >
                  <span className="w-5 h-5 absolute  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      version="1"
                      viewBox="0 0 32 32"
                      xmlSpace="preserve"
                      className="w-full h-full"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#007BB5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></circle>
                      <g fill="#FFF">
                        <path d="M7 11H11V25H7z"></path>
                        <path d="M20.499 11c-2.791 0-3.271 1.018-3.499 2v-2h-4v14h4v-8c0-1.297.703-2 2-2 1.266 0 2 .688 2 2v8h4v-7c0-4-.521-7-4.501-7z"></path>
                        <circle cx="9" cy="8" r="2"></circle>
                      </g>
                    </svg>
                  </span>
                  <span className="pl-12 ">Continue with Linkedin</span>
                </div>
                <div
                  onClick={() => {
                    SignInWithZoho();
                  }}
                  className="  inline-flex 
                    justify-start items-center py-2 px-4 border 
                    h-[52px]  
                    border-gray-300 rounded-md shadow-sm 
                    bg-white cursor-pointer transition-all   relative text-black hover:bg-gray-100"
                >
                  <span className="w-5 h-5 absolute  ">
                    {/* svg to go here.. */}
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1020 400"
                      style={{
                        position: "relative", // or 'absolute' depending on the context
                        top: "6px", // Change this value to adjust the top position
                      }}
                    >
                      <style type="text/css">
                        {`.st0{fill:#089949;}
	.st1{fill:#F9B21D;}
	.st2{fill:#E42527;}
	.st3{fill:#226DB4;}`}
                      </style>
                      <g>
                        <g>
                          <g>
                            <path
                              className="st0"
                              d="M458.1,353c-7.7,0-15.5-1.6-23-4.9l0,0l-160-71.3c-28.6-12.7-41.5-46.4-28.8-75l71.3-160
				c12.7-28.6,46.4-41.5,75-28.8l160,71.3c28.6,12.7,41.5,46.4,28.8,75l-71.3,160C500.6,340.5,479.8,353,458.1,353z M448.4,318.1
				c12.1,5.4,26.3-0.1,31.7-12.1l71.3-160c5.4-12.1-0.1-26.3-12.1-31.7L379.2,43c-12.1-5.4-26.3,0.1-31.7,12.1l-71.3,160
				c-5.4,12.1,0.1,26.3,12.1,31.7L448.4,318.1z"
                            />
                          </g>
                          <g>
                            <path
                              className="st1"
                              d="M960,353.1H784.8c-31.3,0-56.8-25.5-56.8-56.8V121.1c0-31.3,25.5-56.8,56.8-56.8H960
				c31.3,0,56.8,25.5,56.8,56.8v175.2C1016.8,327.6,991.3,353.1,960,353.1z M784.8,97.1c-13.2,0-24,10.8-24,24v175.2
				c0,13.2,10.8,24,24,24H960c13.2,0,24-10.8,24-24V121.1c0-13.2-10.8-24-24-24H784.8z"
                            />
                          </g>
                          <path
                            className="st2"
                            d="M303.9,153.2L280.3,206c-0.3,0.6-0.6,1.1-0.9,1.6l9.2,56.8c2.1,13.1-6.8,25.4-19.8,27.5l-173,28
			c-6.3,1-12.7-0.5-17.9-4.2c-5.2-3.7-8.6-9.3-9.6-15.6l-28-173c-1-6.3,0.5-12.7,4.2-17.9c3.7-5.2,9.3-8.6,15.6-9.6l173-28
			c1.3-0.2,2.6-0.3,3.8-0.3c11.5,0,21.8,8.4,23.7,20.2l9.3,57.2L294.3,94l-1.3-7.7c-5-30.9-34.2-52-65.1-47l-173,28
			C40,69.6,26.8,77.7,18,90c-8.9,12.3-12.4,27.3-10,42.3l28,173c2.4,15,10.5,28.1,22.8,37C68.5,349.4,80,353,91.9,353
			c3,0,6.1-0.2,9.2-0.7l173-28c30.9-5,52-34.2,47-65.1L303.9,153.2z"
                          />
                          <g>
                            <path
                              className="st3"
                              d="M511.4,235.8l25.4-56.9l-7.2-52.9c-0.9-6.3,0.8-12.6,4.7-17.7c3.9-5.1,9.5-8.4,15.9-9.2l173.6-23.6
				c1.1-0.1,2.2-0.2,3.3-0.2c5.2,0,10.2,1.7,14.5,4.9c0.8,0.6,1.5,1.3,2.2,1.9c7.7-8.1,17.8-13.9,29.1-16.4
				c-3.2-4.4-7-8.3-11.5-11.7c-12.1-9.2-27-13.1-42-11.1L545.6,66.5c-15,2-28.4,9.8-37.5,21.9c-9.2,12.1-13.1,27-11.1,42
				L511.4,235.8z"
                            />
                            <path
                              className="st3"
                              d="M806.8,265.1l-22.8-168c-12.8,0.4-23.1,11-23.1,23.9v49.3l13.5,99.2c0.9,6.3-0.8,12.6-4.7,17.7
				s-9.5,8.4-15.9,9.2l-173.6,23.6c-6.3,0.9-12.6-0.8-17.7-4.7c-5.1-3.9-8.4-9.5-9.2-15.9l-8-58.9l-25.4,56.9l0.9,6.4
				c2,15,9.8,28.4,21.9,37.5c10,7.6,21.9,11.6,34.3,11.6c2.6,0,5.2-0.2,7.8-0.5L758.2,329c15-2,28.4-9.8,37.5-21.9
				C804.9,295,808.8,280.1,806.8,265.1z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="pl-12 ">Continue with Zoho</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
