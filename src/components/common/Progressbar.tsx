import { useEffect, useState } from 'react';

/** utils */
import { ElementStyleProps } from '@/utils/types';
import { themeColors } from '@/utils/const';
import classNames from 'classnames';

interface ProgressbarProps extends ElementStyleProps {
  value: number;
  color?: themeColors;
  label?: string;
  showBorder?: boolean;
  fixedOnTop?: boolean;
}

const Progressbar = ({
  value,
  color = themeColors.PRIMARY,
  label,
  className,
  style,
  showBorder = false,
  fixedOnTop = true,
}: ProgressbarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (value <= 0 || value > 100) return;
    setProgress(value);
  }, [value]);

  const showLabel = label && label.length > 0;

  /** styling classes */
  const heightClass = classNames({
    'min-h-[18px]': showLabel,
    'min-h-[6px]': !showLabel,
  });
  const wrapperClasses = classNames({
    border: showBorder,
    absolute: fixedOnTop,
    relative: !fixedOnTop,
    'bg-dark': color === themeColors.PRIMARY,
    'bg-[#933500]': [themeColors.ORANGE, themeColors.RED].includes(color),
    'border-primary': color === themeColors.PRIMARY,
    'border-[#933500]': [themeColors.ORANGE, themeColors.RED].includes(color),
  });
  const progressColorClass = classNames({
    'bg-primary': color === themeColors.PRIMARY,
    'bg-orange': color === themeColors.ORANGE,
    'bg-[#FF0000]': color === themeColors.RED,
  });

  return (
    <div
      className={`w-full rounded-full top-0 z-20
                  ${heightClass} ${wrapperClasses} ${className}
                `}
      style={style}
    >
      <div
        style={{ width: `${progress}%` }}
        className={`${progressColorClass} ${heightClass} rounded-full 
                    transition-all ease-out duration-1000
                  `}
      />
      {showLabel && (
        <span className="absolute w-auto left-[40%] top-0 text-white leading-tight text-sm">
          {label}
        </span>
      )}
    </div>
  );
};

export default Progressbar;
