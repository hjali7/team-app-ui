'use client';

import { useTranslations } from 'next-intl';
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
import Link from 'next/link';

export default function SignupPage() {
  const t = useTranslations('SignupPage');

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{t('title')}</CardTitle>
        <CardDescription>
          {t('loginPrompt')} <Link href="/login" className="underline">{t('loginLink')}</Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">{t('usernameLabel')}</Label>
          <Input id="username" type="text" placeholder="Your Name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{t('emailLabel')}</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">{t('passwordLabel')}</Label>
          <Input id="password" type="password" required />
        </div>
        <Button className="w-full">{t('signupButton')}</Button>
      </CardContent>
    </Card>
  )
}
