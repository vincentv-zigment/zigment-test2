import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import ChatBotFeaturesSection from "@/components/solutions/ChatBotFeaturesSection";
import ComparisionSection from "@/components/solutions/ComparisionSection";
import EmphasisSection from "@/components/solutions/EmphasisSection";
import Faq from "@/components/solutions/Faq";
import Features from "@/components/solutions/Features";
import HowWorksSections from "@/components/solutions/HowWorksSections";
import IntegrationsSections from "@/components/solutions/IntegrationsSections";
import TestimonySection from "@/components/solutions/TestimonySection";
import WhatWeDo from "@/components/solutions/WhatweDo";
import { useRouter } from "next/router";
import alwaysOn from "@/assets/images/solutions/whatwedo/alwaysOn.svg";
import instant from "@/assets/images/solutions/whatwedo/Instant.svg";
import reduce from "@/assets/images/solutions/whatwedo/ReduceHumanCapital.svg";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";

import img4 from "@/assets/images/solutions/features/Omnichannel.svg";
import img5 from "@/assets/images/solutions/features/Tailored Interaction.svg";
import img2 from "@/assets/images/solutions/features/InstantEngagement.svg";

import img3 from "@/assets/images/solutions/features/CostEfficiency.svg";
import img15 from "@/assets/images/solutions/howworks/InitialOnboarding.svg";
import img16 from "@/assets/images/solutions/howworks/Integrationprocess.svg";
import img17 from "@/assets/images/solutions/howworks/SeeMagicinRealtime.svg";
import CustomHero from "@/components/solutions/CustomHero";
import Image from "next/image";
import hero from "@/assets/images/solutions/hero/realestate.svg";
import Head from "next/head";
import MetaTagsComponents from "@/components/common/MetaTagsComponents";
import Link from "next/link";
import { testimonies } from "@/lib/testimonial";
import TrustedBySection from "@/components/solutions/TrustedBySection";

const whatwedo = [
  {
    id: 1,
    question: "Always On ",
    answer: "Set it and forget it. Zigment is selling 24/7",
    img: alwaysOn,
  },
  {
    id: 2,
    question: "Immediate Engagement",
    answer: "Zigment's A.I. Agent talks on your behalf",
    img: instant,
  },
  {
    id: 3,
    question: "Reduce Human Capital",
    answer: "Save management headaches and use intelligent A.I.",
    img: reduce,
  },
];

const features = [
  {
    id: 1,
    title: "Automated Lead Qualification",
    para: `Effortlessly sift through leads with Zigment.ai’s AI-driven pre-qualification. Save hours by focusing only on leads ready for property visits and serious discussions.`,
    img: img2, // Replace img6 with the actual image source or variable.
  },
  {
    id: 6,
    title: "24/7 Lead Engagement",
    para: `Never miss a potential buyer. Zigment.ai engages leads round the clock, ensuring immediate response to inquiries, keeping the interest alive.`,
    img: img3, // Replace img7 with the actual image source or variable.
  },
  {
    id: 7,
    title: "Seamless CRM Integration",
    para: `Zigment.ai fits snugly into your existing real estate CRM system, making integration smooth and enhancing your workflow without any hassle.`,
    img: img4, // Replace img8 with the actual image source or variable.
  },
  {
    id: 8,
    title: "Insightful Lead Tracking",
    para: `Track lead progress in real-time with Zigment.ai’s intuitive dashboard. Watch as leads move from initial contact to qualified prospects.`,
    img: img5, // Replace img9 with the actual image source or variable.
  },
];

 

const comparisonFeatures = [
  {
    id: 6,
    name: "Always Available",
    description: `Zigment.ai works 24/7, unlike limited human hours. `,
  },
  {
    id: 7,
    name: "Cost Efficiency",
    description: `Reduce staffing costs with AI-driven lead handling. `,
  },
  {
    id: 8,
    name: "Faster Lead Qualification",
    description: `AI speeds up the process, increasing efficiency.`,
  },
  {
    id: 9,
    name: "Data-Driven Decisions",
    description: `Real-time analytics guide your sales strategies. `,
  },
  {
    id: 10,
    name: "Personalized Interactions",
    description: `Tailored conversations with every lead`,
  },
];

const howworks = [
  {
    title: "Quick Integration",
    description: `Easily sync Zigment with your existing CRM and communication tools.`,
    imageUrl: img15, // Replace img15 with the actual image source or variable.
  },
  {
    title: "Tailor Your AI",
    description: `Customize Zigment’s responses based on your property portfolio and client types.`,
    imageUrl: img16, // Replace img16 with the actual image source or variable.
  },
  {
    title: "Launch and Lead",
    description: `Go live and watch Zigment transform your lead management process.`,
    imageUrl: img17, // Replace img17 with the actual image source or variable.
  },
];

