import { ReactNode } from 'react';
import { useDrop } from 'react-dnd';

/** components */
import DraggableTask from '@/components/common/DraggableTask';

/** utils */
import itemTypes from '@/utils/itemTypes';
import {
  MoveItem,
  MoveItemFn,
  ElementStyleProps,
  SlotType,
  Color,
} from '@/utils/types';
import classNames from 'classnames';

interface TaskSlotProps extends ElementStyleProps {
  slot: number;
  slotType: SlotType;
  task?: MoveItem;
  moveTask: MoveItemFn;
  canDrag: boolean;
  color?: Color;
  taskBorderColor?: Color;
  children?: ReactNode;
}

const TaskSlot = ({
  slot,
  slotType,
  task,
  moveTask,
  canDrag,
  color = Color.PRIMARY,
  taskBorderColor,
  className,
  children,
}: TaskSlotProps) => {
  const showTask = task?.title !== undefined;
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: itemTypes.TASK,
      canDrop: (_item) => !showTask,
      drop: (item: MoveItem) => {
        moveTask(item, slotType, slot);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [task]
  );
  const showPreviewSlot = isOver && canDrop && !showTask;

  /**
   * show dash-border if there is no task in the slot currently,
   * otherwise, border is not need since <DraggableTask /> has its own border style
   */
  const borderClasses = classNames({
    'border-2 border-dashed': !showTask,
    'border-primary': color === Color.PRIMARY,
    'border-yellow': color === Color.YELLOW,
    'border-red': color === Color.RED,
  });

  return (
    <div className={`flex justify-center ${className} min-h-[56px] w-[320px]`}>
      <div
        ref={dropRef}
        className={`relative rounded-md min-h-[56px] w-full z-20 ${borderClasses}`}
      >
        {children}
        {showPreviewSlot && (
          <div className="min-h-[56px] bg-black/50 rounded-md" />
        )}
        {task?.title && (
          <DraggableTask
            task={task}
            canDrag={canDrag}
            color={color}
            borderColor={taskBorderColor}
          />
        )}
      </div>
    </div>
  );
};

export default TaskSlot;
