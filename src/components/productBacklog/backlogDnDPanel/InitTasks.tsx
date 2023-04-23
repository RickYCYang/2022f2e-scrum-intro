/** components */
import TaskSlot from '@/components/common/TaskSlot';
import DragArrowLine from '@/components/productBacklog/backlogDnDPanel/DragArrowLine';

/** utils */
import { MoveItem, MoveItemFn, SlotType } from '@/utils/types';

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
  const slot1Task = tasks.find((m) => m.slot === 1);
  const slot2Task = tasks.find((m) => m.slot === 2);
  const slot3Task = tasks.find((m) => m.slot === 3);
  const slot4Task = tasks.find((m) => m.slot === 4);

  return (
    <>
      <TaskSlot
        slot={1}
        slotType={slotType}
        className="absolute left-0 top-12"
        task={slot1Task}
        moveTask={moveTask}
        canDrag={canDrag}
      />
      <TaskSlot
        slot={2}
        slotType={slotType}
        className="absolute left-0 top-48"
        task={slot2Task}
        moveTask={moveTask}
        canDrag={canDrag}
      />
      <TaskSlot
        slot={3}
        slotType={slotType}
        className="absolute right-0 top-12"
        task={slot3Task}
        moveTask={moveTask}
        canDrag={canDrag}
      />
      <TaskSlot
        slot={4}
        slotType={slotType}
        className="absolute right-0 top-48"
        task={slot4Task}
        moveTask={moveTask}
        canDrag={canDrag}
      >
        {showExample && <DragArrowLine />}
      </TaskSlot>
    </>
  );
};

export default InitTasks;
