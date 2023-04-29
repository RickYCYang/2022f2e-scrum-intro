import { useEffect, useState } from 'react';

/** utils */
import { ElementStyleProps, Color } from '@/utils/types';
import classNames from 'classnames';

interface ProgressbarProps extends ElementStyleProps {
  value: number;
  color?: Color;
  label?: string;
  showBorder?: boolean;
  fixedOnTop?: boolean;
}

const Progressbar = ({
  value,
  color = Color.PRIMARY,
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
    'bg-dark': color === Color.PRIMARY,
    'bg-[#933500]': [Color.ORANGE, Color.RED].includes(color),
    'border-primary': color === Color.PRIMARY,
    'border-[#933500]': [Color.ORANGE, Color.RED].includes(color),
  });
  const progressColorClass = classNames({
    'bg-primary': color === Color.PRIMARY,
    'bg-orange': color === Color.ORANGE,
    'bg-[#FF0000]': color === Color.RED,
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
