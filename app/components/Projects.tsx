import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  return (
    <div className='mt-40'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 sm:mx-10 md:mx-20 lg:mx-40'>
        <div>
          <Link href='/' className='inset-0 rounded-lg '>
            <h1 className='text-l text-white text-center'>LoopStudios</h1>
            <Image
              src='/images/loopstudios.jpg'
              width={500}
              height={500}
              alt='Loop Studios project screenshot'
              className=' transition duration-500 ease-in-out transform hover:translate-y-3 hover:scale-110 hover:bg-gray-800'
            />
          </Link>
        </div>
        <div>
          <Link
            href='https://engagementphotos.vercel.app/'
            className='inset-0 rounded-lg '
            target='_blank'
          >
            <Image
              src='/images/engagement.png'
              width={500}
              height={500}
              alt='Loop Studios project screenshot'
              className=' transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 hover:bg-gray-800'
            />
            <h1 className='text-l text-white text-center'>Engagment Page</h1>
          </Link>
        </div>
        <div>
          <Link href='/about' className='inset-0 rounded-lg '>
            <h1 className='text-l text-white text-center'>LoopStudios</h1>
            <Image
              src='/images/loopstudios.jpg'
              width={500}
              height={500}
              alt='Loop Studios project screenshot'
              className='transition duration-500 ease-in-out transform hover:translate-y-3 hover:scale-110 hover:bg-gray-800'
            />
          </Link>
        </div>
        <div>
          <Link href='/about' className='inset-0 rounded-lg'>
            <Image
              src='/images/loopstudios.jpg'
              width={500}
              height={500}
              alt='Loop Studios project screenshot'
              className=' transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 hover:bg-gray-800'
            />
            <h1 className='text-l text-white text-center'>LoopStudios</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Projects;
