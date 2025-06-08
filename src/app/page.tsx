'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-600">
      <button
        onClick={() => router.push('/pages/greeting')}
        className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-xl shadow hover:bg-blue-50 transition"
      >
        Go to Greeting Page
      </button>
    </main>
  );
}
