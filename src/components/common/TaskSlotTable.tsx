import { motion } from 'framer-motion';

/** components */
import TaskSlot from '@/components/common/TaskSlot';
import Progressbar from '@/components/common/Progressbar';
import PriorityLine from '@/components/common/PriorityLine';

/** utils */
import { MoveItem, MoveItemFn, SlotType } from '@/utils/types';
import { themeColors } from '@/utils/const';
import { isNumber } from 'lodash';
import classNames from 'classnames';

interface TaskSlotTableProps {
  title: string;
  subtitle: string;
  slots: number;
  tasks?: MoveItem[];
  moveTask: MoveItemFn;
  canDrag?: boolean;
  showPriorityLine?: boolean;
  slotType: SlotType;
  color?: themeColors;
  progressbarValue?: number;
  progressbarLabel?: string;
  progressbarColor?: themeColors;
  taskBorderColor?: themeColors;
}

const TaskSlotTable = ({
  title,
  subtitle,
  slots,
  tasks,
  moveTask,
  canDrag = true,
  showPriorityLine = false,
  slotType,
  color = themeColors.PRIMARY,
  progressbarValue,
  progressbarLabel,
  progressbarColor,
  taskBorderColor,
}: TaskSlotTableProps) => {
  const slotsArr = Array.from({ length: slots }, (_, i) => i + 1);

  const tableShadowClass = classNames({
    'shadow-primary': color === themeColors.PRIMARY,
    'shadow-yellow': color === themeColors.YELLOW,
  });

  const headerBgColorClass = classNames({
    'bg-primary': color === themeColors.PRIMARY,
    'bg-yellow': color === themeColors.YELLOW,
  });

  const headerSubtitleColorClass = classNames({
    'text-dark': color === themeColors.PRIMARY,
    'text-[#933500]': color === themeColors.YELLOW,
  });

  const bodyBgColorClass = classNames({
    'from-dark to-dark': color === themeColors.PRIMARY,
    'from-[#A95E14] to-[#A95E14]': color === themeColors.YELLOW,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`w-[400px] h-[440px] flex flex-col rounded-md shadow-md ${tableShadowClass}`}
    >
      <div className={`py-2 rounded-t-md text-center ${headerBgColorClass}`}>
        <h4 className='text-2xl font-bold'>{title}</h4>
        <h6 className={`text-base font-bold ${headerSubtitleColorClass}`}>
          {subtitle}
        </h6>
      </div>
      <div
        className={`bg-gradient-to-t rounded-b-md py-3 px-8 relative opacity-100 
        flex-1 flex flex-col justify-around items-center
        ${bodyBgColorClass}`}
      >
        {showPriorityLine && <PriorityLine className='absolute left-3 top-0' />}
        {slotsArr.map((index) => {
          const task = tasks?.find(
            (t) => t.slot === index && t.slotType === slotType
          );
          return (
            <TaskSlot
              key={index}
              slotType={slotType}
              slot={index}
              task={task}
              moveTask={moveTask}
              canDrag={canDrag}
              color={color}
              taskBorderColor={taskBorderColor}
            />
          );
        })}
        {isNumber(progressbarValue) && (
          <Progressbar
            value={progressbarValue}
            label={progressbarLabel}
            color={progressbarColor}
            showBorder={true}
            fixedOnTop={false}
          />
        )}
      </div>
    </motion.div>
  );
};

export default TaskSlotTable;
