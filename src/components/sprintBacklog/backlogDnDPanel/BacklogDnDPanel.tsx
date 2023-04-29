import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

/** components */
import TaskSlotTable from '@/components/common/TaskSlotTable';
import Button from '@/components/common/Button';

/** utils */
import {
  TransitionProps,
  ElementStyleProps,
  MoveItem,
  ButtonSVGClickEvent,
  SlotType,
  Color,
} from '@/utils/types';
import { sprintBacklogs } from '@/utils/const';
import { isEmpty } from 'lodash';

interface BacklogDnDPanelProps extends TransitionProps, ElementStyleProps {
  showNextFrame: (e: ButtonSVGClickEvent) => void;
}

/** ttl scrum points should not exceed 20 */
const maximumScrumPoints = 20;

const BacklogDnDPanel = ({
  visible,
  showNextFrame,
  className,
}: BacklogDnDPanelProps) => {
  const [tasks, setTasks] = useState<MoveItem[]>(sprintBacklogs);

  const moveTask = (
    task: MoveItem,
    slotType: SlotType,
    targetSlot: number
  ): void => {
    setTasks((prevTasks) => {
      /** find target task first */
      const oldTask = prevTasks.find((t) => t.id === task.id);
      if (isEmpty(oldTask)) return prevTasks;

      const newTask = { ...oldTask };
      newTask.slot = targetSlot;
      newTask.slotType = slotType;
      const updatedTasks = prevTasks.map((t) => {
        if (t.id === newTask.id) return newTask;
        return t;
      });
      return updatedTasks;
    });
  };

  /** prepare value and label for progressbar */

  const currScrumPoints =
    tasks
      ?.filter((task) => task.slotType === 'moved')
      .reduce(
        (prevSumPoints, task) => prevSumPoints + Number(task.points ?? 0),
        0
      ) || 0;
  /** maximum progress of points is 100% */
  const progressbarValue = Math.min(
    (currScrumPoints / maximumScrumPoints) * 100,
    100
  );
  const progressbarLabel = `${currScrumPoints} / ${maximumScrumPoints}`;
  const exceedMaximumPoints = currScrumPoints > maximumScrumPoints;
  let scrumTableProgressbarColor = Color.ORANGE;
  let scrumTableTaskBorderColor = Color.ORANGE;
  if (exceedMaximumPoints) {
    scrumTableProgressbarColor = Color.RED;
    scrumTableTaskBorderColor = Color.RED;
  }

  let disableSprintBtn = true;
  const currScrumTasks = tasks?.filter(
    (task) => task.slotType === 'moved'
  ).length;
  if (currScrumPoints > 0 && !exceedMaximumPoints && currScrumTasks >= 2) {
    disableSprintBtn = false;
  }

  if (!visible) return null;
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={`relative w-full flex justify-center items-stretch gap-10 py-10 ${className}`}
      >
        <TaskSlotTable
          tasks={tasks}
          moveTask={moveTask}
          title="產品待辦清單"
          subtitle="Product Backlog"
          slotType="init"
          slots={4}
        />
        <TaskSlotTable
          tasks={tasks}
          moveTask={moveTask}
          title="開發Ａ組的短衝待辦清單"
          subtitle="Sprint Backlog"
          slotType="moved"
          slots={4}
          color={Color.YELLOW}
          progressbarValue={progressbarValue}
          progressbarLabel={progressbarLabel}
          progressbarColor={scrumTableProgressbarColor}
          taskBorderColor={scrumTableTaskBorderColor}
        />
        <Button
          label="開始sprint"
          onClick={showNextFrame}
          className="self-end"
          disabled={disableSprintBtn}
        />
      </div>
    </DndProvider>
  );
};

export default BacklogDnDPanel;
