import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

/** components */
import InitMeetings from './InitMeetings';
import MovedMeetings from './MovedMeetings';
import StaticMeetings from './StaticMeetings';
import Button from '@/components/common/Button';

/** images */
import sprintProcess from '../../../../public/scrum/sprint_process.png';

/** utils */
import {
  TransitionProps,
  ElementStyleProps,
  MoveItem,
  SlotType,
  ButtonSVGClickEvent,
} from '@/utils/types';
import { sprintMeetings } from '@/utils/const';
import { isEmpty } from 'lodash';

interface SprintDnDPanelProps extends TransitionProps, ElementStyleProps {
  showNextFrame: (e: ButtonSVGClickEvent) => void;
}

const SprintDnDPanel = ({
  duration = 1,
  delay = 0,
  visible = true,
  showNextFrame,
}: SprintDnDPanelProps) => {
  const [meetings, setMeetings] = useState<MoveItem[]>(sprintMeetings);
  const moveMeeting = (
    meeting: MoveItem,
    slotType: SlotType,
    targetSlot: number
  ) => {
    setMeetings((prevMeetings) => {
      /** find target task first */
      const newMeeting = meetings.find((m) => m.id === meeting.id);
      if (isEmpty(newMeeting)) return prevMeetings;

      newMeeting.slot = targetSlot;
      newMeeting.slotType = slotType;
      const updatedMeetings = prevMeetings.map((m) => {
        if (m.id === newMeeting.id) return newMeeting;
        return m;
      });
      return updatedMeetings;
    });
  };

  const initMeetings = meetings.filter((meeting) => meeting.slotType == 'init');
  const movedMeetings = meetings.filter(
    (meeting) => meeting.slotType === 'moved'
  );
  const isPassed = meetings.every(
    (m) => m.targetSlot === m.slot && m.slotType === 'moved'
  );

  if (!visible) return null;
  return (
    <DndProvider backend={HTML5Backend}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay }}
        className="-mt-20 relative"
      >
        <StaticMeetings />
        <InitMeetings meetings={initMeetings} moveMeeting={moveMeeting} />
        <MovedMeetings meetings={movedMeetings} moveMeeting={moveMeeting} />
        <Image
          src={sprintProcess.src}
          alt="sprint_process"
          className="w-[1080px] h-[540px]"
          width={1000}
          height={540}
        />
        <Button
          label="我完成了"
          className="absolute bottom-0 right-0"
          onClick={showNextFrame}
          disabled={!isPassed}
        />
      </motion.div>
    </DndProvider>
  );
};

export default SprintDnDPanel;
