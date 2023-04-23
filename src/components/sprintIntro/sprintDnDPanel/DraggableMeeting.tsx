import { useDrag } from 'react-dnd';

/** components */
import Meeting from '../scrumMeetingPanel/Meeting';

/** utils */
import itemTypes from '@/utils/itemTypes';
import type { MoveItem } from '@/utils/types';
import { themeColors } from '@/utils/const';

interface DraggableMeetingProps {
  meeting: MoveItem;
}

const DraggableMeeting = ({ meeting }: DraggableMeetingProps) => {
  const [{ isDragging }, dragRef, _dragPreviewRef] = useDrag(
    () => ({
      type: itemTypes.MEETING,
      /** destruct meeting */
      item: {
        ...meeting,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const borderColor =
    meeting.slotType === 'moved' && meeting.slot !== meeting.targetSlot
      ? themeColors.RED
      : themeColors.YELLOW;

  return (
    <Meeting
      color={themeColors.YELLOW}
      borderColor={borderColor}
      ref={dragRef}
      title={meeting.title}
      subtitle={meeting.subtitle}
      className={`cursor-move
                  ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    />
  );
};

export default DraggableMeeting;
