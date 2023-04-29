import { forwardRef } from 'react';

/** utils */
import { ElementStyleProps, Color } from '@/utils/types';
import classNames from 'classnames';

interface MeetingProps extends ElementStyleProps {
  title: string;
  subtitle?: string;
  color?: Color;
  borderColor?: Color;
}
const Meeting = forwardRef<HTMLDivElement, MeetingProps>(
  (
    { title, subtitle, color = Color.YELLOW, borderColor = color, className },
    ref
  ) => {
    const actlBorderColor = classNames({
      'border-yellow': borderColor === Color.YELLOW,
      'border-primary': borderColor === Color.PRIMARY,
      'border-red': borderColor === Color.RED,
    });
    const titleColor = classNames({
      'text-yellow': color === Color.YELLOW,
      'text-primary': color === Color.PRIMARY,
    });
    const subtitleColor = classNames({
      'text-primary': color === Color.YELLOW,
      'text-dark': color === Color.PRIMARY,
    });
    return (
      <div
        className={`rounded-md border ${actlBorderColor} bg-black/60 
                flex flex-col justify-center items-center
                py-2 px-10 ${className}`}
        ref={ref}
      >
        <p className={`${titleColor} text-xl`}>{title}</p>
        <p className={`${subtitleColor}`}>{subtitle}</p>
      </div>
    );
  }
);

Meeting.displayName = 'Meeting';

export default Meeting;
