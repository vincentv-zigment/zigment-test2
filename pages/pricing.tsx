import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import { classNames } from "@/lib/common";
import { BiCheck } from "react-icons/bi";

import circle from "@/assets/images/solutions/circle.svg";
import cross from "@/assets/images/solutions/cross.svg";
import square from "@/assets/images/solutions/square.svg";
import triangle from "@/assets/images/solutions/triangle.svg";
import ChatBotFeaturesSection from "@/components/solutions/ChatBotFeaturesSection";
import Faq from "@/components/solutions/Faq";
import Image from "next/image";
import { useEffect, useState } from "react";

// import PricingCurrencyDropDown from "@/components/app-ui/flow-editor/common/PricingCurrencyDropDown";
import Link from "next/link";

const pricing = {
  tiers: [
    {
      title: `Super Agent`,
      price: 89,
      frequency: "Price: $89/month",
      // description: `Conversations: Up to 100`,
      features: [
        "Includes credits for 1000 messages per month",
        "AI Agent training and goal setting",
        "Includes Website Chatbot, Instagram and FB Messenger",
        "Google Calendar & standard CRM Integration included",
        "Additional conversations charged at 0.03 / message or $0.6 per new lead"
      ]
      ,
      cta: "Get Started",
      Bestfor: "Small businesses and startups",
    },
    {
      title: `Advanced Agent`,
      price: 189,
      frequency: `Price: $189/month`,
      // description: `Conversations: Up to 1000`,
      features: [
        "Includes credits for 2000 messages per month",
        "Everything from Super Agent Plan included",
        "Whatsapp and SMS integrations at extra charges",
        "Additional conversations charged at 0.03 / message or $0.6 per lead",
        "Option to use your own openAI API key"
      ]
      
      ,
      cta: "Get Started",
      Bestfor: "Growing businesses",
    },
    {
      title: "Custom Agent",
      price: 0,
      frequency: "Price: Contact Us",
      // description: "Conversations: No Limit",
      features: [
        `Have larger lead volumes or want us to integrate into your custom process or software stack? Lets talk.`,
      ],
      cta: "Get Started",
      Bestfor: "Large enterprises",
    },
  ],
};

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

const RowRender = ({ data }: any) => {
  const { label, imgURL } = data;
  return (
    <div className="py-2 pl-3 text-lg flex items-center gap-2  pr-9 rounded-md cursor-pointer w-full text-left hover:bg-gray-100">
      <span className="h-7 w-7 p-0.5 bg-white border flex items-center justify-center">
        <div className="">
          <img src={imgURL} alt={label} className="w-full h-full object-cover" />
        </div>
      </span>
      <span>
        {label}
      </span>
    </div>
  )
}

const countriesArray = [
  { id: 0, label: 'USD $', value: 'USD', imgURL: 'https://www.worldometers.info/img/flags/us-flag.gif', symbol: '$' },
  // { id: 1, label: 'INR ₹', value: 'INR', imgURL:'https://www.worldometers.info/img/flags/in-flag.gif', symbol:'₹' },
  // { id: 3, label: 'EUR €', value: 'EUR', imgURL:'https://cdn.zigment.ai/assets/Europe.svg.png', symbol:'€' },
  // { id: 4, label: 'GBP £', value: 'GBP', imgURL:'https://www.worldometers.info/img/flags/uk-flag.gif', symbol:'£'},
  // { id: 5, label: 'CAD $', value: 'CAD', imgURL:'https://www.worldometers.info/img/flags/ca-flag.gif', symbol:'$' },
]

