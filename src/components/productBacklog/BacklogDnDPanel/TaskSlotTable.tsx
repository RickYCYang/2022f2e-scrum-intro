/** components */
import TaskSlot from './TaskSlot';
import PriorityArrowLine from '../PriorityArrowLine';

/** utils */
import { Task, MoveTask } from '@/utils/types';

const TaskSlotTable = ({
  tasks,
  moveTask,
  canDrag,
}: {
  tasks?: Task[];
  moveTask: MoveTask;
  canDrag: boolean;
}) => {
  const getTaskSlots = () => {
    return [1, 2, 3, 4].map((index) => {
      const task = tasks?.find((t) => t.slot === index);
      return (
        <TaskSlot
          key={index}
          slot={index}
          task={task}
          moveTask={moveTask}
          canDrag={canDrag}
        />
      );
    });
  };
  return (
    <div className="rounded-md shadow-md shadow-primary w-[400px]">
      <div className="bg-primary py-2 rounded-t-md text-center">
        <h4 className="text-2xl font-bold">產品待辦清單</h4>
        <h6 className="text-dark text-base font-bold">Product Backlog</h6>
      </div>
      <div className="bg-gradient-to-t from-dark to-dark rounded-b-md py-3 pl-8 pr-3 relative">
        <>
          <PriorityArrowLine />
          <div>{getTaskSlots()}</div>
        </>
      </div>
    </div>
  );
};

export default TaskSlotTable;
