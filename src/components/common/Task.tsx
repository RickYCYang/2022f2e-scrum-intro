import { forwardRef } from 'react';

/** components */
import Points from '@/components/common/Points';

/** utils */
import { ElementStyleProps, Color } from '@/utils/types';
import classNames from 'classnames';

interface TaskProps extends ElementStyleProps {
  ref?: HTMLDivElement;
  title: string;
  points?: number;
  isDragging?: boolean;
  canDrag?: boolean;
  color: Color;
  borderColor?: Color;
}

const Task = forwardRef<HTMLDivElement, TaskProps>(
  ({ title, points, isDragging, canDrag, color, borderColor }, ref) => {
    /** borderColor's priority is higher than color */
    const actlColor = borderColor ?? color;
    const classes = classNames({
      'opacity-50': isDragging,
      'opacity-100': !isDragging,
      'cursor-move': canDrag,
      'border-primary': actlColor === Color.PRIMARY,
      'border-yellow': actlColor === Color.ORANGE,
      'border-red': actlColor === Color.RED,
    });

    return (
      <div
        ref={ref}
        className={`px-6 py-3 bg-black/50 rounded-md border-2
                  text-white text-base font-bold 
                    flex items-center gap-4 text-left
                    ${classes}
                  `}
      >
        {points !== undefined && <Points points={points} color={color} />}
        {title}
      </div>
    );
  }
);

Task.displayName = 'Task';

export default Task;
