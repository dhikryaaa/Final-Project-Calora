'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';
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


// Zod schema with password confirmation
const SignUpSchema = z
  .object({
    username: z.string().min(3, "Username too short"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password too short"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type SignUpForm = z.infer<typeof SignUpSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState<SignUpForm>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = SignUpSchema.safeParse(form);

    if (!result.success) {
      const firstError = result.error.errors[0]?.message || 'Invalid input';
      setError(firstError);
      return;
    }

    setError(null);

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
      }),
    });

    if (response.ok) {
      router.push('/auth/login');
    } else {
      setError('Failed to create user.');
      console.error('Failed to create user:', response.statusText);
    }
  };

  return (
     <div>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome To Calora</CardTitle>
          <CardDescription>
            Register your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form 
          onSubmit={handleSubmit}
          >
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  required
                  />
                </div>
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
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    {/* <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a> */}
                  </div>
                  <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Password"
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Register
                </Button>
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
