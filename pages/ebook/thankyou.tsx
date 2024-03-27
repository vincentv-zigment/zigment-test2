import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import CTASection from "@/components/ebook/CTASection";
import Navbar from "@/components/landing-page/Navbar";
import Link from "next/link";
import React from "react";

type Props = {};

const thankyou = (props: Props) => {
  return (
    <>
      <LandingPageLayout>
        <div className="h-screen relative mx-auto flex"  >
          <div
            className="flex items-center h-full w-full px-20  "

          >
            <div>
              <h2 className="text-8xl font-bold">Thank You!</h2>
              <p className="mt-2">Your request Ebook will be mailed to you shortly</p>
            
            </div>
          </div>
          <div className="h-full absolute right-0 top-0">
            <img src="/thankyoubg.svg" className=" h-full object-cover" alt="" />
          </div>
        </div>
        <CTASection/> 
      </LandingPageLayout>
    </>
  );
};

export default thankyou;
