import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { motion } from 'framer-motion';
import { HTML5Backend } from 'react-dnd-html5-backend';

/** components */
import TaskSlotTable from '@/components/common/TaskSlotTable';
import InitTasks from '@/components/productBacklog/backlogDnDPanel/InitTasks';
import Button from '@/components/common/Button';

/** utils */
import type {
  MoveItem,
  ElementStyleProps,
  SlotType,
  ButtonSVGClickEvent,
} from '@/utils/types';
import { productBacklogs } from '@/utils/const';
import { isEmpty } from 'lodash';

interface BacklogDnDPanelProps extends ElementStyleProps {
  canDrag: boolean;
  showExample: boolean;
  showNextFrame: (e: ButtonSVGClickEvent) => void;
}

const BacklogDnDPanel = ({
  className,
  showExample,
  canDrag,
  showNextFrame,
  visible,
}: BacklogDnDPanelProps) => {
  const [tasks, setTasks] = useState<MoveItem[]>(
    productBacklogs.map((backlog) => ({ ...backlog }))
  );

  const moveTask = (
    task: MoveItem,
    slotType: SlotType,
    targetSlot: number
  ): void => {
    setTasks((prevTasks) => {
      /** find target task first */
      const newTask = prevTasks.find((t) => t.id === task.id);
      if (isEmpty(newTask)) return prevTasks;

      newTask.slot = targetSlot;
      newTask.slotType = slotType;
      const updatedTasks = prevTasks.map((t) => {
        if (t.id === newTask.id) return newTask;
        return t;
      });
      return updatedTasks;
    });
  };

  const initTasks = tasks.filter((task) => task.slotType == 'init');
  const movedTasks = tasks.filter((task) => task.slotType == 'moved');
  const isPassed = tasks.every(
    (t) => t.slotType === 'moved' && t.slot === t.targetSlot
  );

  if (!visible) {
    return null;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={`relative w-full flex justify-center ${className}`}>
          <InitTasks
            tasks={initTasks}
            slotType='init'
            moveTask={moveTask}
            canDrag={canDrag}
            showExample={showExample}
          />
          <TaskSlotTable
            title='產品待辦清單'
            subtitle='Product Backlog'
            slots={4}
            tasks={movedTasks}
            canDrag={canDrag}
            slotType='moved'
            moveTask={moveTask}
            showPriorityLine={true}
          />
          {canDrag ? (
            <Button
              label='我完成了'
              className='absolute bottom-0 right-0'
              onClick={showNextFrame}
              disabled={!isPassed}
            />
          ) : null}
        </div>
      </motion.div>
    </DndProvider>
  );
};

export default BacklogDnDPanel;
