import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

/** components */
import Meeting from '@/components/sprintIntro/scrumMeetingPanel/Meeting';

/** utils */
import type { ElementStyleProps } from '@/utils/types';

interface ScumMeetingProps extends ElementStyleProps {
  imageSrc: StaticImageData;
  title: string;
  subtitle: string;
  descParagraph: ReactNode;
}

const ScumMeeting = ({
  imageSrc,
  title,
  subtitle,
  descParagraph,
}: ScumMeetingProps) => {
  return (
    <div className="grid-rows-6">
      <Image src={imageSrc} alt="sprint_daily" className="row-span-2" />
      <Meeting title={title} subtitle={subtitle} className="mb-5" />
      <div className="text-white row-span-3 leading-7">{descParagraph}</div>
    </div>
  );
};

export default ScumMeeting;
