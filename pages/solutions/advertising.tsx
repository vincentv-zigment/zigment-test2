import LandingPageLayout from "@/components/Layout/LandingPageLayout";

import line from "@/assets/images/solutions/hero/line-shape-1.svg";

import alwaysOn from "@/assets/images/solutions/whatwedo/salesfunnel.png";
import instant from "@/assets/images/solutions/whatwedo/delayedresponse.png";
import feedback from "@/assets/images/solutions/whatwedo/feedbacklogo.png";
import reduce from "@/assets/images/solutions/whatwedo/ReduceHumanCapital.svg";

import img4 from "@/assets/images/solutions/features/Omnichannel.svg";
import img5 from "@/assets/images/solutions/features/Tailored Interaction.svg";
import img2 from "@/assets/images/solutions/features/InstantEngagement.svg";
import img3 from "@/assets/images/solutions/features/CostEfficiency.svg";
import img15 from "@/assets/images/solutions/howworks/InitialOnboarding.svg";
import img16 from "@/assets/images/solutions/howworks/Integrationprocess.svg";
import img17 from "@/assets/images/solutions/howworks/SeeMagicinRealtime.svg";
import WhatWeDo from "@/components/solutions/WhatweDo";
import Features from "@/components/solutions/Features";
import EmphasisSection from "@/components/solutions/EmphasisSection";
import TestimonySection from "@/components/solutions/TestimonySection";
import CompairsionSection from "@/components/solutions/ComparisionSection";
import HowWorksSections from "@/components/solutions/HowWorksSections";
import IntegrationsSections from "@/components/solutions/IntegrationsSections";
import ChatBotFeaturesSection from "@/components/solutions/ChatBotFeaturesSection";
import Faq from "@/components/solutions/Faq";
import hero from "@/assets/images/solutions/hero/forad.png";
import CustomHero from "@/components/solutions/CustomHero";
import Image from "next/image";
import Head from "next/head";
import MetaTagsComponents from "@/components/common/MetaTagsComponents";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";
import { FaCheck } from "react-icons/fa6";
import FeatureComparisonSection from "@/components/solutions/FeaturesSection";
import TrustedBySection from "@/components/solutions/TrustedBySection";
import SolutionSectionHeading from "@/components/solutions/SolutionSectionHeading";

  const testimonies = [
  
  {
    id: 2,
    img: "https://cdn.zigment.ai/assets/1balance.svg",
    testimony:
      "Zigment has helped educate and qualify our prospects leading to a far better customer experience and satisfaction",
    name: "Srini",
    designation: "CMO, 1Balance",
  },
  {
    id: 3,
    img: "https://cdn.zigment.ai/assets/service_buddy_logo.webp",
    testimony:
      "This is the best solution for a small / medium sized company like ours, we no longer need to hire an expensive full-time resource for lead qualification and support",
    name: "Tom S",
    designation: "Founder, ServiceBuddy.io",
  },
  {
    id: 4,
    img: "https://cdn.zigment.ai/assets/unigage_logo.jpeg",
    testimony:
      "I am blown over by the human-like interactions that Zigment’s AI is able to have with the potential customers. This is the future.",
    name: "Caleb",
    designation: "CEO, UniGage",
  },
  {
    id: 5,
    img: "https://cdn.zigment.ai/assets/1710832034-trinkerr.png",
    testimony:
      "We are using Zigment AI for our customer onboarding flow and it has reduced our drop rates by more than 20%",
    name: "Srini Sharma",
    designation: "CMO, Trinkerr",
  },
];

const whatwedo = [
  {
    id: 1,
    question: "Broken Funnel",
    answer: "Lead forms and scripted user flows leave your customers unsatisfied and drop",
    img: alwaysOn,
  },
  {
    id: 2,
    question: "Delayed Response",
    answer: "Delays in getting back to your leads is resulting in a loss of revenue",
    img: instant,
  },
  {
    id: 3,
    question: "No feedback to Campaigns ",
    answer: "Your Ad campaigns do not improve unless you pass the user funnel data back to them",
    img: feedback,
  },
];

const features = [
  {
    "id": 1,
    "title": "Conversation + Action",
    "para": "Unlike the traditional chatbots, Zigment’s AI agents are smarter and are capable of taking complex actions",
    "img": img2
  },
  {
    "id": 2,
    "title": "Always-On",
    "para": "Engage with your potential customers 24/7. Cater to your users at their convenience not yours",
    "img": img3
  },
  {
    "id": 3,
    "title": "Go Live Instantly",
    "para": "Now take your AI enabled, fully automated CTM campaigns live in hours instead of days and weeks.",
    "img": img4
  },
  {
    "id": 4,
    "title": "Realtime Dashboard",
    "para": "Track all your users’ activities in realtime via a dashboard as they go through their buying journey in your funnel",
    "img": img5
  }
]



const comparisionFeatures = [
  {
    id: 1,
    name: "Interactive vs Static",
    description: "Your ads can now talk, literally!",
  },
  {
    id: 2,
    name: "Instant Engagement vs Delayed Responses",
    description: "Connect when they're hooked, not hours later.",
  },
  {
    id: 3,
    name: "Deep Analytics vs Shallow Metrics",
    description: "Know your audience, don't just count them.",
  },
  {
    id: 4,
    name: "Cost-Efficient vs High Overheads",
    description: "Achieve more with less, we're not kidding.",
  },
  {
    id: 5,
    name: "Easy Scaling vs Manual Hassles",
    description: "Zigment grows with you, no sweat.",
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
    name: "A Conversationalist, Not a Coder",
    description:
      "Zigment doesn’t spit out canned replies. It engages in natural, flowing conversations.",
  },
  {
    id: 2,
    name: "Depth, Not Just Data",
    description:
      "Beyond just numbers, Zigment provides insights that can redefine your advertising strategy.",
  },
  {
    id: 3,
    name: "Adapts and Learns",
    description:
      "Zigment gets better over time, refining its interactions based on past conversations.",
  },
];