export default function Example() {



  const [formData, setFormData] = useState<{
    id: number,
    label: string,
    value: string,
    imgURL: string,
    symbol: string
  }>({ id: 0, label: 'USD $', value: 'USD', imgURL: 'https://www.worldometers.info/img/flags/us-flag.gif', symbol: '$' })

  function getCurrencyBasedOnTimezone() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timezoneToCurrencyMap: any = {
      'Europe/London': 'GBP',
      'America/Toronto': 'CAD',
      'Asia/Calcutta': 'INR',
      'Europe/Berlin': 'EUR',
    };

    // return timezoneToCurrencyMap[timezone]  ;
    return 'USD'
  }

  useEffect(() => {
    const country = getCurrencyBasedOnTimezone()
    const countryPricing = countriesArray.find((x) => x.value === country)
    if (countryPricing) {
      setFormData(countryPricing)
    }
  }, [])


  return (
    <LandingPageLayout>
      <div className="absolute h-screen w-full left-0 top-0 bg-[#ecf6ff]" />
      <div className="mx-auto   relative z-10 max-w-7xl text-center mb-10  pt-24 px-4 sm:px-6 lg:px-6">
        <div className="max-w-4xl mx-auto relative">
          <Image
            src={square}
            alt="triangle"
            className=" w-4 h-4 z-20 absolute  left-40 -top-6   "
            width={100}
            height={100}
            style={{
              animation: "moveUpDown 4s ease-in infinite",
            }}
          />
          <Image
            src={cross}
            alt="triangle"
            className=" w-4 h-4 z-20 absolute  right-20 -bottom-6   "
            width={100}
            height={100}
            style={{
              animation: "moveUpDown 4s ease-in infinite",
            }}
          />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-7xl">
            Choose Your Agent, Boost Your Sales
          </h2>
          <p className="mt-6 max-w-2xl text-xl mx-auto  text-gray-500">
            Whether you're a startup or an enterprise, we've got an AI agent
            that fits your conversational needs.
          </p>
        </div>


        {/* Tiers */}
        <div className="mt-24 relative ">
          <Image
            src={triangle}
            alt="triangle"
            className="absolute -left-20 -top-28 rotate-[36deg]"
            style={{
              animation: "moveUpDown 4s ease-in infinite",
            }}
          />
          {
            formData &&
            <>
              <div className="text-left w-48 mb-10 z-20 relative flex items-center gap-4">
                {/* <PricingCurrencyDropDown
                  state={formData}
                  setState={setFormData}
                  list={countriesArray}
                  name={"pricing"}
                /> */}
              </div>

              <div className="space-y-12 divide-x lg:grid lg:grid-cols-3    lg:space-y-0">

                {pricing.tiers.map((tier) => (
                  <div
                    key={tier.title}
                    className="relative flex flex-col bg-white    bg-white p-8 shadow-sm"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl text-center font-semibold text-gray-900">
                        {tier.title}
                      </h3>

                      <div className="mx-auto w-fit h-32 flex flex-col justify-center mt-6 mb-4 text-center relative">
                        <span className="absolute top-1 -left-5 font-semibold text-3xl">
                          {tier.price !== 0 ? formData.symbol : ``}
                        </span>
                        <span className="text-6xl text-black font-bold relative">
                          {
                            tier.price !== 0 ? tier.price : <span className="text-6xl">Custom Pricing</span> 
                          }
                        </span>

                        <span className="block">{
                          tier.price !== 0 ? `/month` : ``
                        }</span>
                      </div>
                      {/* <p className="text-center text-gray-400 text-lg font-medium ">
                        {tier.description}
                      </p> */}
                      <Link
                        href="/contactus"
                        className={classNames(
                          "  text-brand-orange-deski mx-auto rounded-full hover:bg-brand-orange-deski hover:text-white",
                          "mt-8 block w-fit py-3 px-6 border border-transparent border  border-brand-orange-deski text-center font-medium"
                        )}
                      >
                        {tier.cta}
                      </Link>

                      {/* Feature list */}
                      <ul
                        role="list"
                        className="mt-6 space-y-6 border-t text-left pt-4"
                      >
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex">
                            <BiCheck
                              className="h-6 w-6 flex-shrink-0 text-brand-orange-deski"
                              aria-hidden="true"
                            />
                            <span className="ml-2  ">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 text-lg text-left font-medium">
                      Best For:
                      <span className="text-brand-orange-deski"> {tier.Bestfor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
        </div>

        <div className="p-10 font-outfit  text-left mt-16 relative rounded-xl  bg-[#ecf6ff] ">
          <Image
            src={circle}
            alt="triangle"
            className="absolute w-28 h-28 right-10 bottom-4  "
            style={{
              animation: "rotate 30s linear infinite",
            }}
          />
          <Image
            src={square}
            alt="triangle"
            className=" w-4 h-4 z-20 absolute  left-80 top-12   "
            width={100}
            height={100}
            style={{
              animation: "moveUpDown 4s ease-in infinite",
            }}
          />
          <h3 className="text-2xl md:text-5xl">Need More?</h3>
          <p className="mt-4 text-lg text-gray-600">
            For requirements exceeding 5,000 conversations, opt for our
            customized Enterprise Plan.
          </p>
          <Link href={'/contactus'} className="block mt-4 px-4 py-2 border border-brand-orange-deski rounded-md bg-white w-fit text-brand-orange-deski  hover:text-white hover:bg-brand-orange-deski transition-all text-lg">
            Talk to Us to Find Out Rates
          </Link>
        </div>
      </div>
      <ChatBotFeaturesSection chatbotFeatures={chatbotFeatures} />
      <Faq />
    </LandingPageLayout>
  );
}
