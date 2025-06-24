'use client';

import NavbarHome from '@/components/navbar-home';
import { useRouter } from 'next/navigation';
import { Particles } from '@/components/magicui/particles';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();
  const {theme, setTheme} = useTheme();

  useEffect(() => {
      console.log(theme)
  },[])

  return (
    <div>
      <NavbarHome />
      <div>
      </div>
      <main className=" text-center items-center justify-center bg-background">
        <div className='sm:text-4xl lg:text-5xl font-semibold mt-40'>Manage your calories seamlessly <br/> with Calora.</div>
        <div className='mt-5 text-muted-foreground'>Easily manage calorie intake, set goals, and see statistics</div>
      </main>
      <div className='flex justify-center mt-25'>
         <Image
          src="/dashboard.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          className='z-100 self-center rounded-2xl w-200'
        />
          <Particles
          className="absolute inset-0 z-0"
          quantity={150}
          ease={80}
          color={theme === 'dark' ? '#ffffff' : '#000000'}
          refresh
        />
      </div>
    </div>
  );
}

      // <button
      //   onClick={() => router.push('/pages/greeting')}
      //   className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-xl shadow hover:bg-blue-50 transition"
      // >
      //   Go to Greeting Page
      // </button>