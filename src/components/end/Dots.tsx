import { motion } from 'framer-motion';

/** assets */
import dotBlue from '../../../public/dots/dot_blue.png';
import dotPurple from '../../../public/dots/dot_purple.png';
import dotRed from '../../../public/dots/dot_red.png';
import dotYellow from '../../../public/dots/dot_yellow.png';

/** utils */
import type { TransitionProps } from '@/utils/types';

const Dots = ({ delay }: TransitionProps) => {
  return (
    <>
      {/** left */}
      <motion.img
        src={dotPurple.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay }}
        className="absolute top-10 left-1/4 animate-spin w-20 h-auto"
      />
      <motion.img
        src={dotBlue.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay }}
        className="absolute top-32 left-10 animate-spin w-20 h-auto"
      />
      <motion.img
        src={dotRed.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay }}
        className="absolute top-52 left-40 animate-spin w-20 h-auto"
      />
      <motion.img
        src={dotYellow.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay }}
        className="absolute top-80 left-6 animate-spin w-20 h-auto"
      />
      {/** right */}
      <motion.img
        src={dotYellow.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay }}
        className="absolute top-10 right-1/4 animate-spin w-20 h-auto"
      />
      <motion.img
        src={dotRed.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay }}
        className="absolute top-32 right-10 animate-spin w-20 h-auto"
      />
      <motion.img
        src={dotBlue.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay }}
        className="absolute top-52 right-40 animate-spin w-20 h-auto"
      />
      <motion.img
        src={dotPurple.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay }}
        className="absolute top-80 right-6 animate-spin w-20 h-auto"
      />
    </>
  );
};

export default Dots;
