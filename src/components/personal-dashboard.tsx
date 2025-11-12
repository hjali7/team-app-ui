'use client';

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data for weekly progress
const weeklyData = [
  { day: 'Mon', created: 10, completed: 6 },
  { day: 'Tue', created: 8, completed: 8 },
  { day: 'Wed', created: 12, completed: 7 },
  { day: 'Thu', created: 7, completed: 5 },
  { day: 'Fri', created: 15, completed: 11 },
  { day: 'Sat', created: 5, completed: 5 },
  { day: 'Sun', created: 3, completed: 2 },
];

// Mock data for streak
const streak = 5; // 5 days in a row

export function PersonalDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Weekly Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="created" fill="var(--color-primary)" name="Tasks Created" />
              <Bar dataKey="completed" fill="var(--color-secondary)" name="Tasks Completed" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Streak</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-full">
            <div className="text-6xl font-bold text-primary">{streak}</div>
            <p className="text-muted-foreground mt-2">Days in a row!</p>
        </CardContent>
      </Card>
    </div>
  );
}
