import React from 'react';

/** components */
import ScumMeeting from './ScumMeeting';

/** images */
import sprintReviewMeeting from '../../../../public/scrum/sprint_review.png';

const SprintReviewMeeting = () => {
  return (
    <ScumMeeting
      imageSrc={sprintReviewMeeting}
      title="短衝檢視會議"
      subtitle="Sprint Review"
      descParagraph={
        <p>用來檢視該次短衝增量的成果 ， 以蒐集相關的回饋數據或意見 。</p>
      }
    />
  );
};

export default SprintReviewMeeting;
