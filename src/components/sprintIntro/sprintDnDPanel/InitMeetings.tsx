/** components */
import MeetingSlot from '@/components/sprintIntro/sprintDnDPanel/MeetingSlot';

/** utils */
import {
  ElementStyleProps,
  MoveItem,
  MoveItemFn,
  SlotType,
} from '@/utils/types';

interface InitMeetingsProps extends ElementStyleProps {
  meetings: MoveItem[];
  moveMeeting: MoveItemFn;
}

const slotType: SlotType = 'init';

const InitMeetings = ({ meetings, moveMeeting }: InitMeetingsProps) => {
  const slot1Meeting = meetings.find((m) => m.slot === 1);
  const slot2Meeting = meetings.find((m) => m.slot === 2);
  const slot3Meeting = meetings.find((m) => m.slot === 3);

  return (
    <>
      <div className="absolute top-20 right-0 flex flex-col gap-6">
        {
          /** 3 slots */
          [slot1Meeting, slot2Meeting, slot3Meeting].map((meeting, index) => {
            return (
              <MeetingSlot
                key={index}
                meeting={meeting}
                slotType={slotType}
                moveMeeting={moveMeeting}
                slot={index + 1}
              />
            );
          })
        }
      </div>
    </>
  );
};

export default InitMeetings;
