import { useDrop } from 'react-dnd';

/** components */
import DraggableTask from './DraggableTask';

/** utils */
import itemTypes from '@/utils/itemTypes';
import { Task, MoveTask } from '@/utils/types';
import { ReactNode } from 'react';

interface TaskSlotProps {
  slot: number | null;
  task?: Task;
  className?: string;
  moveTask: MoveTask;
  canDrag: boolean;
  children?: ReactNode;
}

const TaskSlot = ({
  slot,
  task,
  className,
  moveTask,
  canDrag,
  children,
}: TaskSlotProps) => {
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: itemTypes.TASK,
      //canDrop: (_item) => slot !== null,
      drop: (item: Task) => {
        moveTask(item, slot);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [slot]
  );

  const showPreviewSlot = isOver && canDrop && !task?.title;

  return (
    <div className={`py-3 px-5 ${className}`}>
      <div
        ref={dropRef}
        className={`relative rounded-md min-h-[56px] w-[320px] z-20 ${
          !task?.title ? 'border-2 border-dashed border-primary' : ''
        } `}
      >
        {children}
        {showPreviewSlot ? (
          <div className="min-h-[56px] bg-black/50 rounded-md" />
        ) : (
          ''
        )}
        {task?.title && <DraggableTask task={task} canDrag={canDrag} />}
      </div>
    </div>
  );
};

export default TaskSlot;
