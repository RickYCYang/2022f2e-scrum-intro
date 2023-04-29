import { motion } from 'framer-motion';

/** utils */
import { Color, ElementStyleProps, TransitionProps } from '@/utils/types';

/** assets */
import dotBlue from '../../../public/dots/dot_blue.png';
import dotPurple from '../../../public/dots/dot_purple.png';
import dotRed from '../../../public/dots/dot_red.png';
import dotYellow from '../../../public/dots/dot_yellow.png';

interface SpotProps extends ElementStyleProps, TransitionProps {
  color: Exclude<Color, Color.ORANGE>;
}
const Spot = ({ color, delay, duration, className }: SpotProps) => {
  const spotImgMap = {
    [Color.PRIMARY]: dotBlue,
    [Color.PURPLE]: dotPurple,
    [Color.RED]: dotRed,
    [Color.YELLOW]: dotYellow,
  };
  return (
    <motion.img
      src={spotImgMap[color].src}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={`w-20 h-auto ${className}`}
    />
  );
};

export default Spot;
