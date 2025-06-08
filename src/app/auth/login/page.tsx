'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';

// Zod schema for Sign In
const SignInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInForm = z.infer<typeof SignInSchema>;

export default function SignInPage() {
  const router = useRouter();
  const [form, setForm] = useState<SignInForm>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = SignInSchema.safeParse(form);
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || "Invalid input";
      setError(firstError);
      return;
    }

    setError(null);

    const signInData = await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (signInData?.error) {
      setError("Invalid email or password");
    } else {
      router.refresh();
      router.push('/pages/greeting');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-blue-700">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
