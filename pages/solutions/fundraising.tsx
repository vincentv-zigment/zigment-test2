import LandingPageLayout from "@/components/Layout/LandingPageLayout";

import alwaysOn from "@/assets/images/solutions/whatwedo/alwaysOn.svg";
import instant from "@/assets/images/solutions/whatwedo/Instant.svg";
import reduce from "@/assets/images/solutions/whatwedo/ReduceHumanCapital.svg";
import WhatWeDo from "@/components/solutions/WhatweDo";

import img4 from "@/assets/images/solutions/features/Omnichannel.svg";
import img5 from "@/assets/images/solutions/features/Tailored Interaction.svg";
import img2 from "@/assets/images/solutions/features/InstantEngagement.svg";

import img3 from "@/assets/images/solutions/features/CostEfficiency.svg";
import img15 from "@/assets/images/solutions/howworks/InitialOnboarding.svg";
import img16 from "@/assets/images/solutions/howworks/Integrationprocess.svg";
import img17 from "@/assets/images/solutions/howworks/SeeMagicinRealtime.svg";
import Features from "@/components/solutions/Features";
import EmphasisSection from "@/components/solutions/EmphasisSection";
import TestimonySection from "@/components/solutions/TestimonySection";
import ComparisionSection from "@/components/solutions/ComparisionSection";
import HowWorksSections from "@/components/solutions/HowWorksSections";
import IntegrationsSections from "@/components/solutions/IntegrationsSections";
import ChatBotFeaturesSection from "@/components/solutions/ChatBotFeaturesSection";
import Faq from "@/components/solutions/Faq";
import hero from "@/assets/images/solutions/hero/fundraising.svg";
import CustomHero from "@/components/solutions/CustomHero";
import Image from "next/image";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
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
    title: "Automate the Pitch",
    para: "Got a great cause but don't have the manpower? Zigment automates your outreach, so your team can focus on the mission, not on cold calls.",
    img: img2,
  },
  {
    id: 2,
    title: "24/7 Engagement",
    para: "Zigment is always awake, even when your team isn't. Keep the dialogue flowing round the clock to convert more donors.",
    img: img5,
  },
  {
    id: 3,
    title: "Quality Over Quantity",
    para: "Not just any contact but the right contact. Zigment’s intelligent targeting ensures you’re talking to the people who really care about your cause.",
    img: img3,
  },
  {
    id: 4,
    title: "Secure and Reliable",
    para: "Don't worry about data leaks or quality dilution when outsourcing. Zigment keeps your contacts database safe and pristine.",
    img: img4,
  },
];

 

const comparisionFeatures = [
  {
    id: 1,
    name: "Round-the-Clock Coverage",
    description: "Unlike limited-time call centers, Zigment never sleeps.",
  },
  {
    id: 2,
    name: "Quality Outreach",
    description:
      "Say goodbye to script fatigue. Zigment keeps it fresh every time.",
  },
  {
    id: 3,
    name: "Data Security",
    description:
      "Your contacts are safe, something not guaranteed with outsourcing.",
  },
  {
    id: 4,
    name: "Cost-Effective",
    description:
      "One-time investment in Zigment trumps long-term closer salaries.",
  },
  {
    id: 5,
    name: "Multi-Channel Engagement",
    description:
      "Unlike traditional methods, Zigment connects wherever your donors are.",
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
    name: "Always Improving",
    description:
      "Zigment learns as it engages, making future interactions even more effective.",
  },
  {
    id: 2,
    name: "Personal, Yet Scalable",
    description:
      "Tailor the system to your specific needs without worrying about losing that personal touch.",
  },
  {
    id: 3,
    name: "A Cause-Specific Approach",
    description:
      "Zigment understands that each fundraising campaign is unique and adapts its strategy accordingly.",
  },
];

type Props = {};

const fundraising = (props: Props) => {
  return (
    <LandingPageLayout>
      <MetaTagsComponents 
        title={"Zigment for Fundraising – AI-Enhanced Donor Outreach"} 
        description="Boost your fundraising efforts with Zigment’s AI platform, offering personalized donor outreach, automated engagement, and increased donation conversions."
        keywords={"AI Fundraising, Donor Engagement, Automated Outreach, Fundraising Conversion, Zigment AI, Nonprofit Automation, Donation Management"}
      /> 

      <CustomHero
        heading1="AI Closers,"
        heading2="Fundraising Made Easy
        "
        img={hero}
      >
        <h1 className="text-4xl font-black text-gray-900 sm:text-5xl   lg:text-6xl xl:text-6xl  leading-tight">
          <div className="relative leading-tight">
            <p className="block xl:inline ">Make Fundraising</p>{" "}
            <Image
              src={line}
              alt=""
              className="absolute sm:w-[600px] inset-x-0 mx-auto lg:mx-0 left-0  lg:w-[600px] -bottom-5 lg:-bottom-6 "
            />
          </div>
          <span className="block   xl:inline leading-tight">Easy With</span>
          <span className="block    leading-tight">AI Closers</span>
        </h1>
        <div className="mt-2 lg:mt-10  ">
            <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
              <Link
                href={"/contactus?utm_source=organic&utm_campaign=hero_button_fundraising"}
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
        heading="Don't just ask for donations, build relationships. Zigment helps you do both, without the stress."
        sub1="Don't just ask for donations,"
        sub2="build relationships. Zigment helps you do both,"
        sub3="without the stress."
      />
      <TestimonySection testimonies={testimonies} hideComp={true} />
      <TrustedBySection/>
      <ComparisionSection comparisionFeatures={comparisionFeatures}>
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
    </LandingPageLayout>
  );
};

export default fundraising;
