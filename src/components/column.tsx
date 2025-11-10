'use client';

import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { useMemo } from 'react';
import { TaskCard } from './task-card';
import type { Column, Task } from '@/constants/mock-data';
import { CSS } from '@dnd-kit/utilities';

interface ColumnProps {
  column: Column;
  tasks: Task[];
}

export function Column({ column, tasks }: ColumnProps) {
  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const { setNodeRef } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className="bg-muted/50 rounded-lg p-4 flex flex-col gap-4"
    >
      <h3 className="font-semibold text-lg">{column.title}</h3>
      <div className="flex flex-col gap-2">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}
