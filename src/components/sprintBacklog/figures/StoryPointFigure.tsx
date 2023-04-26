import { motion, AnimatePresence } from 'framer-motion';

/** components */
import Story from './Story';
import Time from '@/components/sprintBacklog/figures/Time';
import StoryPoint from '@/components/sprintBacklog/figures/StoryPoint';

/** images */
import time from '../../../../public/scrum/time.png';

/** utils */
import { TransitionProps, ElementStyleProps } from '@/utils/types';

interface StoryPointFigureProps extends TransitionProps, ElementStyleProps {
  showTransitionImgs: boolean;
}

const StoryPointFigure = ({
  duration = 0,
  delay = 0,
  visible,
  showTransitionImgs,
}: StoryPointFigureProps) => {
  if (!visible) return null;

  const firstRowStoryPointImgs = 3;
  const secondRowStoryPointImgs = 4;

  const getStoryPointImgs = (
    nums: number,
    offset: number,
    delayOfFrame1: number = 0,
    delayOfFrame2: number = 0
  ) => {
    return Array(nums)
      .fill(null)
      .map((_, index) => {
        return (
          <div key={index} className='relative'>
            <Story
              index={index + offset}
              duration={duration}
              delay={delayOfFrame1 + (index + 1) * duration}
              showTransitionImgs={showTransitionImgs}
            />
            <Time
              index={index + offset}
              duration={duration}
              delay={delayOfFrame2 + (index + 1) * duration}
              visible={showTransitionImgs}
            />
            <StoryPoint
              index={index + offset}
              duration={duration}
              delay={delayOfFrame2 + (index + 1) * duration}
              visible={showTransitionImgs}
            />
          </div>
        );
      });
  };

  return (
    <div className='relative p-20'>
      <AnimatePresence>
        {!showTransitionImgs && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration, delay }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
            className='absolute left-10 top-10 max-w-[165px] h-auto'
            src={time.src}
          />
        )}
      </AnimatePresence>
      <div className='flex justify-center items-center gap-10 mb-10'>
        {getStoryPointImgs(firstRowStoryPointImgs, 0, delay)}
      </div>
      <div className='flex justify-center items-center gap-10'>
        {getStoryPointImgs(
          secondRowStoryPointImgs,
          firstRowStoryPointImgs,
          delay + duration * firstRowStoryPointImgs,
          duration * firstRowStoryPointImgs
        )}
      </div>
    </div>
  );
};

export default StoryPointFigure;
