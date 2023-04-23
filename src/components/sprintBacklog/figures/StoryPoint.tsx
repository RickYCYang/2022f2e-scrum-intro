import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/** utils */
import { TransitionProps, ElementStyleProps } from '@/utils/types';

interface StoryPointProps extends TransitionProps, ElementStyleProps {
  index: number;
}

const fibMap = new Map();
const getFibNum = (num: number): number => {
  if (num <= 1) return 1;
  if (fibMap.has(num)) return fibMap.get(num);

  const fibNum = getFibNum(num - 1) + getFibNum(num - 2);
  fibMap.set(num, fibNum);

  return fibNum;
};

const StoryPoint = ({
  index,
  duration = 0,
  delay = 0,
  visible = true,
}: StoryPointProps) => {
  if (!visible) return null;

  const point = getFibNum(index + 1);

  let colorClass = 'bg-[#00FFE0B2]';
  if (index === 5) colorClass = 'bg-[#FF7A00B2]';
  if (index === 6) colorClass = 'bg-[#FF0000B2]';

  return (
    <motion.span
      className={`absolute top-[calc(50%-1.5rem)] left-[calc(50%-1.4rem)] ${colorClass} 
              text-white rounded-full w-16 h-16 flex justify-center items-center text-lg`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration,
        delay,
      }}
    >
      {point}
    </motion.span>
  );
};

export default StoryPoint;
