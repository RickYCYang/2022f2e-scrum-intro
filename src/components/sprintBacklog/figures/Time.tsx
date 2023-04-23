import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/** images */
import smallTime1 from '../../../../public/scrum/time_small_1.png';
import smallTime2 from '../../../../public/scrum/time_small_2.png';
import smallTime3 from '../../../../public/scrum/time_small_3.png';
import smallTime5 from '../../../../public/scrum/time_small_5.png';
import smallTime8 from '../../../../public/scrum/time_small_8.png';
import smallTimeOrange from '../../../../public/scrum/time_small_orange.png';
import smallTimeRed from '../../../../public/scrum/time_small_red.png';

/** utils */
import { TransitionProps, ElementStyleProps } from '@/utils/types';

interface TimeProps extends TransitionProps, ElementStyleProps {
  index: number;
}

const imageMap = new Map(
  Object.entries({
    '0': smallTime1,
    '1': smallTime2,
    '2': smallTime3,
    '3': smallTime5,
    '4': smallTime8,
    '5': smallTimeOrange,
    '6': smallTimeRed,
  })
);

const Time = ({
  index,
  duration = 0,
  delay = 0,
  visible = true,
}: TimeProps) => {
  if (!visible || !imageMap.has(index.toString())) return null;

  return (
    <motion.img
      className="max-w-[82px] h-auto absolute -top-9 -right-9"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration,
        delay,
      }}
      src={imageMap.get(index.toString())?.src}
    />
  );
};

export default Time;
