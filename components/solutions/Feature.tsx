import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

type Props = {}

const Feature = ({ item }: any) => {

  const [open, setOpen] = useState(false)
  return (
    <div key={item.id} className="relative border-b border-slate-800 pb-5 px-2 cursor-pointer">
      <dt className='flex items-center justify-between  ' onClick={() => setOpen(!open)}>
        <p className="  sm:text-xl font-medium   text-gray-900">{item.name}</p>
        <ChevronDownIcon className='w-6 h-6' />
      </dt>
      {
        open
        &&
        <dd className="mt-4   text-base text-gray-500">{item.description}</dd>
      }
    </div>
  )
}

export default Feature