import { useDrop } from 'react-dnd';

/** components */
import DraggableMeeting from '@/components/sprintIntro/sprintDnDPanel/DraggableMeeting';

/** utils */
import {
  ElementStyleProps,
  MoveItem,
  MoveItemFn,
  SlotType,
} from '@/utils/types';
import itemTypes from '@/utils/itemTypes';

interface MeetingSlot extends ElementStyleProps {
  meeting: MoveItem | undefined;
  slotType: SlotType;
  slot: number;
  moveMeeting: MoveItemFn;
}

const MeetingSlot = ({
  meeting,
  slotType,
  slot,
  moveMeeting,
  className,
}: MeetingSlot) => {
  const showMeeting = meeting?.title !== undefined;
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: itemTypes.MEETING,
      canDrop: (_item) => !showMeeting,
      drop: (item: MoveItem) => {
        moveMeeting(item, slotType, slot);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [meeting]
  );

  const showPreviewMeeting = isOver && canDrop && !showMeeting;

  return (
    <div
      ref={dropRef}
      className={`rounded-md min-h-[70px] min-w-[204px] ${className}
                ${!showMeeting && 'border-2 border-dashed border-primary'}`}
    >
      {showMeeting && <DraggableMeeting meeting={meeting} />}
      {showPreviewMeeting && (
        <div className="min-h-[70px] bg-black/50 rounded-md" />
      )}
    </div>
  );
};

export default MeetingSlot;
