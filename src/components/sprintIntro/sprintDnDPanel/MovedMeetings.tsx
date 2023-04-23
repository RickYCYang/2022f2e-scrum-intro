/** components */
import MeetingSlot from '@/components/sprintIntro/sprintDnDPanel/MeetingSlot';

/** utils */
import {
  ElementStyleProps,
  MoveItem,
  MoveItemFn,
  SlotType,
} from '@/utils/types';

interface MovedMeetingsProps extends ElementStyleProps {
  meetings: MoveItem[];
  moveMeeting: MoveItemFn;
}

const slotType: SlotType = 'moved';

const MovedMeetings = ({ meetings, moveMeeting }: MovedMeetingsProps) => {
  const slot1Meeting = meetings.find((m) => m.slot === 1);
  const slot2Meeting = meetings.find((m) => m.slot === 2);
  const slot3Meeting = meetings.find((m) => m.slot === 3);

  return (
    <>
      <MeetingSlot
        className="absolute top-[280px] left-[512px]
                  before:absolute before:w-9 before:top-1/2 before:-left-9 
                  before:border-b before:border-b-primary"
        meeting={slot1Meeting}
        slotType={slotType}
        slot={1}
        moveMeeting={moveMeeting}
      />
      <MeetingSlot
        className="absolute top-[420px] left-[464px]
                  before:absolute before:h-9 before:-bottom-9 before:left-1/2
                  before:border-r before:border-r-primary"
        meeting={slot2Meeting}
        slotType={slotType}
        slot={2}
        moveMeeting={moveMeeting}
      />
      <MeetingSlot
        className="absolute top-[420px] left-[744px]
                  before:absolute before:h-9 before:-bottom-9 before:left-1/2
                  before:border-r before:border-r-primary"
        meeting={slot3Meeting}
        slotType={slotType}
        slot={3}
        moveMeeting={moveMeeting}
      />
    </>
  );
};

export default MovedMeetings;
