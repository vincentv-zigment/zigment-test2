import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import Image from "next/image";
import React from "react";
import circle from "@/assets/images/solutions/circle.svg";
import square from "@/assets/images/solutions/square.svg";
import cloud from "@/assets/images/solutions/cloud.svg";
import line from "@/assets/images/solutions/hero/line-shape-1.svg";
import excellence from "@/assets/images/aboutus/Excellence.svg";
import innovation from "@/assets/images/aboutus/Innovation.svg";
import integrity from "@/assets/images/aboutus/Integrity.svg";
import Link from "next/link";

const values = [
  {
    title: "Innovation for Impact",
    content:
      "Every line of code we write is aimed at making a positive mark on the world.",
    img: innovation,
  },
  {
    title: "Integrity First",
    content:
      "Your trust is our foundation. We promise transparency, security, and respect for your data.",
    img: integrity,
  },
  {
    title: "Excellence as Standard",
    content:
      "Good isn't good enough. We strive for excellence in every solution we deliver.",
    img: excellence,
  },
];

type Props = {};

const people = [
  {
    name: "Dikshant Dave",
    role: "CEO",
    imageUrl: "https://cdn.zigment.ai/assets/dikshantdave.jpg",
    bio: `With a knack for recognizing the potential of AI in transforming human interactions, Dikshant has steered Zigment from concept to reality. His vision? To create a platform where technology doesn't overshadow humanity but enhances it. 
    `,
    linkedinUrl: "https://www.linkedin.com/in/dikshant-dave-636990",
  },
  {
    name: "Karma Pandya",
    role: "The Architect CTO",
    imageUrl: "https://cdn.zigment.ai/assets/karmapandya.jpg",
    bio: `The wizard behind the curtain, turning complex code into seamless conversations. Karma believes in the power of technology to tell stories, share experiences, and forge bonds. He's the brain behind our AI, ensuring that it isn't just smart but also kind, responsive, and inclusive. 
    `,
    linkedinUrl: "https://www.linkedin.com/in/karma-pandya/",
  },
  {
    name: "Larry Braitman",
    role: `The Founding Director`,
    imageUrl: "https://cdn.zigment.ai/assets/larrybaitman.png",
    bio: `As a Founding Director, Larry has been instrumental in shaping the strategic direction of Zigment. Larry's influence ensures that Zigment remains at the forefront of innovation while maintaining its core values.
    `,
    linkedinUrl: "https://www.linkedin.com/in/larrybraitman/",
  },
  // More people...
];

