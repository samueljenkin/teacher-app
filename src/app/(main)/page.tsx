import React from 'react';

export default function Home() {
  return (
    <main>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Mark Work
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-yellow-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
          >
            + Assignment
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-yellow-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
          >
            + Class
          </button>
        </div>
      </div>

      <div className='flex justify-between mt-8'>
        <div className='flex flex-col gap-2'>
          <p>Not due</p>
          <div className='flex flex-col gap-2'>
            <a href='/classes/123' className='p-4 border border-solid border-gray-400 rounded-xl bg-yellow-100'>
              <p>Formative 1</p>
              <p className="text-xs">Class 2A</p>
              <p className="text-xs">History - Year 8</p>
              <div className='h-px w-full bg-black' />
              <p className="text-xs">Submitted: 25/30</p>
              <p className="text-xs">Marked: 5/25</p>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p>Due in past week</p>
          <div className='flex flex-col gap-2'>
            <a href='/classes/123' className='p-4 border border-solid border-gray-400 rounded-xl bg-blue-100'>
              <p>Summative 1</p>
              <p className="text-xs">Class 1A</p>
              <p className="text-xs">English - Year 7</p>
              <div className='h-px w-full bg-black' />
              <p className="text-xs">Submitted: 25/30</p>
              <p className="text-xs">Marked: 5/25</p>
            </a>
            <a href='/classes/123' className='p-4 border border-solid border-gray-400 rounded-xl bg-yellow-100'>
              <p>Formative 2</p>
              <p className="text-xs">Class 2B</p>
              <p className="text-xs">English - Year 7</p>
              <div className='h-px w-full bg-black' />
              <p className="text-xs">Submitted: 25/30</p>
              <p className="text-xs">Marked: 5/25</p>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p>Due in past fortnight</p>
          <div className='flex flex-col gap-2'>
            <a href='/classes/123' className='p-4 border border-solid border-gray-400 rounded-xl bg-yellow-100'>
              <p>Formative 1</p>
              <p className="text-xs">Class 2A</p>
              <p className="text-xs">History - Year 8</p>
              <div className='h-px w-full bg-black' />
              <p className="text-xs">Submitted: 25/30</p>
              <p className="text-xs">Marked: 5/25</p>
            </a>
            <a href='/classes/123' className='p-4 border border-solid border-gray-400 rounded-xl bg-yellow-100'>
              <p>Formative 2</p>
              <p className="text-xs">Class 2B</p>
              <p className="text-xs">English - Year 7</p>
              <div className='h-px w-full bg-black' />
              <p className="text-xs">Submitted: 25/30</p>
              <p className="text-xs">Marked: 5/25</p>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p>Due in past month</p>
          <div className='flex flex-col gap-2'>
            <a href='/classes/123' className='p-4 border border-solid border-gray-400 rounded-xl bg-blue-100'>
              <p>Summative 1</p>
              <p className="text-xs">Class 1A</p>
              <p className="text-xs">English - Year 7</p>
              <div className='h-px w-full bg-black' />
              <p className="text-xs">Submitted: 25/30</p>
              <p className="text-xs">Marked: 5/25</p>
            </a>
            <a href='/classes/123' className='p-4 border border-solid border-gray-400 rounded-xl bg-yellow-100'>
              <p>Formative 1</p>
              <p className="text-xs">Class 2A</p>
              <p className="text-xs">History - Year 8</p>
              <div className='h-px w-full bg-black' />
              <p className="text-xs">Submitted: 25/30</p>
              <p className="text-xs">Marked: 5/25</p>
            </a>
            <a href='/classes/123' className='p-4 border border-solid border-gray-400 rounded-xl bg-yellow-100'>
              <p>Formative 2</p>
              <p className="text-xs">Class 2B</p>
              <p className="text-xs">English - Year 7</p>
              <div className='h-px w-full bg-black' />
              <p className="text-xs">Submitted: 25/30</p>
              <p className="text-xs">Marked: 5/25</p>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p>Due over a month</p>
          <div className='flex flex-col gap-2'>
            <a href='/classes/123' className='p-4 border border-solid border-gray-400 rounded-xl bg-blue-100'>
              <p>Summative 1</p>
              <p className="text-xs">Class 1A</p>
              <p className="text-xs">English - Year 7</p>
              <div className='h-px w-full bg-black' />
              <p className="text-xs">Submitted: 25/30</p>
              <p className="text-xs">Marked: 5/25</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
