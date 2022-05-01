import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative bg-white max-w-2xl w-full pb-32 pt-4'>
          <main className='mx-auto max-w-7xl px-8'>
            <h1 className='text-xl '>eversage</h1>
            <p>Lorem ipsum dolorum set</p>
          </main>
        </div>
      </div>
      <div className='absolute inset-y-0 right-0 w-1/2'>
        <Image
          className='h-64 w-full object-cover'
          layout='fill'
          src='/images/wood-toys.jpg'
          alt='Kids playing with toys.'
        />
      </div>
    </div>
  );
}
