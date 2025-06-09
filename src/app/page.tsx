'use client';

import NavbarHome from '@/components/navbar-home';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <NavbarHome />
      <main className="min-h-screen flex items-center justify-center bg-background">
        Home Page
      </main>
    </div>
  );
}

      // <button
      //   onClick={() => router.push('/pages/greeting')}
      //   className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-xl shadow hover:bg-blue-50 transition"
      // >
      //   Go to Greeting Page
      // </button>