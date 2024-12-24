function HomePage() {
  return (
    <>
    <div className='grid gap-8 items-start justify-center mt-10'>
      <div className='relative '>
        <div className='absolute inset-0 bg-gradient-to-r  from-pink-600 to-purple-600 rounded-lg blur-xl animate-pulse'></div>
        <div className='relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600'>
          <span className='flex items-center space-x-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-7 text-pink-600 -rotate-12'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z'
              />
            </svg>

            <h1 className='pr-6 text-gray-100'>Nicholas Quiroz</h1>
          </span>
          <h2 className='pl-6 text-indigo-400'>This is my Portfolio</h2>
        </div>
      </div>
    </div>
    </>

  );
}
export default HomePage;
