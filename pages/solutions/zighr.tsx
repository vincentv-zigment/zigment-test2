import img3 from "@/assets/images/solutions/features/CostEfficiency.svg";
import img2 from "@/assets/images/solutions/features/InstantEngagement.svg";
import img4 from "@/assets/images/solutions/features/Omnichannel.svg";
import img5 from "@/assets/images/solutions/features/Tailored Interaction.svg";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import img15 from "@/assets/images/solutions/howworks/InitialOnboarding.svg";
import img16 from "@/assets/images/solutions/howworks/Integrationprocess.svg";
import img17 from "@/assets/images/solutions/howworks/SeeMagicinRealtime.svg";
import instant from "@/assets/images/solutions/whatwedo/Instant.svg";
import reduce from "@/assets/images/solutions/whatwedo/ReduceHumanCapital.svg";
import alwaysOn from "@/assets/images/solutions/whatwedo/alwaysOn.svg";
import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import MetaTagsComponents from "@/components/common/MetaTagsComponents";
import ChatBotFeaturesSection from "@/components/solutions/ChatBotFeaturesSection";
import ComparisionSection from "@/components/solutions/ComparisionSection";
import CustomHero from "@/components/solutions/CustomHero";
import EmphasisSection from "@/components/solutions/EmphasisSection";
import Faq from "@/components/solutions/Faq";
import Features from "@/components/solutions/Features";
import HowWorksSections from "@/components/solutions/HowWorksSections";
import IntegrationsSections from "@/components/solutions/IntegrationsSections";
import TestimonySection from "@/components/solutions/TestimonySection";
import WhatWeDo from "@/components/solutions/WhatweDo";
import { testimonies } from "@/lib/testimonial";
import Image from "next/image";
import Link from "next/link";

type Props = {}

const whatwedo = [
    {
      id: 1,
      question: "Always On ",
      answer: "Set it, forget it. Zigment is engaging 24/7",
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
      answer: "AI Agents cost just a fraction",
      img: reduce,
    },
  ];

const features = [
    {
        id: 1,
        title: "Automated Candidate Engagement",
        para:
        "Zigment transforms the way businesses and agencies reach out to candidates. By automating initial contact and responses, Zigment frees recruiters from repetitive tasks, allowing them to focus on what really matters - building relationships and closing top talents.",
        img: img2,  
    },
    {
        id: 2,
        title: "Smart Scheduling Solutions",
        para:
        "Scheduling interviews becomes a breeze with Zigment. Our AI-driven system intelligently matches candidate availability with your team's schedule, eliminating the time-consuming back-and-forth and ensuring a smooth experience for both parties.",
        img: img3, 
    },
    {
        id: 3,
        title: "Consistent Candidate Communication",
        para:
        "Ensure every candidate receives the same high standard of information and interaction. Zigment’s AI maintains your company's voice and answers FAQs accurately, ensuring your employer brand is consistently represented.",
        img: img4, 
    },
    {
        id: 4,
        title: "Data-Driven Recruitment Strategies",
        para:
        "Make informed hiring decisions with insights gleaned from Zigment’s interactions. Understand candidate preferences and behaviors to refine your recruitment approach and secure the best talent.",
        img: img5,  
    },
];
  
 
  

  const comparisonFeatures = [
    {
      id: 11,
      name: "Automated vs. Manual Outreach",
      description: "Zigment handles candidate engagement automatically, saving valuable time.",
    },
    {
      id: 12,
      name: "AI-Powered Scheduling vs. Manual Coordination",
      description: "Eliminates scheduling hassles with smart, AI-driven coordination.",
    },
    {
      id: 13,
      name: "Consistent Communication vs. Variable Messaging",
      description: "Delivers uniform messaging, enhancing the candidate experience and brand image.",
    },
    {
      id: 14,
      name: "Real-Time Insights vs. Delayed Feedback",
      description: "Provides immediate actionable insights for strategic recruitment planning.",
    },
    {
      id: 15,
      name: "Comprehensive Integration vs. Standalone Systems",
      description: "Seamlessly integrates with existing recruitment platforms and CRMs.",
    },
  ];
  
  const howworks = [
  {
    title: "Quick Implementation",
    description: "Just input your company and job details to get started",
    imageUrl: img15, // Replace img22 with the actual image source or variable.
  },
  {
    title: "Customize to Fit",
    description: `Align Zigment with your specific hiring needs and company culture.
    `,
    imageUrl: img16, // Replace img23 with the actual image source or variable.
  },
  {
    title: ` Launch and Learn`,
    description: `Go live and watch as Zigment transforms your recruitment process.`,
    imageUrl: img17, // Replace img24 with the actual image source or variable.
  },
];
const chatbotFeatures = [
    {
      id: 4,
      name: "Adaptive Conversations",
      description: `Zigment’s AI understands and adapts to each candidate's unique queries.
      `,
    },
    {
      id: 5,
      name: `360° Recruitment Automation`,
      description: `From initial outreach to interview scheduling, Zigment handles it all.`,
    },
    {
      id: 6,
      name: `Continuous Learning and Improvement`,
      description: `Our AI evolves with each interaction, constantly improving the recruitment experience.
      `,
    },
  ];
  

