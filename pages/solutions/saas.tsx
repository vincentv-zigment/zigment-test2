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
import hero from "@/assets/images/solutions/hero/SaasHeroimage.svg";
import Head from "next/head";
import MetaTagsComponents from "@/components/common/MetaTagsComponents";
import Link from "next/link";
import { testimonies } from "@/lib/testimonial";
import TrustedBySection from "@/components/solutions/TrustedBySection";

type Props = {}

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
        title: "Instant, Intelligent Engagement",
        para:
        "Zigment’s AI-driven approach interacts with your digital traffic in real time, answering queries, offering personalized pitches, and keeping potential clients engaged and interested.",
        img: img2, // Replace img18 with the actual image source or variable.
    },
    {
        id: 2,
        title: "Seamless Demo Scheduling",
        para:
        "Our platform doesn’t just pique interest; it schedules live demos directly on the calendar, ensuring high-intent leads are captured and nurtured through to a scheduled meeting.",
        img: img3, // Replace img19 with the actual image source or variable.
    },
    {
        id: 3,
        title: "Qualification and Prioritization",
        para:
        "Zigment pre-qualifies leads, ensuring your sales team spends time on the most promising prospects, enhancing efficiency and increasing conversion rates.",
        img: img4, // Replace img20 with the actual image source or variable.
    },
    {
        id: 4,
        title: "24/7 Lead Nurturing",
        para:
        "Operating round the clock, Zigment ensures no lead goes cold, nurturing them day and night and keeping your service top-of-mind.",
        img: img5, // Replace img21 with the actual image source or variable.
    },
];
  
 
  

  const comparisonFeatures = [
    {
      id: 11,
      name: "Continuous Engagement",
      description: "Zigment interacts in real time, unlike static web pages or forms.",
    },
    {
      id: 12,
      name: "Intelligent Conversation",
      description: "Far beyond basic chatbots, Zigment understands and adapts to user queries.",
    },
    {
      id: 13,
      name: "Automated Scheduling",
      description: "Direct integration with calendars for seamless demo bookings.",
    },
    {
      id: 14,
      name: "High-Quality Leads",
      description: "Focused engagement with qualified leads, not just any site visitor.",
    },
    {
      id: 15,
      name: "Easy Integration",
      description: "Works with your existing CRM and communication channels.",
    },
  ];
  
  const howworks = [
  {
    title: "Effortless Implementation",
    description: "Connect Your Digital Platforms. Integrate Zigment with your website and social media channels.",
    imageUrl: img15, // Replace img22 with the actual image source or variable.
  },
  {
    title: "Tailor Your AI",
    description: "Customize responses and pitches to align with your brand voice and product specifics.",
    imageUrl: img16, // Replace img23 with the actual image source or variable.
  },
  {
    title: "Launch and Observe",
    description: "Go live and watch your lead engagement and qualification transform.",
    imageUrl: img17, // Replace img24 with the actual image source or variable.
  },
];
const chatbotFeatures = [
    {
      id: 4,
      name: "Adaptive Conversations",
      description: "Zigment understands and adapts to each lead, providing personalized interactions.",
    },
    {
      id: 5,
      name: "Data-Driven Insights",
      description: "Gain valuable insights into lead behavior and preferences for optimized future engagements.",
    },
    {
      id: 6,
      name: "Continuous Improvement",
      description: "Our AI evolves with each interaction, constantly enhancing its effectiveness.",
    },
  ];
  

const saas = (props: Props) => {
  return (
    <LandingPageLayout>
        <MetaTagsComponents 
          title={"Zigment for SaaS - AI Lead Conversion and Engagement"} 
          description="Empower your SaaS business with Zigment's AI-driven lead conversion. Engage visitors, pre-qualify leads, schedule demos, and nurture prospects efficiently."
          keywords={"Zigment AI, SaaS Lead Conversion, Real-Time Engagement, Automated Demo Scheduling, Lead Qualification, AI Chatbot, SaaS Sales, Intelligent Lead Nurturing."}
        /> 
        <main className="relative">
          <CustomHero img={hero} >
            <h1 className="text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl  leading-tight">
              <div className="relative leading-tight">
                <p className="block xl:inline ">Replace your Chatbot  </p>{" "}
                <Image
                  src={line}
                  alt=""
                  className="absolute w-[200px] inset-x-0 mx-auto lg:m-0 lg:w-[250px] -bottom-3 lg:-bottom-2 "
                />
              </div>
              <span className="block  leading-tight">With a Live </span>
              <span className="block  leading-tight"> AI Sales Rep </span>
            </h1>
            <div className="mt-2 lg:mt-10  ">
            <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
            <Link
                href={"/contactus?utm_source=organic&utm_campaign=hero_button_saas"}
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
                Revolutionizing SaaS Lead Conversion with Zigment
              <Image
                src={line}
                alt=""
                className="w-[500px] absolute left-[390px] -bottom-7"
              />
            </h2>
          </Features>
          <EmphasisSection
            heading={`Zigment is where AI meets empathy, turning your digital traffic into valuable business opportunities.
            `}
            sub1="Zigment is where AI meets empathy"
            sub2={`turning your digital traffic into`}
            sub3=" valuable business opportunities."
          />
          <TestimonySection testimonies={testimonies} hideComp={true}/>
          <TrustedBySection/>
          <ComparisionSection comparisionFeatures={comparisonFeatures}>
            <h3 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl xl:text-6xl">
              <div>Zigment vs </div>
              <Image src={line} alt="" className="w-[200px] sm:w-[250px]  " />

              <div className="-mt-3">Traditional Methods</div>
            </h3>
          </ComparisionSection>
          <HowWorksSections
            heading="Setting Up Zigment:A Simple Process"
            howworks={howworks}
          />
          <IntegrationsSections
            title={"Seamless Integration"}
            description={`Zigment effortlessly integrates with leading CRMs like Zoho, Salesforce, HubSpot, Freshdesk, and more, ensuring a harmonious addition to your existing tech ecosystem.
            `}
          />
          <ChatBotFeaturesSection
            title1="More than"
            title2="Chatbot"
            chatbotFeatures={chatbotFeatures}
          />
          <Faq />
        </main>
      </LandingPageLayout>
  )
}

export default saas