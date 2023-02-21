import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

/** components */
import TaskSlotTable from './TaskSlotTable';
import InitDraggableTasks from './InitDraggableTasks';

/** utils */
import { tasksPool } from '@/utils/const';
import { Task } from '@/utils/types';

interface BacklogDnDPanelProps {
  canDrag: boolean;
  className?: string;
  setPass: (pass: boolean) => void;
}

const BacklogDnDPanel = ({
  canDrag,
  className,
  setPass,
}: BacklogDnDPanelProps) => {
  const [tasks, setTasks] = useState<Task[]>(
    tasksPool.map((task) => ({ ...task, slot: null }))
  );

  const moveTask = (task: Task, targetSlot: number | null): void => {
    console.log('task', task);
    console.log('targetSlot', targetSlot);
    setTasks((prev) => {
      const newTasks = [...prev];
      /** set new slot for current moved task */
      const newTaskA = { ...task, slot: targetSlot };
      /** if targetSlot is already put a task  */
      const origSlotTask = newTasks.find((t) => t.slot === targetSlot);
      newTasks.forEach((t, i) => {
        if (t.title === newTaskA.title) {
          newTasks[i] = newTaskA;
        }
        if (
          origSlotTask?.title !== task.title &&
          t.title === origSlotTask?.title
        ) {
          newTasks[i] = { ...origSlotTask, slot: null };
        }
      });

      return newTasks;
    });
  };

  useEffect(() => {
    for (const task of tasks) {
      if (task.priority !== task.slot) {
        setPass(false);
        return;
      }
      setPass(true);
    }
  }, [tasks, setPass]);

  console.log('tasks', tasks);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`relative w-full flex justify-center ${className}`}>
        <InitDraggableTasks
          tasks={tasks}
          moveTask={moveTask}
          canDrag={canDrag}
        />
        <TaskSlotTable tasks={tasks} moveTask={moveTask} canDrag={canDrag} />
      </div>
    </DndProvider>
  );
};

export default BacklogDnDPanel;
