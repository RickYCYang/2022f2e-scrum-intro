/** utils */
import { Color } from '@/utils/types';
import classNames from 'classnames';

interface PointsProps {
  points?: number;
  color: Color;
}

const Points = ({ points, color }: PointsProps) => {
  const bgClasses = classNames({
    'bg-primary': color === Color.PRIMARY,
    'bg-yellow': color === Color.YELLOW,
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
