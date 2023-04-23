import React from 'react';

/** components */
import ScumMeeting from './ScumMeeting';

/** images */
import sprintDailyMeeting from '../../../../public/scrum/sprint_daily.png';

const DailyScrumMeeting = () => {
  return (
    <ScumMeeting
      imageSrc={sprintDailyMeeting}
      title="每日站立會議"
      subtitle="Daily Scrum"
      descParagraph={
        <>
          <p>每天都要進行的會議 ， 以15分鐘為限制</p>
          <ul className="list-disc pl-5">
            <li>昨天為團隊的短衝目標 (Sprint Goal)做了那些進度</li>
            <li>今天我會如何準備來幫助團隊達到短衝目標</li>
            <li> 過程中有遇到什麼問題、難題</li>
          </ul>
          <p>透過團隊分享 ， 追蹤大家的工作狀況。</p>
        </>
      }
    />
  );
};

export default DailyScrumMeeting;
