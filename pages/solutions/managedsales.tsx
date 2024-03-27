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
import hero from "@/assets/images/solutions/hero/ManagedSales.svg";
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
    title: "24/7 Sales Automation",
    para: `Embrace the future where AI doesn't sleep, ensuring your sales pipeline is active around the clock. Zigment's AI Sales Agents are designed to interact and respond instantly, keeping leads warm and engaged anytime, anywhere.`,
    img: img2, // You should replace img2 with the actual image source or variable.
  },
  {
    id: 2,
    title: "Human-Managed Precision",
    para: `Your dedicated human sales manager ensures a personal touch in an AI-driven landscape. Each AI agent is supervised, offering the comfort of human interaction with the efficiency of machine precision.`,
    img: img3, // You should replace img3 with the actual image source or variable.
  },
  {
    id: 3,
    title: "Seamless Software Integration",
    para: `Zigment integrates effortlessly with the tools you already use. From CRMs like Salesforce to communication platforms like WhatsApp, we ensure that our AI is an extension of your existing workflow.`,
    img: img4, // You should replace img4 with the actual image source or variable.
  },
  {
    id: 4,
    title: "Cost Efficiency at Scale",
    para: `Enjoy the economic advantage with Zigment's AI Sales Agents. Experience a significant reduction in operational costs while achieving a wider reach and better performance than traditional sales methods.`,
    img: img5, // You should replace img5 with the actual image source or variable.
  },
];

 

const comparisonFeatures = [
  {
    id: 1,
    name: "Round-the-Clock Engagement",
    description: ` Unlike traditional sales teams, Zigment's AI is always on, eliminating the downtime and increasing potential lead conversions.`,
  },
  {
    id: 2,
    name: "Scalability",
    description: ` As your business grows, Zigment scales with you instantly. No need for extensive training periods or hiring sprees.`,
  },
  {
    id: 3,
    name: "Cost-Effectiveness",
    description: ` Slash your sales operation costs without compromising quality or reach.`,
  },
  {
    id: 4,
    name: "Data-Driven Sales Strategies",
    description: ` Zigment provides insights and analytics to refine sales tactics in real-time, something that manual analysis can't match.`,
  },
  {
    id: 5,
    name: "Adaptability",
    description: ` Quick to learn and adapt, Zigment's AI Sales Agents can evolve with your sales strategies and market changes.`,
  },
];

const howworks = [
  {
    title: "Integration",
    description: ` Connect Zigment with your current tech stack in a snap.
      `,
    imageUrl: img15,
  },
  {
    title: "Customization",
    description: `Tell us about your products and services, and we'll tailor the AI's approach.
      `,
    imageUrl: img16,
  },
  {
    title: "Launch",
    description: `Go live with your AI sales team and watch your sales efficiency soar.
      `,
    imageUrl: img17,
  },
];

const chatbotFeatures = [
  {
    id: 1,
    name: "Empathy Engine",
    description: ` Our AI doesn't just communicate; it connects emotionally, creating meaningful interactions that resonate with your clients.
      `,
  },
  {
    id: 2,
    name: "Continuous Learning ",
    description: `Constantly evolving, Zigment's AI Sales Agents grow with every interaction, becoming more efficient and effective.
      `,
  },
  {
    id: 3,
    name: "Human Augmentation ",
    description: `We're not replacing humans; we're empowering them. Zigment enhances your team's capabilities, allowing them to focus on what they do best.
      `,
  },
];

export default function managedsales() {
  return (
    <>
      <LandingPageLayout>
        <MetaTagsComponents 
        title={"Zigment Managed Services – AI-Driven Sales Solutions"} 
        description="Enhance your sales strategy with Zigment’s Managed Services, blending AI efficiency with human expertise for unparalleled sales and business development."
        keywords={"Managed Sales Services, Business Development AI, Sales Strategy, AI Sales Agents, Zigment Managed Services, AI Human Synergy, Sales Automation"}
      /> 


        <main className="relative  ">
          <CustomHero img={hero}>
            <h1 className="text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl  leading-tight">
              <div className="relative leading-tight">
                <p className="block xl:inline ">AI Enhanced </p>{" "}
                <Image
                  src={line}
                  alt=""
                  className="absolute w-[300px] inset-x-0 mx-auto lg:m-0 lg:w-[480px] -bottom-3 lg:-bottom-5 "
                />
              </div>
              <span className="block  leading-tight">
                {" "}
                Human Powered Sales{" "}
              </span>
            </h1>
            <div className="mt-2 lg:mt-10  ">
            <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
              <Link
                href={"/contactus?utm_source=organic&utm_campaign=hero_button_managedsales"}
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
              A Futuristic Upgrade For Your Sales Funnel
              <Image
                src={line}
                alt=""
                className="w-[420px] absolute left-[172px]     -bottom-8"
              />
            </h2>
          </Features>
          <EmphasisSection
            heading={`AI wouldnt replace humans but humans with AI will replace humans very soon.
            `}
            sub1="AI wouldn't replace humans"
            sub2={`but humans with AI`}
            sub3="will replace humans very soon."
          />
          <TestimonySection testimonies={testimonies} hideComp={true}/>
          <TrustedBySection/>

          <ComparisionSection comparisionFeatures={comparisonFeatures}>
            <h3 className="text-4xl font-bold   text-gray-900 sm:text-5xl   lg:text-6xl xl:text-6xl">
              <div>Zigment vs. The Rest </div>
              <Image src={line} alt="" className="w-[200px] sm:w-[300px]  " />

              <div className="-mt-3">A Comparison</div>
            </h3>
          </ComparisionSection>
          <HowWorksSections
            heading="Setting Up Zigment: Just Three Steps
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
