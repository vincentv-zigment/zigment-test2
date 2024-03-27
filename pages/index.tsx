import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import instant from "@/assets/images/solutions/whatwedo/Instant.svg";
import reduce from "@/assets/images/solutions/whatwedo/ReduceHumanCapital.svg";
import alwaysOn from "@/assets/images/solutions/whatwedo/alwaysOn.svg";
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
import img2 from "@/assets/images/solutions/features/InstantEngagement.svg";
import img4 from "@/assets/images/solutions/features/Omnichannel.svg";
import img5 from "@/assets/images/solutions/features/Tailored Interaction.svg";
import img3 from "@/assets/images/solutions/features/CostEfficiency.svg";
import img15 from '@/assets/images/solutions/howworks/InitialOnboarding.svg';
import img16 from '@/assets/images/solutions/howworks/Integrationprocess.svg';
import img17 from '@/assets/images/solutions/howworks/SeeMagicinRealtime.svg';
import MetaTagsComponents from "@/components/common/MetaTagsComponents";
import CustomHero from '@/components/solutions/CustomHero';
import OurSolutionSection from '@/components/solutions/OurSolutionSection';
import { testimonies } from "@/lib/testimonial";
import Image from 'next/image';
import Link from "next/link";
import TrustedBySection from "@/components/solutions/TrustedBySection";


declare global {
  interface Window {
    launchWhatsAppSignup: () => void;
    FB_SIGNUP_FLOW_COMPLETED: boolean;
    FB_LOGIN_FLOW_COMPLETED: boolean;
    FB_LOGIN_FLOW_ERROR: boolean;
    FB_SIGNUP_FLOW_ERROR: boolean;
    FB_DATA_ACCESS_TOKEN: string;
    launchFacebookLeadsSetup: () => void;
  }
}

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
    title: "Instant Engagement ",
    para: "Zigment uses AI to engage your leads instantly, so they never go cold. Remember, a warm lead is a future customer.",
    img: img2,
  },
  {
    id: 2,
    title: "Cost-Efficiency",
    para: "No need to pour money into an army of customer service agents. Zigment does the job at a fraction of the cost, and it never takes a coffee break.",
    img: img3, // You should replace img3 with the actual image source or variable.
  },
  {
    id: 3,
    title: "Omni-Channel Presence",
    para: "Your leads come from various channels, and Zigment reaches them wherever they are—Email, Facebook, WhatsApp—you name it.",
    img: img4, // You should replace img4 with the actual image source or variable.
  },
  {
    id: 4,
    title: "Tailored Interactions",
    para: "Sending generic messages? That's old school. Zigment customizes the conversation based on each lead's behavior and needs.",
    img: img5, // You should replace img5 with the actual image source or variable.
  },
];

 

const comparisionFeatures = [
  {
    id: 1,
    name: "Immediate Response vs. Delays",
    description:
      "When most systems are still queuing, Zigment has already engaged the lead.",
  },
  {
    id: 2,
    name: "Multi-Channel Capability vs. Single Focus",
    description:
      "Zigment is everywhere your customers are, while other systems force you to pick a platform. ",
  },
  {
    id: 3,
    name: "AI-Learning vs. Static Scripts",
    description:
      "Zigment improves with every interaction; conventional tools just repeat themselves.",
  },
  {
    id: 3,
    name: "Easy Integration vs. Complicated Set-Up",
    description:
      "One click and you're ready with Zigment, as opposed to a maze of configurations elsewhere.",
  },
  {
    id: 3,
    name: "Cost-Effectiveness vs. Human Resources",
    description: "Why burn payroll when you can achieve more for less?",
  },
];

const howworks = [
  {
    title: "Initial Onboarding",
    description: `Just provide your business objectives and preferences. We take care of the rest.
      `,
    imageUrl: img15,
  },
  {
    title: "Integration With Your Process",
    description:
      "Zigment easily plugs into your existing CRM, be it Salesforce, Hubspot, or any other.",
    imageUrl: img16,
  },
  {
    title: "See the Magic, In Real-Time",
    description:
      "Track conversions, engagement, and more through a user-friendly analytics dashboard.",
    imageUrl: img17,
  },
];

const chatbotFeatures = [
  {
    id: 1,
    name: "Zigment Gets You",
    description:
      "We understand your business and adapt our conversations to represent you authentically.",
  },
  {
    id: 2,
    name: "Personal Assistant Vibe",
    description:
      "Handles scheduling, reminders, and even upsells—like an assistant who’s always on the clock.",
  },
  {
    id: 3,
    name: "Always Learning",
    description:
      "Zigment grows with you, so your engagement gets better every day.",
  },
];


export default function Home() {
  const router = useRouter();
  return (
    <>

      <LandingPageLayout>
      <MetaTagsComponents 
          title={"Zigment AI Lead Management – Revolutionize Lead Engagement"} 
          description="Revolutionize your lead management with Zigment's AI-driven platform, designed to automate and optimize lead engagement and conversion processes efficiently."
          keywords={"Zigment, Lead Management, AI Lead Conversion, Automated Lead Engagement, Efficient Lead Processing, Lead Nurturing AI, Conversion Optimization"}
        /> 
     
        <main className="relative  ">
          <CustomHero>
            <h1 className="text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl  leading-tight">
              <div className="relative leading-tight">
                <p className="block xl:inline ">Conversational AI </p>{" "}
                <Image
                  src={line}
                  alt=""
                  className="absolute w-[300px] inset-x-0 mx-auto lg:m-0 lg:w-[480px] -bottom-3 lg:-bottom-5 "
                />
              </div>
              <span className="block  leading-tight">Platform For </span>
              <span className="block  leading-tight">Sales Optimization</span>
            </h1>
            <div className="mt-2 lg:mt-10  ">
            <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
              <Link
                href={"/contactus"}
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
          <OurSolutionSection />
          <EmphasisSection
            heading={`Each moment a lead waits, its value depreciates. Don't let your leads go cold, heat them up instantly with Zigment.
            `}
            sub1="Each moment a lead waits, its value depreciates."
            sub2={`Don't let your leads go cold, heat them up`}
            sub3="instantly with Zigment."
          />
          <TestimonySection testimonies={testimonies} hideComp={true} />
          <TrustedBySection/>
          <ComparisionSection
            comparisionFeatures={comparisionFeatures}
          >
            <h3 className="text-4xl font-bold   text-gray-900 sm:text-5xl   lg:text-6xl xl:text-6xl">
              <div>5 Reasons to </div>
              <Image src={line} alt="" className="w-[200px] sm:w-[300px]  " />

              <div className="-mt-3">Choose Us</div>
            </h3>
          </ComparisionSection>
          <HowWorksSections howworks={howworks} />
          <IntegrationsSections
            title={"Easy Integration"}
            description={`Everywhere Your Customer Is, So Are We. Zigment can work on most
            customer engagement channels like FB/Insta, Whatsapp, SMS,
            Email, etc., and can seamlessly integrate with Salesforce,
            Hubspot, Zoho, Freshdesk, and many more.`}
          />
          <ChatBotFeaturesSection chatbotFeatures={chatbotFeatures} />
          <Faq />
        </main>
      </LandingPageLayout>

      {/* <ChatBot/> */}
    </>
  );
}
