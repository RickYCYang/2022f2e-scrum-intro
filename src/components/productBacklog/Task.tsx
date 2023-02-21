import { forwardRef } from 'react';

interface TaskProps {
  ref?: HTMLDivElement;
  className?: string;
  title: string;
}

const Task = forwardRef<HTMLDivElement, TaskProps>(
  ({ className, title }, ref) => {
    return (
      <div
        ref={ref}
        className={`px-6 py-3  bg-black/50 rounded-md border border-primary
      text-white text-base font-bold cursor-move opacity-100 text-left ${className}`}
      >
        {title}
      </div>
    );
  }
);

Task.displayName = 'Task';

export default Task;
