import { useRef, useEffect } from 'react';

/** components */
import TaskSlot from './TaskSlot';
import { FaHandPaper } from 'react-icons/fa';
import { AiFillCaretLeft } from 'react-icons/ai';

/** utils */
import { Task, MoveTask } from '@/utils/types';

interface InitDraggableTasksProps {
  canDrag: boolean;
  tasks: Task[];
  moveTask: MoveTask;
}

const InitDraggableTasks = ({
  canDrag,
  tasks,
  moveTask,
}: InitDraggableTasksProps) => {
  const taskSlotRef = useRef<HTMLDivElement>(null);
  const tasksWithNullSlot = tasks.filter((task) => task.slot === null);

  useEffect(() => {
    if (canDrag) return;
    /** to-do: task4 show animation of moveing to 1st task slot at beginner  */
    //taskSlotRef.current?.classList.remove('right-0');
    //taskSlotRef.current?.classList.remove('top-32');
    //taskSlotRef.current?.classList.add('left-[calc(50%)]', 'top-[50px]');
  });

  return (
    <>
      {tasksWithNullSlot.map((task) => {
        let xPos;
        let yPos;

        if (task.initPos < 2) {
          xPos = 'left-0';
        } else {
          xPos = 'right-0';
        }

        if (task.initPos % 2 === 0) {
          yPos = 'top-0';
        } else {
          yPos = 'top-32';
        }

        const showSupportIcon = !canDrag && task.priority === 4;
        const highlightTask = !canDrag && !showSupportIcon;

        return (
          <div
            className={`absolute transition-transform duration-1000 delay-1000 z-20 ${xPos} ${yPos} ${
              highlightTask ? 'opacity-50' : 'opacity-100'
            }`}
            key={task.title}
            ref={showSupportIcon ? taskSlotRef : null}
          >
            <TaskSlot
              slot={null}
              task={task}
              moveTask={moveTask}
              canDrag={canDrag}
            >
              {showSupportIcon ? (
                <>
                  <div className="absolute origin-center rotate-12 -left-[130px] -top-0 flex items-center ">
                    <AiFillCaretLeft className="text-white -mr-1 p-0" />
                    <div className="border-b border-white w-[130px]" />
                  </div>
                  <FaHandPaper
                    className={`absolute left-0 top-2 text-white text-xl`}
                  />
                </>
              ) : null}
            </TaskSlot>
          </div>
        );
      })}
    </>
  );
};

export default InitDraggableTasks;