const aboutus = (props: Props) => {
  return (
    <LandingPageLayout>
      <div
        className="mx-12 my-8 rounded-xl overflow-hidden"
        style={{
          background: "url(https://cdn.zigment.ai/assets/aboutusbg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold  text-gray-400">About us</h2>
            <p className="mt-1 text-4xl font-black max-w-5xl mx-auto tracking-snug leading-normal text-gray-900 sm:text-5xl lg:text-6xl pb-9">
              Building the most advanced conversational sales platform
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-2xl font-medium text-gray-600">
              We help companies shorten their lead cycle times and significantly
              reduce the human capital required in the process.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Innovation Meets Empathy
            </p>
            <p className="relative text-center text-xl text-gray-500  mt-4 py-4 max-w-3xl mx-auto">
              At Zigment, we're not just tech enthusiasts; we're people
              enthusiasts. Our journey began with a simple observation: in a
              world buzzing with digital chatter, genuine conversation was
              becoming a lost art. So, we set out to change that.
            </p>
          </div>

          <div>
            <div className="overflow-hidden   rounded-md     ">
              <div className="relative mx-auto max-w-xl    lg:max-w-7xl mt-4 ">
                <div className="mx-auto  ">
                  <h3 className="text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl">
                    <div className="text-lg font-medium text-gray-500 uppercase">
                      Our Mission
                    </div>

                    <div className="relative inline-block max-w-3xl w-full text-2xl">
                      Conversation with a Purpose
                    </div>
                  </h3>
                </div>

                <div className="relative       lg:items-center lg:gap-8">
                  <div
                    className="relative text-center text-lg text-gray-500  mt-4 py-4 max-w-3xl mx-auto"
                    aria-hidden="true"
                  >
                    We believe every interaction is an opportunity to make a
                    difference. That's why Zigment is dedicated to crafting AI
                    that doesn't just talk but communicates. Our mission is to
                    empower businesses, coaches, creators, and fundraisers to
                    connect with their audience meaningfully, creating
                    relationships that lead to growth and success.
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden   rounded-md bg-white   ">
              <div className="relative mx-auto max-w-xl    lg:max-w-7xl  ">
                <div className="mx-auto  ">
                  <h3 className="text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl">
                    <div className="text-lg font-medium text-gray-500 uppercase">
                      Our Vision
                    </div>

                    <div className="relative inline-block max-w-3xl w-full text-2xl">
                      A World Where No Message Goes Unheard
                    </div>
                  </h3>
                </div>

                <div className="relative       lg:items-center lg:gap-8">
                  <div
                    className="relative text-center text-lg text-gray-500  mt-4 py-4 max-w-3xl mx-auto"
                    aria-hidden="true"
                  >
                    In a perfect world, every outreach would spark a connection,
                    and no call for support would go unanswered. Zigment is here
                    to make that world a reality, one conversation at a time. We
                    envision a future where technology bridges gaps, not widens
                    them—where everyone, no matter the size of their platform or
                    the scope of their resources, has a voice.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-12 relative my-8 rounded-xl overflow-hidden bg-[#f2f7ff]">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:pt-32 lg:pb-36">
          <div className="text-center mb-12 relative">
            <h2 className="text-lg font-semibold  text-gray-400">OUR VALUES</h2>
            <p className="mt-2 text-4xl font-bold max-w-4xl mx-auto tracking-tight text-gray-900 sm:text-5xl lg:text-6xl  ">
              The Zigment DNA
            </p>
            <p className="mx-auto mt-8  max-w-4xl text-xl md:text-2xl font-medium text-gray-500">
              At Zigment, we foster a culture where the drive for innovative
              solutions, uncompromising integrity, and a relentless pursuit of
              excellence shapes our approach to transforming the digital
              engagement landscape.
            </p>
            <Image
              src={square}
              alt="triangle"
              className=" w-4 h-4 z-20 absolute text-brand-orange-deski fill-brand-orange-deski left-10 top-6   "
              width={100}
              height={100}
              style={{
                animation: "moveUpDown 4s ease-in infinite",
              }}
            />
          </div>
          <div className="w-full grid grid-cols-1 relative md:grid-cols-3">
            <Image
              src={square}
              alt="triangle"
              className=" w-4 h-4 z-20 absolute text-brand-orange-deski fill-brand-orange-deski right-10 top-6   "
              width={100}
              height={100}
              style={{
                animation: "moveUpDown 4s ease-in infinite",
              }}
            />
            {values.map((value) => {
              return (
                <div
                  className="px-5 pt-10 text-center relative z-10"
                  key={value.title}
                >
                  <Image src={value.img} alt="" className="h-24 object-fit" />
                  <h3 className="pt-9 pb-2 text-lg">{value.title}</h3>
                  <p className="text-2xl font-semibold">{value.content}</p>
                </div>
              );
            })}
          </div>
          <Image
            src={circle}
            alt="triangle"
            className="absolute w-64 h-64 -right-24 -bottom-24 -rotate-[60deg]"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24 relative">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <Image
              src={cloud}
              alt=""
              className="absolute w-[600px] top-10 bottom-1 -left-20"
            />
            <div className="space-y-5 sm:space-y-4 relative z-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl relative">
                The Team
                <Image
                  src={line}
                  alt=""
                  className="absolute  w-[200px] left-0 -bottom-3 "
                />
              </h2>

              <Image
                src={square}
                alt="triangle"
                className=" w-4 h-4 z-20 absolute  right-10 -top-6   "
                width={100}
                height={100}
                style={{
                  animation: "moveUpDown 4s ease-in infinite",
                }}
              />

              <Image
                src={circle}
                alt="triangle"
                className="hidden lg:block absolute w-40 right-12 bottom-28  "
                style={{
                  animation: "rotate 30s linear infinite",
                }}
              />
            </div>
            <div className="lg:col-span-2 relative z-10">
              <ul
                role="list"
                className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
              >
                {people.map((person) => (
                  <li key={person.name} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className=" overflow-hidden rounded-lg flex items-center ">
                        <img
                          className="w-[250px] h-[300px] object-cover shadow-lg"
                          src={person.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="space-y-1 text-lg font-medium leading-6">
                            <h3>{person.name}</h3>
                            <p className="text-brand-orange-deski">
                              {person.role}
                            </p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">{person.bio}</p>
                          </div>
                          <ul role="list" className="flex space-x-5">
                            <li>
                              <a
                                href={person.linkedinUrl}
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
            <h3 className="text-2xl md:text-5xl">Join the AI revolution!</h3>
            <p className="mt-4 text-lg text-gray-600">
              We are looking for enthusiastic people with any skillsets.
            </p>
            <Link
              href={"/joinus"}
              className="inline-block mt-4 px-4 py-2 border border-brand-orange-deski rounded-md bg-white w-fit text-brand-orange-deski  hover:text-white hover:bg-brand-orange-deski transition-all text-lg"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </LandingPageLayout>
  );
};

export default aboutus;
