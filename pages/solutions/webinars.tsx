import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import Faq from "@/components/solutions/Faq";
import WhatWeDo from "@/components/solutions/WhatweDo";
import alwaysOn from "@/assets/images/solutions/whatwedo/alwaysOn.svg";
import instant from "@/assets/images/solutions/whatwedo/Instant.svg";
import reduce from "@/assets/images/solutions/whatwedo/ReduceHumanCapital.svg";
import HowWorksSections from "@/components/solutions/HowWorksSections";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import img4 from "@/assets/images/solutions/features/Omnichannel.svg";
import img5 from "@/assets/images/solutions/features/Tailored Interaction.svg";
import img2 from "@/assets/images/solutions/features/InstantEngagement.svg";
import img3 from "@/assets/images/solutions/features/CostEfficiency.svg";
import img15 from "@/assets/images/solutions/howworks/InitialOnboarding.svg";
import img16 from "@/assets/images/solutions/howworks/Integrationprocess.svg";
import img17 from "@/assets/images/solutions/howworks/SeeMagicinRealtime.svg";
import IntegrationsSections from "@/components/solutions/IntegrationsSections";
import ChatBotFeaturesSection from "@/components/solutions/ChatBotFeaturesSection";
import CustomHero from "@/components/solutions/CustomHero";
import Image from "next/image";
import Features from "@/components/solutions/Features";
import EmphasisSection from "@/components/solutions/EmphasisSection";
import TestimonySection from "@/components/solutions/TestimonySection";
import ComparisionSection from "@/components/solutions/ComparisionSection";
import hero from "@/assets/images/solutions/hero/Webinar.svg";
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

const features = [
  {
    id: 1,
    title: "Your Virtual Sales Closer",
    para: "Stop losing high-intent attendees to generic emails. Zigment makes your follow-ups as special as your attendees.",
    img: img5,
  },
  {
    id: 2,
    title: "Tailor-Made Conversations",
    para: "Forget the one-size-fits-all approach. Zigment crafts messages that resonate with individual attendees.",
    img: img2,
  },
  {
    id: 3,
    title: "Act Fast, Convert Faster",
    para: "No more delayed responses. Zigment engages attendees while they're still buzzing from your webinar.",
    img: img3,
  },
  {
    id: 4,
    title: "Cost-Efficient, Not Cheap",
    para: "High-quality follow-ups without the high cost. Zigment automates the process without losing the human touch.",
    img: img4,
  },
];

const chatbotFeatures = [
  {
    id: 1,
    name: "Smarter, Not Just Harder",
    description:
      "Zigment doesn't just send messages; it learns and adapts for a more natural conversation flow.",
  },
  {
    id: 2,
    name: "Beyond Follow-Ups",
    description:
      "Unlike other chatbots, Zigment can even initiate meetings, demo bookings, and more.",
  },
  {
    id: 3,
    name: "Transparent Analytics",
    description:
      "We give you insights that matter, so you can keep optimizing your webinar strategies.",
  },
];

 

const comparisionFeatures = [
  {
    id: 1,
    name: "Fully Automated vs Manual Effort",
    description: "Keep your hands free while Zigment does the heavy lifting.",
  },
  {
    id: 2,
    name: "Real-Time Engagement vs Time Lags",
    description:
      "Engage attendees when they're most interested, not hours later.",
  },
  {
    id: 3,
    name: "Personalized Messaging vs Generic Drip Emails",
    description:
      "Scripted emails are so yesterday; let's talk real conversations.",
  },
  {
    id: 4,
    name: "Efficient Pricing vs Costly Alternatives",
    description: "You'll spend less and gain more, seriously.",
  },
  {
    id: 5,
    name: "Data-Driven vs Gut Feeling",
    description: "Make smarter decisions with actionable insights.",
  },
];

type Props = {};

const webinar = (props: Props) => {
  return (
    <LandingPageLayout>
      
      <MetaTagsComponents 
        title={"Zigment for Webinars – AI-Driven Attendee Engagement"} 
        description="Maximize your webinar's potential with Zigment, ensuring high engagement, effective follow-ups, and increased attendee conversion with AI-driven communication."
        keywords={"Webinar Engagement, Attendee Conversion, AI Communication Tool, Webinar Follow-Up, Zigment AI, Automated Webinar Marketing"}
      /> 
      <CustomHero img={hero}>
        <h1 className="text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl  leading-tight">
          <div className="relative leading-tight">
            <p className="block xl:inline ">Webinar & Event</p>{" "}
            <Image
              src={line}
              alt=""
              className="absolute w-[300px]  md:w-[460px] inset-x-0 mx-auto lg:mx-0  lg:w-[500px] -bottom-3 sm:-bottom-6 "
            />
          </div>
          <span className="block  leading-tight">Follow-Ups</span>
          <span className="block  xl:inline leading-tight">
            Automated And Personalized
          </span>
        </h1>
        <div className="mt-2 lg:mt-10  ">
            <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
            <Link
                href={"/contactus?utm_source=organic&utm_campaign=hero_button_webinars"}
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
        heading={`Your webinars are unique.
        Your follow-ups should be too.
        Don't leave them to chance.
        `}
        sub1="Your webinars are unique.
        "
        sub2="Your follow-ups should be too.
        "
        sub3="Don't leave them to chance.
        "
      />
      <TestimonySection testimonies={testimonies} hideComp={true}/>
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

export default webinar;
