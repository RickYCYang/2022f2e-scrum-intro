import React from 'react';

/** components */
import ScumMeeting from './ScumMeeting';

/** images */
import sprintRetroMeeting from '../../../../public/scrum/sprint_retro.png';

const SprintRetroMeeting = () => {
  return (
    <ScumMeeting
      imageSrc={sprintRetroMeeting}
      title="短衝自省會議"
      subtitle="Sprint Retrospective"
      descParagraph={
        <>
          <p>團隊在自省會議裡 , 會共同回顧該短衝歷程發生的事情</p>
          <ul className="list-disc pl-5">
            <li>好的地方</li>
            <li>可以改進的地方</li>
            <li> 如何維持我們已有的成功經驗</li>
          </ul>
        </>
      }
    />
  );
};

export default SprintRetroMeeting;
