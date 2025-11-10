export type Task = {
  id: string;
  columnId: 'todo' | 'in-progress' | 'done';
  content: string;
  dueDate?: string; // Optional due date in ISO format (e.g., "2024-12-31")
  priority?: 'High' | 'Medium' | 'Low';
};

export type Column = {
  id: 'todo' | 'in-progress' | 'done';
  title: string;
};

// Helper function to get future dates
const getFutureDate = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
};

export const initialTasks: Task[] = [
  { id: 'task-1', columnId: 'todo', content: 'Design the landing page', dueDate: getFutureDate(3), priority: 'High' },
  { id: 'task-2', columnId: 'todo', content: 'Implement authentication', dueDate: getFutureDate(5), priority: 'High' },
  { id: 'task-3', columnId: 'in-progress', content: 'Develop the dashboard layout', dueDate: getFutureDate(1), priority: 'Medium' },
  { id: 'task-4', columnId: 'in-progress', content: 'Set up the database schema', dueDate: getFutureDate(10), priority: 'Low' },
  { id: 'task-5', columnId: 'done', content: 'Initialize the Next.js project' },
  { id: 'task-6', columnId: 'todo', content: 'Write user documentation', dueDate: getFutureDate(7), priority: 'Medium' },
  { id: 'task-7', columnId: 'todo', content: 'Fix login button bug', dueDate: getFutureDate(2), priority: 'High' },
];

export const initialColumns: Column[] = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
];

// New mock data for Team Activity Feed
export type TeamActivity = {
  id: string;
  user: { name: string; avatar: string; };
  action: string;
  target: string;
  team: string;
  timestamp: string; // ISO 8601 format
};

export const teamActivities: TeamActivity[] = [
  { id: 'act-1', user: { name: 'Alice', avatar: 'https://github.com/shadcn.png' }, action: 'completed', target: 'Design the landing page', team: 'Team Alpha', timestamp: new Date().toISOString() },
  { id: 'act-2', user: { name: 'Bob', avatar: 'https://github.com/shadcn.png' }, action: 'added a new task', target: 'Fix login button bug', team: 'Team Alpha', timestamp: new Date(Date.now() - 3600 * 1000).toISOString() },
  { id: 'act-3', user: { name: 'Charlie', avatar: 'https://github.com/shadcn.png' }, action: 'invited', target: 'david@example.com', team: 'Team Beta', timestamp: new Date(Date.now() - 7200 * 1000).toISOString() },
  { id: 'act-4', user: { name: 'You', avatar: 'https://github.com/shadcn.png' }, action: 'moved', target: 'Develop the dashboard layout to In Progress', team: 'Team Alpha', timestamp: new Date(Date.now() - 86400 * 1000).toISOString() },
];
