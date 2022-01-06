import React from 'react';
import { SearchIcon } from '@heroicons/react/solid'

const SectionHeader = () => {
  return (
    <div className="w-full mx-auto flex flex-row justify-between bg-black items-center lg:p-10">
      <div className="flex justify-center lg:justify-end">
        <div className="">
          <label htmlFor="search" className="sr-only">Search</label>
          <div className="relative text-sky-100 focus-within:text-gray-400">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full bg-sky-700 bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-sky-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm bg-teal-900"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Criar
      </button>
    </div>
  );
}

export { SectionHeader };