const chatbotFeatures = [
  {
    id: 1,
    name: "Empathetic AI",
    description: `Zigment understands real estate nuances, offering personalized lead experiences.`,
  },
  {
    id: 2,
    name: "Data-Driven Insights",
    description: `Gain valuable insights from each interaction to refine your sales strategies.`,
  },
  {
    id: 3,
    name: "Time-Saving Automation",
    description: `Focus on closing deals while Zigment handles the lead nurturing process.`,
  },
];

export default function managedsales() {
  return (
    <>
      <LandingPageLayout>
        <MetaTagsComponents 
          title={"Zigment for Real Estate – AI-Powered Lead Qualification"} 
          description="Supercharge your real estate business with Zigment’s AI-driven platform, expertly pre-qualifying leads to ensure realtors and agents focus on the most promising prospects for higher conversion."
          keywords={"Zigment AI, Real Estate Lead Qualification, AI for Realtors, Automated Lead Management, Real Estate Sales Efficiency, Property Lead Automation, Realtor AI Assistant"}
        /> 
        <main className="relative  ">
          <CustomHero img={hero}>
            <h1 className="text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl  leading-tight">
              <div className="relative leading-tight">
                <p className="block xl:inline ">Qualify Leads, </p>{" "}
                <Image
                  src={line}
                  alt=""
                  className="absolute w-[200px] inset-x-0 mx-auto lg:m-0 lg:w-[480px] -bottom-3 lg:-bottom-5 "
                />
              </div>
              <span className="block  leading-tight"> Close Deals </span>
              <span className="block  leading-tight"> Faster With AI</span>
            </h1>
            <div className="mt-2 lg:mt-10  ">
            <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
              <Link
                href={"/contactus?utm_source=organic&utm_campaign=hero_button_realestate"}
                className="inline-block  bg-brand-orange-deski hover:bg-red-500 rounded-md right-2 text-white font-medium sm:font-semibold px-4 sm:px-8   sm:py-3 py-2 text-sm sm:text-base"
              >
                Schedule A Demo
              </Link>
            </div>
            <div className="mx-auto max-w-7xl   py-4">
              <h2 className="lg:text-left text-lg font-semibold text-center leading-8 text-gray-900">
                Integrated with
                <span className="text-brand-orange-deski text-3xl"> 100+ </span>
                popular CRMs
              </h2>
            </div>
          </div>
          </CustomHero>
          <WhatWeDo data={whatwedo} />
          <Features contents={features}>
            <h2 className="hidden sm:block mb-10 text-2xl font-bold text-center leading-loose	mx-auto	 text-gray-900 sm:text-5xl">
              Transforming Real Estate Engagement
              <Image
                src={line}
                alt=""
                className="w-[310px] absolute left-[172px]     -bottom-7"
              />
            </h2>
          </Features>
          <EmphasisSection
            heading={`Imagine focusing solely on closing deals while Zigment.ai nurtures and qualifies your leads.
            `}
            sub1="Imagine focusing solely on closing deals"
            sub2={`while Zigment.ai nurtures`}
            sub3="and qualifies your leads."
          />
          <TestimonySection testimonies={testimonies} hideComp={true}/>
          <TrustedBySection/>
          <ComparisionSection comparisionFeatures={comparisonFeatures}>
            <h3 className="text-4xl font-bold   text-gray-900 sm:text-5xl   lg:text-6xl xl:text-6xl">
              <div>Zigment vs </div>
              <Image src={line} alt="" className="w-[200px] sm:w-[250px]  " />

              <div className="-mt-3">Traditional Methods</div>
            </h3>
          </ComparisionSection>
          <HowWorksSections
            heading="Easy Setup
           "
            howworks={howworks}
          />
          <IntegrationsSections
            title={"Easy Integration"}
            description={`Zigment effortlessly slots into your ecosystem. Whether it's Instagram, Facebook, WhatsApp, SMS, Email, Salesforce, HubSpot, Zoho, Freshdesk, and beyond, our AI bridges the gaps.`}
          />
          <ChatBotFeaturesSection
            title1="Beyond Bots:"
            title2="Zigment's Unique Approach"
            chatbotFeatures={chatbotFeatures}
          />
          <Faq />
        </main>
      </LandingPageLayout>
    </>
  );
}
