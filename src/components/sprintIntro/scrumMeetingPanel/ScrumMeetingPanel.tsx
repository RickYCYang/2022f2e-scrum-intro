import { motion } from 'framer-motion';

/** components */
import DailyScrumMeeting from './DailyScrumMeeting';
import SprintReviewMeeting from './SprintReviewMeeting';
import SprintRetroMeeting from './SprintRetroMeeting';
import Button from '@/components/common/Button';

/** utils */
import type {
  TransitionProps,
  ElementStyleProps,
  ButtonSVGClickEvent,
} from '@/utils/types';

interface ScrumMeetingPanelProps extends TransitionProps, ElementStyleProps {
  showNextFrame: (e: ButtonSVGClickEvent) => void;
}

const ScrumMeetingPanel = ({
  visible,
  duration = 0.7,
  showNextFrame,
  className,
}: ScrumMeetingPanelProps) => {
  if (!visible) return null;

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className='absolute'
        initial={{ left: -999 }}
        animate={{ left: 0 }}
        transition={{ duration }}
      >
        <div className='grid grid-cols-3 gap-10'>
          <DailyScrumMeeting />
          <SprintReviewMeeting />
          <SprintRetroMeeting />
        </div>
        <Button
          className='block ml-auto mt-6'
          label='練習去囉'
          onClick={showNextFrame}
        />
      </motion.div>
    </div>
  );
};

export default ScrumMeetingPanel;
