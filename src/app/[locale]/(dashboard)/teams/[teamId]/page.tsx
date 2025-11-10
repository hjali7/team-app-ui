import { TaskBoard } from '@/components/task-board';
import { TeamDashboard } from '@/components/team-dashboard';
import { TeamChat } from '@/components/team-chat';
import { InviteMemberDialog } from '@/components/invite-member-dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { notFound } from 'next/navigation';

// Mock data for teams - in a real app, this would come from an API
const teamsData = [
  { id: 'team-1', name: 'Team Alpha' },
  { id: 'team-2', name: 'Team Beta' },
];

export default function TeamPage({ params }: { params: { teamId: string } }) {
  const team = teamsData.find((t) => t.id === params.teamId);

  if (!team) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{team.name}</h1>
        <InviteMemberDialog teamName={team.name} />
      </div>

      <Tabs defaultValue="tasks" className="w-full">
        <TabsList>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </TabsList>
        <TabsContent value="tasks" className="mt-4">
          {/* Re-using the TaskBoard component for team tasks */}
          <TaskBoard />
        </TabsContent>
        <TabsContent value="chat" className="mt-4">
          <TeamChat />
        </TabsContent>
        <TabsContent value="dashboard" className="mt-4">
          <TeamDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
