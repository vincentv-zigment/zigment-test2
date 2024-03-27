import LandingPageLayout from "@/components/Layout/LandingPageLayout";

import line from "@/assets/images/solutions/hero/line-shape-1.svg";

import alwaysOn from "@/assets/images/solutions/whatwedo/alwaysOn.svg";
import instant from "@/assets/images/solutions/whatwedo/Instant.svg";
import reduce from "@/assets/images/solutions/whatwedo/ReduceHumanCapital.svg";
import WhatWeDo from "@/components/solutions/WhatweDo";
import Features from "@/components/solutions/Features";

import img4 from "@/assets/images/solutions/features/Omnichannel.svg";
import img5 from "@/assets/images/solutions/features/Tailored Interaction.svg";
import img2 from "@/assets/images/solutions/features/InstantEngagement.svg";

import img3 from "@/assets/images/solutions/features/CostEfficiency.svg";
import img15 from "@/assets/images/solutions/howworks/InitialOnboarding.svg";
import img16 from "@/assets/images/solutions/howworks/Integrationprocess.svg";
import img17 from "@/assets/images/solutions/howworks/SeeMagicinRealtime.svg";
import EmphasisSection from "@/components/solutions/EmphasisSection";

import mamabefit from "@/assets/images/people/mamabefit.png";
import Flowstateyoga from "@/assets/images/people/Flowstateyoga.webp";
import TestimonySection from "@/components/solutions/TestimonySection";
import ComparisionSection from "@/components/solutions/ComparisionSection";
import HowWorksSections from "@/components/solutions/HowWorksSections";
import IntegrationsSections from "@/components/solutions/IntegrationsSections";
import ChatBotFeaturesSection from "@/components/solutions/ChatBotFeaturesSection";
import Faq from "@/components/solutions/Faq";
import Image from "next/image";
import Head from "next/head";
import CustomHero from "@/components/solutions/CustomHero";
import MetaTagsComponents from "@/components/common/MetaTagsComponents";
import Link from "next/link";
import { testimonies } from "@/lib/testimonial";
import hero from '@/assets/images/solutions/hero/Advertising.svg'
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
      title: `Real-Time Engagement`,
      para: `Zigment ensures immediate engagement with leads via WhatsApp, directly from your ads on Google, Instagram, and Facebook. By being always available, Zigment guarantees that no potential customer slips through due to delays or unavailability.

      `,
      img: img2,
    },
    {
      id: 2,
      title: `Automated Efficiency      `,
      para: `Our AI-driven platform replaces rigid, scripted interactions with dynamic, natural conversations. Zigment understands and adapts to each customer’s needs, guiding them seamlessly towards your business goals.
      `,
      img: img3,
    },
    {
      id: 3,
      title: `Seamless Integration
      `,
      para: `Zigment isn’t just a chat interface; it’s a smart tool that integrates with your ad campaigns on Google and Meta. It feeds real-time user journey data back into your campaigns, continually optimizing for better results.
      `,
      img: img4,
    },
    {
      id: 4,
      title: `Continuous Optimization
      `,
      para: `Our platform diligently captures and relays user funnel journey data back to your Google, Instagram, and Facebook campaigns in real time. This continuous feedback loop allows for on-the-fly adjustments, ensuring your ads are always performing at their peak, delivering better results and higher conversions.
      `,
      img: img5,
    },
  ];
  

 

const comparisionFeatures = [
  {
    id: 1,
    name: "Instant Engagement vs. Delayed Responses",
    description: "Zigment ensures immediate interaction, unlike manual systems prone to delays.",
  },
  {
    id: 2,
    name: "24/7 Availability vs. Limited Hours",
    description: "Our AI operates round the clock, unlike human-dependent systems.",
  },
  {
    id: 3,
    name: "Adaptive Conversations vs. Scripted Replies",
    description: "Zigment offers natural, context-aware interactions, not limited scripted responses",
  },
  {
    id: 4,
    name: "Real-Time Analytics vs. Delayed Reporting",
    description: "Provides immediate insights into customer behavior, essential for campaign optimization.",
  },
  {
    id: 5,
    name: "Full Integration vs. Standalone Solutions",
    description: "Seamlessly integrates with your existing ad platforms and CRM systems.",
  },
];

