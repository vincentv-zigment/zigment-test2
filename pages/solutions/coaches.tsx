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
    title: `The Freedom to Create`,
    para: `You're a coach. Your art is in your content and courses. Zigment lets you focus on that by taking care of customer engagement, 24/7.
    `,
    img: img2,
  },
  {
    id: 2,
    title: `Convert While You Sleep`,
    para: `No more waking up to lost opportunities. Zigment converts leads into clients even when you're away. The AI engine adapts to the conversation and clinches the deal.
    `,
    img: img3,
  },
  {
    id: 3,
    title: `Support, Simplified

    `,
    para: `Address inquiries and resolve issues without taking time away from what you do best.

    `,
    img: img4,
  },
  {
    id: 4,
    title: `Smart Enough to be Your Second-in-Command 
    `,
    para: ` Let Zigment handle inquiries, book sessions, and even upsell your additional offerings. It's like having a digital manager, without the HR headaches.
    `,
    img: img5,
  },
];

const comparisionFeatures = [
  {
    id: 1,
    name: "All-in-One",
    description: "Manage all platforms in one window.",
  },
  {
    id: 2,
    name: "Human Touch",
    description: "No one can tell you’re using a bot.",
  },
  {
    id: 3,
    name: "Economically Smart",
    description: "Cheaper than a part-time assistant.",
  },
  {
    id: 4,
    name: "Setup in Seconds",
    description: "Easy onboarding, no tech degree needed.",
  },
  {
    id: 5,
    name: "Platform-Specific Goodies",
    description: "Custom features just for Instagram and Facebook.",
  },
];

const howworks = [
  {
    title: "Quick Sign-Up",
    description: "Provide your services / products information. We do the rest",
    imageUrl: img15, // Replace 'img1' with the appropriate image URL for Quick Sign-Up
  },
  {
    title: "Plug It In",
    description:
      "Link your FB/Insta accounts & CRM if any and let Zigment work its magic",
    imageUrl: img16, // Replace 'img2' with the appropriate image URL for Plug It In
  },
  {
    title: "Enjoy Your Freedom",
    description:
      "Now, get back to what you're passionate about. See your leads converted on the dashboard",
    imageUrl: img17, // Replace 'img3' with the appropriate image URL for Enjoy Your Freedom
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
      <CustomHero>
        <h1 className="text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl   leading-tight">
          <div className="relative leading-tight">
            <p className="block xl:inline ">AI Assistant for </p>{" "}
            <Image
              src={line}
              alt=""
              className="absolute mx-auto w-[240px] md:w-[350px] lg:left-0  lg:w-[360px] -bottom-4  md:-bottom-4 "
            />
          </div>
          <span className="block   xl:inline leading-tight">
            Coaches, Creators and Sellers
          </span>
        </h1>
        <div className="mt-2 lg:mt-10  ">
          <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
            <Link
              href={
                "/contactus?utm_source=organic&utm_campaign=hero_button_coaches"
              }
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
          A Futuristic Upgrade For Your Sales Funnel
          <Image
            src={line}
            alt=""
            className="w-[420px] absolute left-[172px]     -bottom-8"
          />
        </h2>
      </Features>
      <EmphasisSection
        heading={`Engaging with fans
shouldn’t eat into your creative time.
Zigment is your jam`}
        sub1="Engaging with fans
        "
        sub2="shouldn’t eat into your creative time.
        "
        sub3="Zigment is your jam
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

export default coaches;
