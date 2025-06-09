'use client';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from 'next-auth/react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';

// Zod schema for Sign In
const SignInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInForm = z.infer<typeof SignInSchema>;

export default function LoginForm() {
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
    <div>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form 
          onSubmit={handleSubmit}
          >
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {/* <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a> */}
                  </div>
                  <Input 
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/auth/register" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