const heroBullets = [
  'WhatsApp Tech Partner',
  'No Setup Fees',
  'CRM Integration'
]

type Props = {};

const coaches = (props: Props) => {
  return (
    <LandingPageLayout>
      <MetaTagsComponents 
        title={"Zigment for Advertising – Maximizing Ad ROI with AI"} 
        description="Amplify your advertising ROI with Zigment, using AI-driven responses to convert clicks into customers and streamline your ad engagement process."
        keywords={"AI Advertising, Ad Conversion, Click-to-Customer AI, Advertising ROI, Zigment AI, Marketing Automation, Digital Ad Engagement"}
      /> 
      
      <section className=" h-screen lg:-mt-[80px]" >
      
        <main className="lg:relative flex flex-col flex-col-reverse	h-full lg:flex-row  ">
          <div className="   h-full    w-full  max-w-2xl mx-auto  text-center  flex items-center lg:text-left ">
            <div className="px-4 h-full sm:px-8 relative  mx-auto lg:mx-0 flex flex-col items-start  justify-center gap-12">
                <h1 className="text-4xl font-black  text-gray-900 sm:text-5xl relative  lg:text-[50px] xl:text-6xl  leading-tight">
                    <p className="block xl:inline  leading-tight">Get More Leads <br className="hidden md:block"/> From Your Ad Campaigns</p>{" "}
                    <Image
                      src={line}
                      alt=""
                      className="absolute  w-[250px] sm:w-[350px]  inset-x-0 mx-auto lg:mx-0 left-0  lg:w-[280px] -bottom-4 lg:-bottom-4 "
                    />
                </h1>

                <p className="  text-xl font-medium text-gray-800  ">Zigment’s conversational AI sales platform <br/> nurtures every click to convert more</p>
              <div className=" mx-auto md:pb-16 lg:m-0 lg:p-0">
                  <div className="rounded-md w-full flex items-center relative justify-center lg:justify-start">
                    <Link
                      href={"/contactus?utm_source=organic&utm_campaign=hero_button_advertising"}
                      className="inline-block  bg-brand-orange-deski hover:bg-red-500 rounded-md right-2 text-white font-medium sm:font-semibold px-4  px-8   py-3 py-2 text-lg md:text-base"
                    >
                      Start Now
                    </Link>
                  </div>
                  <div className="flex  gap-4 items-center mt-4">
                      {heroBullets.map((x)=>{
                        return (
                          <div className="flex gap-2  items-center">
                            <span><FaCheck className="w-4 h-4 text-brand-orange-deski"/></span>
                            <p className="text-gray-800 text-xs md:text-sm">
                              {x}
                            </p>
                          </div>
                          )
                      })}
                  </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center px-4 w-full   xl:w-1/2 mx-auto my-4 md:my-0">
            <Image
              className="inset-0 w-full h-full  md:h-[500px] md:my-4  object-contain	"
              src={hero}
              alt=""
              width={700}
              height={700}
              priority={true}
            />
          </div>
        </main>

      </section>
      <WhatWeDo 
        data={whatwedo} 
        title="Low Conversion and Poor \n Lead Quality?" 
      />
      <Features contents={features}>
        <SolutionSectionHeading className="text-center mb-10 relative" >
        Nurture Every Lead to Convert  <br className="hidden lg:inline-block bg-red-100"/>More with Zigment
          <Image
            src={line}
            alt=""
            className="w-[200px] absolute right-[380px] -bottom-4"
          />
        </SolutionSectionHeading>
      </Features>
      <EmphasisSection
        heading="Ads are not just billboards;
        they're the first handshake.
        Make them count."
        sub1="Ads are not just billboards;
        "
        sub2="they're the first handshake.
        "
        sub3="Make them count.
        "
      />
      <TestimonySection testimonies={testimonies} hideComp={true} />
      
      {/* <ComparisionSection comparisionFeatures={comparisionFeatures}>
        <h3 className="text-4xl font-bold   text-gray-900 sm:text-5xl   lg:text-6xl xl:text-6xl">
          <div>5 Reasons to </div>
          <Image src={line} alt="" className="w-[200px] sm:w-[300px]  " />

          <div className="-mt-3">Choose Us</div>
        </h3>
      </ComparisionSection>
       */}

      <TrustedBySection/>
      <FeatureComparisonSection/>
      <HowWorksSections howworks={howworks} />
      <IntegrationsSections
        title={"Easy Integration"}
        description={`Everywhere Your Customer Is, So Are We. Zigment can work on most customer engagement channels like FB/Insta, Whatsapp, SMS, Email, etc., and can seamlessly integrate with Salesforce, Hubspot, Zoho, Freshdesk, and many more. 
        `}
      />
      <ChatBotFeaturesSection chatbotFeatures={chatbotFeatures} />
      <Faq />
    </LandingPageLayout>
  );
};

export default coaches;
