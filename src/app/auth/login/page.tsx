import LoginForm from '@/app/auth/login/login-form';
import { ThemeToggle } from '@/components/theme-toggle';

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <ThemeToggle className="absolute top-4 right-4" />
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
          </div>
          Calora
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
