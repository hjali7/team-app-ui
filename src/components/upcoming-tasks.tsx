'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { initialTasks } from '@/constants/mock-data';
import { format, differenceInDays, parseISO } from 'date-fns';

// Filter and sort tasks that are upcoming within the next 7 days
const upcomingTasks = initialTasks
  .filter(task => {
    if (!task.dueDate || task.columnId === 'done') return false;
    const daysUntilDue = differenceInDays(parseISO(task.dueDate), new Date());
    return daysUntilDue >= 0 && daysUntilDue <= 7;
  })
  .sort((a, b) => new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime());

const getPriorityVariant = (priority: 'High' | 'Medium' | 'Low' | undefined) => {
  switch (priority) {
    case 'High':
      return 'destructive';
    case 'Medium':
      return 'secondary';
    default:
      return 'outline';
  }
};

export function UpcomingTasks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        {upcomingTasks.length > 0 ? (
          <ul className="space-y-4">
            {upcomingTasks.map(task => (
              <li key={task.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{task.content}</p>
                  <p className="text-sm text-muted-foreground">
                    Due: {format(parseISO(task.dueDate!), 'MMMM d')}
                  </p>
                </div>
                <Badge variant={getPriorityVariant(task.priority)}>{task.priority}</Badge>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground text-center">
            No upcoming tasks for the next 7 days. Great job!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