const saas = (props: Props) => {
  return (
    <LandingPageLayout>
        <MetaTagsComponents 
          title={"Zigment - Revolutionize Your Recruitment Process with AI Automation"} 
          description="Discover Zigment’s AI-driven solutions for HR and recruitment automation. Streamline candidate engagement, simplify interview scheduling, and enhance hiring efficiency with our intelligent platform. Perfect for businesses and recruitment agencies seeking to optimize their recruitment process and grow their talent pool."
          keywords={`AI recruitment automation, Zigment HR solutions, Automated candidate engagement, Intelligent interview scheduling, Recruitment process optimization, AI for hiring efficiency, Talent acquisition automation, HR technology, Recruitment agency software, Zigment for businesses, Automated HR tools, AI-driven recruitment, Smart hiring solutions
          `}
        /> 
        <main className="relative">
          <CustomHero   >
            <h1 className="text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl  leading-tight">
              <div className="relative leading-tight">
                <p className="block xl:inline ">Reach More Candidates,</p>
                {" "}
                <Image
                  src={line}
                  alt=""
                  className="absolute w-[200px] inset-x-0 mx-auto lg:m-0 lg:w-[350px] -bottom-1 lg:-bottom-4 "
                />
              </div>
              <span className="block  leading-tight">Spend Less Time </span>
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
              <h2 className="lg:text-left text-lg font-semibold text-center leading-8 text-gray-900 
              flex items-center gap-2
              ">
              Reduce your recruiter costs by over {' '}
                <span className="text-brand-orange-deski text-3xl">80%</span>  
              </h2>
            </div>
          </div>
          </CustomHero>
          <WhatWeDo data={whatwedo} title="Zigment is Your 24/7 Super Recruiter" />
          <Features contents={features}>
            <h2 className="hidden sm:block mb-10 text-2xl font-bold text-center leading-loose	mx-auto	 text-gray-900 sm:text-5xl">
              <span>
                AI Automation for Interview Scheduling
              </span>
              <span className="block">with Zigment </span>

              <Image
                src={line}
                alt=""
                className="w-[200px] absolute left-[560px] -bottom-4"
              />
            </h2>
          </Features>
          <EmphasisSection
            heading={`Transform the way you connect with potential talent - efficient, effective, and always engaging`}
            sub1="Transform the way you connect with "
            sub2={`potential talent - efficient, effective,`}
            sub3="and always engaging"
          />
          <TestimonySection testimonies={testimonies} />
          <ComparisionSection comparisionFeatures={comparisonFeatures}>
            <h3 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl xl:text-6xl">
              <div>Zigment vs </div>
              <Image src={line} alt="" className="w-[200px] sm:w-[250px]  " />

              <div className="-mt-3">Traditional Methods</div>
            </h3>
          </ComparisionSection>
          <HowWorksSections
            heading="Getting Started is Easy"
            howworks={howworks}
          />
          <IntegrationsSections
            title={"Easy Integration"}
            description={`Seamlessly integrate Zigment with your existing HR platforms, ensuring a smooth transition to smarter recruitment.
            `}
          />
          <ChatBotFeaturesSection
            title1="Beyond the"
            title2="Traditional Chatbot"
            chatbotFeatures={chatbotFeatures}
          />
          <Faq />
        </main>
      </LandingPageLayout>
  )
}

export default saas