'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamActivities } from '@/constants/mock-data';
import { formatDistanceToNow, parseISO } from 'date-fns';

export function TeamActivityFeed() {
  // Sort activities by timestamp in descending order
  const sortedActivities = teamActivities.sort((a, b) =>
    parseISO(b.timestamp).getTime() - parseISO(a.timestamp).getTime()
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Team Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {sortedActivities.length > 0 ? (
          <ul className="space-y-4">
            {sortedActivities.map(activity => (
              <li key={activity.id} className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.user.avatar} />
                  <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{activity.user.name}</span>
                    {' '}{activity.action}{' '}
                    <span className="font-semibold">{activity.target}</span>
                    {' '}in team{' '}
                    <span className="font-semibold">{activity.team}</span>.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(parseISO(activity.timestamp), { addSuffix: true })}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground text-center">
            No recent team activity.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
