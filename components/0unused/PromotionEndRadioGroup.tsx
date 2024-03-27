import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/lib/common'
import { BanknotesIcon, CalendarDaysIcon, PhoneArrowUpRightIcon, UserPlusIcon } from '@heroicons/react/24/outline'

const mailingLists = [
  { 
    id: 1, 
    title: 'Schedule a Call', icon: CalendarDaysIcon },
  { id: 2, title: 'Send Payment Link', icon:BanknotesIcon },
  { id: 3, title: 'Signup Form',  icon:UserPlusIcon},
  { id: 4, title: 'Connect a Call', icon: PhoneArrowUpRightIcon},
]
 

export default function Example() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <RadioGroup.Label className="text-base font-medium text-gray-900"></RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
        {mailingLists.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? ' bg-brand-orange-deski/10 ' : 'border-gray-300',
                active ? '  ring-2 ring-brand-orange-deski  ' : 'hover:bg-brand-orange-deski',
                'relative flex cursor-pointer rounded-lg border p-3 hover:bg-brand-orange-deski/10 shadow-sm focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1 ">
                 
                  <span className="flex  items-center gap-3">
                    <span>
                      <mailingList.icon className="w-6 h-6 text-brand-orange-deski"/>
                    </span>

                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      {mailingList.title}
                    </RadioGroup.Label>
                    
             
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-brand-orange-deski')}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-brand-orange-deski' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
