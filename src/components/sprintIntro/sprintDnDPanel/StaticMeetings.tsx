/** components */
import Meeting from '../scrumMeetingPanel/Meeting';

/** utils */
import { Color } from '@/utils/types';

const StaticMeetings = () => {
  return (
    <>
      <Meeting
        className="absolute top-16 left-16
                  before:absolute before:w-14 before:top-1/2 before:-left-14 
                  before:border-b before:border-b-primary"
        title="產品待辦清單"
        subtitle="Product Backlog"
        color={Color.PRIMARY}
      />

      <Meeting
        className="absolute top-36 left-16
                  before:absolute before:w-14 before:top-1/2 before:-left-14 
                  before:border-b before:border-b-primary"
        title="短衝規劃會議"
        subtitle="Sprint Planning"
        color={Color.PRIMARY}
      />
      <Meeting
        className="absolute top-56 left-16
                    before:absolute before:w-14 before:top-1/2 before:-left-14 
                    before:border-b before:border-b-primary"
        title="短衝待辦清單"
        subtitle="Sprint Backlog"
        color={Color.PRIMARY}
      />
      <Meeting
        className="absolute top-[352px] left-56
                  before:absolute before:h-9 before:-top-9 before:left-1/2
                  before:border-r before:border-r-primary"
        title="短衝"
        subtitle="Sprint"
        color={Color.PRIMARY}
      />
    </>
  );
};

export default StaticMeetings;