const howworks = [
  {
    title: "Setup Made Simple",
    description: "Add your business and campaign details, and connect your ad accounts and WhatsApp Business.",
    imageUrl: img15, // Replace 'img1' with the appropriate image URL for Quick Sign-Up
  },
  {
    title: "Intuitive Integration",
    description:
      "Link Zigment with your existing CRM and customer engagement channels.",
    imageUrl: img16, // Replace 'img2' with the appropriate image URL for Plug It In
  },
  {
    title: "Launch and Optimize",
    description:
      "Go live with your campaign in just a few hours, with continuous optimization",
    imageUrl: img17, // Replace 'img3' with the appropriate image URL for Enjoy Your Freedom
  },
];

const chatbotFeatures = [
  {
    id: 1,
    name: "Contextual Conversations",
    description:
      "Our AI agents understand and maintain conversation context across all platforms.",
  },
  {
    id: 2,
    name: "Tailored Responses",
    description:
      "Customize Zigment’s AI to your brand’s tone and philosophy. Ready in under 48 hours",
  },
  {
    id: 3,
    name: "Action-Oriented Interaction",
    description:
      "Beyond providing information, our AI executes tasks, driving conversions.",
  },
];

const coaches = (props: Props) => {
  return (
    <LandingPageLayout>
      <MetaTagsComponents
        title={"Zigment for Coaches – Enhancing Coaching with AI"}
        description="Empower your coaching business with Zigment - the AI tool that enhances client interaction, automates scheduling, and helps you focus on delivering great content."
        keywords={
          "AI for Coaches, Coaching Automation, Client Engagement, Automated Scheduling, Content Creation, Coaching Business, Zigment AI"
        }
      />
      <CustomHero img={hero}>
        <h1 className="text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl   leading-tight">
          <div className="relative leading-tight">
            <p className="block xl:inline ">Unlock Instant  </p>{" "}
            <Image
              src={line}
              alt=""
              className="absolute mx-auto w-[240px] md:w-[350px] lg:left-0  lg:w-[360px] -bottom-4  md:-bottom-4 "
            />
          </div>
          <span className="block   xl:inline leading-tight">
          WhatsApp Conversions
          </span>
        </h1>
        <div className="mt-2 lg:mt-10  ">
          <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
            <Link
              href={"/contactus?utm_source=organic&utm_campaign=hero_button_ctwa"}
              className="inline-block  bg-brand-orange-deski hover:bg-red-500 rounded-md right-2 text-white font-medium sm:font-semibold px-4 sm:px-8   sm:py-3 py-2 text-sm sm:text-base"
            >
              Schedule A Demo
            </Link>
          </div>
          <div className="mx-auto max-w-7xl   py-4">
            <h2 className="lg:text-left text-lg font-semibold text-center leading-8 text-gray-900">
              Integrates with Instagram and   
              <span className="text-brand-orange-deski text-3xl"> 100+ </span>
              CRMs
            </h2>
          </div>
        </div>
      </CustomHero>
      <WhatWeDo data={whatwedo} />
      <Features contents={features}>
        <h2 className="hidden sm:block mb-10 text-2xl font-bold text-center leading-loose	mx-auto	 text-gray-900 sm:text-5xl">
        4 Key Aspects of Zigment

          <Image
            src={line}
            alt=""
            className="w-[420px] absolute inset-x-0 mx-auto     -bottom-8"
          />
        </h2>
      </Features>
      <EmphasisSection
        heading={`Experience the power of AI in transforming every click into a meaningful conversation.`}
        sub1="Experience the power of AI in 
        "
        sub2="transforming every click into a 
        "
        sub3="meaningful conversation
        "
      />
      <TestimonySection testimonies={testimonies} hideComp={true} />
      <TrustedBySection/>

      <ComparisionSection comparisionFeatures={comparisionFeatures}>
        <h3 className="text-4xl font-bold   text-gray-900 sm:text-5xl   lg:text-6xl xl:text-6xl">
          <div>5 Reasons to</div>
          <Image src={line} alt="" className="w-[200px] sm:w-[300px]  " />

          <div className="-mt-3">Choose Us</div>
        </h3>
      </ComparisionSection>
      <HowWorksSections howworks={howworks} heading="How Zigment Works" />
      <IntegrationsSections
        title={"Easy Integration"}
        description={`Zigment fits effortlessly into your existing digital ecosystem, enhancing your customer engagement strategies across all platforms.`}
      />
      <ChatBotFeaturesSection title1="Not Just" title2="Another Chatbot" chatbotFeatures={chatbotFeatures} />
      <Faq />
    </LandingPageLayout>
  );
};

export default coaches;
