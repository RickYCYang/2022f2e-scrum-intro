/** components */
import TaskSlot from '@/components/common/TaskSlot';
import { FaHandPaper } from 'react-icons/fa';

/** utils */
import { MoveItem, MoveItemFn, SlotType } from '@/utils/types';
import { useRef, useEffect } from 'react';

interface InitTasksProps {
  canDrag: boolean;
  showExample: boolean;
  slotType: SlotType;
  tasks: MoveItem[];
  moveTask: MoveItemFn;
}

const InitTasks = ({
  canDrag,
  showExample,
  slotType,
  tasks,
  moveTask,
}: InitTasksProps) => {
  const taskSlotRef = useRef<HTMLDivElement>(null);
  /** task slots */
  const slot1Task = tasks.find((m) => m.slot === 1);
  const slot2Task = tasks.find((m) => m.slot === 2);
  const slot3Task = tasks.find((m) => m.slot === 3);
  const slot4Task = tasks.find((m) => m.slot === 4);

  useEffect(() => {
    const moveClasses = [
      'transition-all',
      'duration-[1700ms]',
      'delay-[1300ms]',
      'right-[calc(50%-160px)]',
      'top-[100px]',
    ];
    const initClasses = ['right-[calc(50%-600px)]', 'top-48'];
    setTimeout(() => {
      if (showExample) {
        taskSlotRef.current?.classList.remove(...initClasses);
        taskSlotRef.current?.classList.add(...moveClasses);
      } else {
        taskSlotRef.current?.classList.remove(...moveClasses);
        taskSlotRef.current?.classList.add(...initClasses);
      }
    }, 0);
  }, [showExample]);

  return (
    <>
      <TaskSlot
        slot={1}
        slotType={slotType}
        className={`absolute left-[calc(50%-600px)] top-12`}
        task={slot1Task}
        moveTask={moveTask}
        canDrag={canDrag}
      />
      <TaskSlot
        slot={2}
        slotType={slotType}
        className={`absolute left-[calc(50%-600px)] top-48`}
        task={slot2Task}
        moveTask={moveTask}
        canDrag={canDrag}
      />
      <TaskSlot
        slot={3}
        slotType={slotType}
        className={`absolute right-[calc(50%-600px)] top-12`}
        task={slot3Task}
        moveTask={moveTask}
        canDrag={canDrag}
      />
      <div
        ref={taskSlotRef}
        className={`absolute right-[calc(50%-600px)] top-48 `}
      >
        <TaskSlot
          slot={4}
          slotType={slotType}
          task={slot4Task}
          moveTask={moveTask}
          canDrag={canDrag}
        >
          {showExample && (
            <FaHandPaper
              className={`absolute left-0 top-4 text-white text-xl`}
            />
          )}
        </TaskSlot>
      </div>
    </>
  );
};

export default InitTasks;
