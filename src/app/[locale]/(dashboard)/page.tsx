import { PersonalDashboard } from '@/components/personal-dashboard';
import { useTranslations } from 'next-intl';

export default function DashboardPage() {
  const t = useTranslations('DashboardPage'); // Assuming you'll add translations for this page

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <PersonalDashboard />
    </div>
  );
}
