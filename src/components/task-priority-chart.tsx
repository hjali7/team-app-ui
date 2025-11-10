'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { initialTasks } from '@/constants/mock-data';

// Process data to count tasks by priority
const priorityCounts = initialTasks.reduce((acc, task) => {
  if (task.priority) {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
  }
  return acc;
}, {} as Record<'High' | 'Medium' | 'Low', number>);

const data = Object.keys(priorityCounts).map(key => ({
  name: key,
  value: priorityCounts[key as 'High' | 'Medium' | 'Low'],
}));

const COLORS = {
  High: '#ef4444', // red-500
  Medium: '#f97316', // orange-500
  Low: '#84cc16', // lime-500
};

export function TaskPriorityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks by Priority</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
