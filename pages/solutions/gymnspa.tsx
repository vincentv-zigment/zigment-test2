import LandingPageLayout from "@/components/Layout/LandingPageLayout";

import line from "@/assets/images/solutions/hero/line-shape-1.svg";

import WhatWeDo from "@/components/solutions/WhatweDo";
import alwaysOn from "@/assets/images/solutions/whatwedo/alwaysOn.svg";
import instant from "@/assets/images/solutions/whatwedo/Instant.svg";
import reduce from "@/assets/images/solutions/whatwedo/ReduceHumanCapital.svg";
import IntegrationsSections from "@/components/solutions/IntegrationsSections";
import Faq from "@/components/solutions/Faq";
import img4 from "@/assets/images/solutions/features/Omnichannel.svg";
import img5 from "@/assets/images/solutions/features/Tailored Interaction.svg";
import img2 from "@/assets/images/solutions/features/InstantEngagement.svg";

import img3 from "@/assets/images/solutions/features/CostEfficiency.svg";
import Features from "@/components/solutions/Features";
import EmphasisSection from "@/components/solutions/EmphasisSection";
import TestimonySection from "@/components/solutions/TestimonySection";
import ComparisionSection from "@/components/solutions/ComparisionSection";
import img15 from "@/assets/images/solutions/howworks/InitialOnboarding.svg";
import img16 from "@/assets/images/solutions/howworks/Integrationprocess.svg";
import img17 from "@/assets/images/solutions/howworks/SeeMagicinRealtime.svg";
import HowWorksSections from "@/components/solutions/HowWorksSections";
import ChatBotFeaturesSection from "@/components/solutions/ChatBotFeaturesSection";
import CustomHero from "@/components/solutions/CustomHero";
import Image from "next/image";
import Head from "next/head";
import MetaTagsComponents from "@/components/common/MetaTagsComponents";
import Link from "next/link";
import { testimonies } from "@/lib/testimonial";
import TrustedBySection from "@/components/solutions/TrustedBySection";
type Props = {};

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
    title: `Seamless Renewals
    `,
    para: `Forget chasing members for renewals. Zigment automates the whole process, making it smooth for both you and your members.
    `,
    img: img2,
  },
  {
    id: 2,
    title: `Lead to Member, Just Like That
    `,
    para: `Turn leads into loyal gym members. Zigment handles the initial interactions, paving the way for conversions.

    `,
    img: img3,
  },
  {
    id: 3,
    title: `Personalized, But Automated

    `,
    para: `Zigment offers individualized attention without the costs. Every message feels like it's coming straight from you.

    `,
    img: img4,
  },
  {
    id: 3,
    title: `Efficiency You Can Count On

    `,
    para: `Automated processes mean you save time and money. Zigment ensures you can focus on what you do best: running your gym or spa.

    `,
    img: img5,
  },
];

 

const comparisionFeatures = [
  {
    id: 1,
    name: `Never Miss a Renewal`,
    description: `Zigment ensures zero slip-ups.`,
  },
  {
    id: 2,
    name: `Real-Time Interactions`,
    description: `Outdoes static email campaigns.`,
  },
  {
    id: 3,
    name: `Cost Savings`,
    description: `HR expenses plummet, thanks to automation.`,
  },
  {
    id: 4,
    name: `Fully Customizable`,
    description: `Fits into your existing ecosystem seamlessly.`,
  },
  {
    id: 5,
    name: `AI-Driven`,
    description: `A leap beyond conventional rule-based systems.`,
  },
];

const howworks = [
  {
    title: "Quick Onboarding",
    description:
      "Provide your gym or spa details and set your membership and lead preferences. Zigment takes care of the rest.",
    imageUrl: img15, // Replace 'img1' with the appropriate image URL for Quick Onboarding
  },
  {
    title: "Enable & Relax",
    description:
      "Turn on Zigment and watch it blend effortlessly into your operations, doing its job 24/7.",
    imageUrl: img16, // Replace 'img2' with the appropriate image URL for Enable & Relax
  },
  {
    title: "Track & Tweak",
    description:
      "Get detailed analytics to understand what’s working and what isn’t. Make informed decisions effortlessly.",
    imageUrl: img17, // Replace 'img3' with the appropriate image URL for Track & Tweak
  },
];

const chatbotFeatures = [
  {
    id: 1,
    name: "Not Just Replies, But Relationships",
    description:
      "Zigment builds lasting connections by offering tailored interactions, not just canned responses.",
  },
  {
    id: 2,
    name: "Always Learning",
    description:
      "The system keeps getting smarter, understanding your customers better over time.",
  },
  {
    id: 3,
    name: "Tailored to Your Business",
    description:
      "Your gym or spa is unique, and Zigment gets that. Customize it to reflect your business persona.",
  },
];

const gymnspa = (props: Props) => {
  return (
    <LandingPageLayout>
    
      <MetaTagsComponents 
        title={"Zigment for Gyms & Spas – Automating Client Experience"} 
        description="Transform customer experience at your gym or spa with Zigment’s AI platform, automating bookings, reminders, and personalized client interactions seamlessly."
        keywords={"Gym AI, Spa Automation, Client Reminders, Booking Automation, Personalized Engagement, Zigment AI, Fitness Center Management"}
      /> 


      <CustomHero>
        <h1 className="text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl  leading-tight">
          <div className="relative leading-tight">
            <p className="block xl:inline ">Automate Memberships, </p>{" "}
            <Image
              src={line}
              alt=""
              className="absolute w-[270px] md:w-[400px] inset-x-0 mx-auto lg:mx-0   lg:w-[400px] -bottom-4 "
            />
          </div>

          <span className="block  xl:inline leading-tight">
            Keep the Gym Full
          </span>
        </h1>
        <div className="mt-2 lg:mt-10  ">
            <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
              <Link
                href={"/contactus?utm_source=organic&utm_campaign=hero_button_gymnspa"}
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
        heading={`Every missed renewal
        is a missed opportunity.
        Make every interaction count.`}
        sub1="Every missed renewal
        "
        sub2="is a missed opportunity.
        "
        sub3="Make every interaction count.
        "
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

export default gymnspa;
