import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>eversage | home</title>
        <meta
          name='description'
          content='At eversage, we love learning and believe that kids learn best with high quality toys. We make those high quality toys by hand using the best materials possible.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-7xl mx-auto'>
        <Nav />
        <Hero />
        <ContactForm />
      </main>
    </div>
  );
}
