import { TaskBoard } from '@/components/task-board';

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Tasks</h1>
      <TaskBoard />
    </div>
  );
}
