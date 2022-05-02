import Image from 'next/image';

export default function Hero() {
  return (
    <div className='grid grid-cols-2 grid-flow-row max-w-7xl mx-auto'>
      <div className='bg-zinc-100 pt-6 px-10 rounded-bl-md'>
        <h1 className='text-3xl font-extralight italic text-zinc-900'>
          eversage
        </h1>
        <h2 className='text-sm font-thin italic text-zinc-800 pt-2'>
          Hand Crafted Wooden Toys
        </h2>
        <p className='text-base text-zinc-800 pt-6'>
          At eversage we believe a child learns best when using the highest
          quality toys to spark their imagination. We dedicate our time and
          passion into creating beautiful, one of a kind, toys from the highest
          grade materials. All natural and safe so you can rest easy knowing
          your little one is able to fully enjoy play time!
        </p>
      </div>
      <div className='bg-zinc-100 rounded-br-md overflow-hidden'>
        <Image
          layout='responsive'
          width={1000}
          height={667}
          src='/images/wood-toys.jpg'
          alt='Kids playing with toys.'
        />
      </div>
    </div>
  );
}
