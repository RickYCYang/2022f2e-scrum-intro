import { forwardRef } from 'react';

/** components */
import Points from '@/components/common/Points';

/** utils */
import { ElementStyleProps } from '@/utils/types';
import { themeColors } from '@/utils/const';
import classNames from 'classnames';

interface TaskProps extends ElementStyleProps {
  ref?: HTMLDivElement;
  title: string;
  points?: number;
  isDragging?: boolean;
  canDrag?: boolean;
  color: themeColors;
  borderColor?: themeColors;
}

const Task = forwardRef<HTMLDivElement, TaskProps>(
  ({ title, points, isDragging, canDrag, color, borderColor }, ref) => {
    /** borderColor's priority is higher than color */
    const actlColor = borderColor ?? color;
    const dynamicClasses = classNames({
      'opacity-50': isDragging,
      'opacity-100': !isDragging,
      'cursor-move': canDrag,
      'border-primary': actlColor === themeColors.PRIMARY,
      'border-yellow': actlColor === themeColors.ORANGE,
      'border-red': actlColor === themeColors.RED,
    });

    return (
      <div
        ref={ref}
        className={`px-6 py-3 bg-black/50 rounded-md border-2
                  text-white text-base font-bold 
                    flex items-center gap-4 text-left
                    ${dynamicClasses}
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
