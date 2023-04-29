import { useDrag } from 'react-dnd';

/** components */
import Task from '@/components/common/Task';

/** utils */
import itemTypes from '@/utils/itemTypes';
import { MoveItem, Color } from '@/utils/types';

interface DraggableTaskProps {
  task: MoveItem;
  canDrag: boolean;
  color: Color;
  borderColor?: Color;
}

const DraggableTask = ({
  task,
  canDrag,
  color,
  borderColor,
}: DraggableTaskProps) => {
  const [{ isDragging }, dragRef, _dragPreviewRef] = useDrag(
    () => ({
      type: itemTypes.TASK,
      item: {
        ...task,
      },
      canDrag: (_monitor) => canDrag,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [canDrag]
  );

  return (
    <Task
      ref={dragRef}
      title={task.title}
      points={task.points}
      isDragging={isDragging}
      canDrag={canDrag}
      color={color}
      borderColor={borderColor}
    />
  );
};

export default DraggableTask;
