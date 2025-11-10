'use client';

import { Sidebar } from '@/components/sidebar';
import { PersonalDashboard } from '@/components/personal-dashboard';

export default function RootPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Dhfdfgdfghashboard</h1>
          <PersonalDashboard />
        </div>
      </main>
    </div>
  );
}

