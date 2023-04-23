import { forwardRef } from 'react';

/** utils */
import { themeColors } from '@/utils/const';
import type { ElementStyleProps } from '@/utils/types';
import classNames from 'classnames';

interface MeetingProps extends ElementStyleProps {
  title: string;
  subtitle?: string;
  color?: themeColors;
  borderColor?: themeColors;
}
const Meeting = forwardRef<HTMLDivElement, MeetingProps>(
  (
    {
      title,
      subtitle,
      color = themeColors.YELLOW,
      borderColor = color,
      className,
    },
    ref
  ) => {
    const actlBorderColor = classNames({
      'border-yellow': borderColor === themeColors.YELLOW,
      'border-primary': borderColor === themeColors.PRIMARY,
      'border-red': borderColor === themeColors.RED,
    });
    const titleColor = classNames({
      'text-yellow': color === themeColors.YELLOW,
      'text-primary': color === themeColors.PRIMARY,
    });
    const subtitleColor = classNames({
      'text-primary': color === themeColors.YELLOW,
      'text-dark': color === themeColors.PRIMARY,
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
