import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>
  onSubmit: () => void;
}

const SearchFilterCompApi = ({
  search, setSearch,
  onSubmit
}: Props) => {


  return (
    <div className="w-full flex items-center ">

      <div className="relative w-full flex items-center gap-2">
        <div className='absolute  z-[1]  left-3'>
          <MagnifyingGlassIcon className='w-4 h-4' />
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(e.target.value, 'e.target.value')
          }}
          className="relative w-full md:w-64 pl-10  rounded-md border border-gray-300   py-2  pr-10 text-left shadow-sm focus:border-brand-orange-deski focus:outline-none focus:ring-1 focus:ring-brand-orange-deski sm:text-sm "
          placeholder="Search by name, status, etc."
        />
        <button
          onClick={() => {
            onSubmit();
          }}
          className="text-white bg-brand-orange-deski hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-brand-orange-deski font-medium rounded-md text-sm px-4 py-2 focus:ring-offset-2"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchFilterCompApi