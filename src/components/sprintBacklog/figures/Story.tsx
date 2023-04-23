import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/** images */
import storyPrimary from '../../../../public/scrum/story_primary.png';
import storyOrange from '../../../../public/scrum/story_orange.png';
import storyRed from '../../../../public/scrum/story_red.png';

/** utils */
import { TransitionProps, ElementStyleProps } from '@/utils/types';

interface StoryProps extends TransitionProps, ElementStyleProps {
  index: number;
  showTransitionImgs: boolean;
}

const Story = ({
  index,
  duration = 0,
  delay = 0,
  showTransitionImgs = false,
}: StoryProps) => {
  if (!showTransitionImgs)
    return (
      <motion.img
        className="max-w-[165px] h-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration,
          delay,
        }}
        src={storyPrimary.src}
      />
    );

  if (index == 5)
    return (
      <motion.img
        className="max-w-[165px] h-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration,
          delay,
        }}
        src={storyOrange.src}
      />
    );

  if (index == 6)
    return (
      <motion.img
        className="max-w-[165px] h-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration,
          delay,
        }}
        src={storyRed.src}
      />
    );

  return (
    <motion.img
      className="max-w-[165px] h-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration,
        delay,
      }}
      src={storyPrimary.src}
    />
  );
};

export default Story;
