import { PersonalDashboard } from '@/components/personal-dashboard';
import { UpcomingTasks } from '@/components/upcoming-tasks';
import { TeamActivityFeed } from '@/components/team-activity-feed';
import { TaskPriorityChart } from '@/components/task-priority-chart';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Main dashboard section with original components */}
      <PersonalDashboard />

      {/* New section with additional widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-1">
          <UpcomingTasks />
        </div>
        <div className="lg:col-span-1">
          <TaskPriorityChart />
        </div>
        <div className="lg:col-span-1">
          <TeamActivityFeed />
        </div>
      </div>
    </div>
  );
}
