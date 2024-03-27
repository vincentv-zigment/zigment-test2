import { classNames } from '@/lib/common'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import circle from '@/assets/images/solutions/circle.svg'
import Image from 'next/image'
import triangle from '@/assets/images/solutions/triangle.svg'
import SolutionSectionHeading from './SolutionSectionHeading'

const faqs = [
  {
    question: "What is Zigment.ai?",
    answer:
      `Zigment.ai is a conversational AI platform that employs AI agents to handle your inbound and outbound sales conversations.`,
  },
  {
    question: "How do Zigment.ai AI agents differ from each other?",
    answer:
      `The AI agents vary based on the number of conversations they can manage each month. We offer Lite, Advanced, and Super AI Agents to accommodate 900, 2,100, and 5,000 conversations respectively.
      `,
  },
  {
    question: "What languages do your AI agents support?",
    answer:
      `Our AI agents can converse in multiple popular languages, including but not limited to Spanish, Italian, and German.
      `,
  },
  {
    question: "Is this a Done-For-You service?",
    answer:
      `Yes, absolutely! We handle the entire setup for you and ensure that your AI agents are up and running effectively.
      `,
  },
  {
    question: "How are additional conversations billed?",
    answer:
      `Any conversations that exceed your chosen plan’s limit are billed at $0.50 per conversation.
      `,
  },
  {
    question: "Can I change my AI agent plan? ",
    answer:
      `Certainly! You can upgrade, downgrade, or cancel your AI agent plan at any time.
      `,
  },
  {
    question: "How do Zigment.ai AI agents compare to human sales executives?",
    answer:
      `In terms of capacity to handle conversations, a Lite AI Agent equates to one human sales executive, an Advanced AI Agent to two, and a Super AI Agent to five.
      `,
  },
  {
    question: "What functionalities do these AI agents offer",
    answer:
      `The AI agents can initiate conversations, schedule demos, set up calls, process payments, and perform various other tasks aimed at driving desired outcomes.
      `,
  },
  {
    question: "Is there a contract or minimum term requirement?",
    answer:
      `No, all our plans are monthly, and you can cancel at any time without a minimum commitment.
      `,
  }
]



export default function Faq() {
  return (
    <div className="bg-brand-orange-deskibg overflow-hidden  md:m-4 lg:m-10" id='faq-section'>
      <div className="mx-auto w-full sm:max-w-7xl  py-12 px-4 sm:py-16 sm:px-2 lg:px-8">
        <div className="mx-auto w-full sm:max-w-3xl relative ">
          <SolutionSectionHeading className="text-center mb-20">
            Frequently asked questions
          </SolutionSectionHeading>

          <dl className="mt-6 space-y-2  relative ">
            <Image src={circle} alt='' className='absolute -top-24 -left-24' />
            <Image src={triangle} alt='' className='absolute bottom-1/2 my-auto translate-y-1/2 -right-48' />
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className=" p-4 sm:py-6 sm:pl-10 sm:pr-6 bg-white relative z-[10]">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
