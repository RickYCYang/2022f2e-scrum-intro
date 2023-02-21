import { useDrag } from 'react-dnd';

/** components */
import Task from '../Task';

/** utils */
import itemTypes from '@/utils/itemTypes';
import { Task as TaskType } from '@/utils/types';

interface DraggableTaskProps {
  task: TaskType;
  canDrag: boolean;
}

const DraggableTask = ({ task, canDrag }: DraggableTaskProps) => {
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
      className={`
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        ${canDrag ? 'cursor-move' : 'cursor-default'}
        `}
    />
  );
};

export default DraggableTask;
