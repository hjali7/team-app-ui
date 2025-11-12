export type Task = {
  id: string;
  columnId: 'todo' | 'in-progress' | 'done';
  content: string;
};

export type Column = {
  id: 'todo' | 'in-progress' | 'done';
  title: string;
};

export const initialTasks: Task[] = [
  { id: 'task-1', columnId: 'todo', content: 'Design the landing page' },
  { id: 'task-2', columnId: 'todo', content: 'Implement authentication' },
  { id: 'task-3', columnId: 'in-progress', content: 'Develop the dashboard layout' },
  { id: 'task-4', columnId: 'in-progress', content: 'Set up the database schema' },
  { id: 'task-5', columnId: 'done', content: 'Initialize the Next.js project' },
];

export const initialColumns: Column[] = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
];
