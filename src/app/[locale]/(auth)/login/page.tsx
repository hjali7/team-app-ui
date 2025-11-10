'use client';

import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, KeyRound, Mail, School } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const t = useTranslations('LoginPage');

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{t('title')}</CardTitle>
        <CardDescription>
          {t('signupPrompt')} <Link href="/signup" className="underline">{t('signupLink')}</Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">{t('emailLabel')}</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">{t('passwordLabel')}</Label>
          <Input id="password" type="password" required />
        </div>
        <Button className="w-full">{t('loginButton')}</Button>
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
    </Card>
  )
}
