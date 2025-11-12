'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, KeyRound, Mail, School } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

export default function LoginPage() {
  const t = useTranslations('LoginPage');
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://team.looparc.ir';

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData || 'Invalid email or password');
      }

      const data = await res.json();
      if (data.token) {
        localStorage.setItem('jwt_token', data.token);
        router.push('/'); 
      } else {
        throw new Error('No token received from server');
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{t('title')}</CardTitle>
        <CardDescription>
          {t('signupPrompt')} <Link href="/signup" className="underline">{t('signupLink')}</Link>
        </CardDescription>
      </CardHeader>
ط      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">{t('emailLabel')}</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">{t('passwordLabel')}</Label>
            <Input
              id="password"
              type="password"
              required
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Loading...' : t('loginButton')}
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline"><Mail className="h-4 w-4" /></Button>
            <Button variant="outline"><School className="h-4 w-4" /></Button>
            <Button variant="outline"><Github className="h-4 w-4" /></Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
