/** utils */
import { themeColors } from '@/utils/const';
import classNames from 'classnames';

interface PointsProps {
  points?: number;
  color: themeColors;
}

const Points = ({ points, color }: PointsProps) => {
  const bgClasses = classNames({
    'bg-primary': color === themeColors.PRIMARY,
    'bg-yellow': color === themeColors.YELLOW,
  });

  return (
    <span
      className={`flex-shrink-0 w-10 h-10 flex justify-center items-center 
    rounded-full  text-white ${bgClasses}`}
    >
      {points}
    </span>
  );
};

export default Points;
