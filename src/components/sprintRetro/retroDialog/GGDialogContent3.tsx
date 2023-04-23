import { motion } from 'framer-motion';

/** utils */
import type { TransitionProps, ElementStyleProps } from '@/utils/types';

const GGDialogContent3 = ({
  duration,
  visible,
}: TransitionProps & ElementStyleProps) => {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
      className="relative"
    >
      <p className="text-xl">
        太酷ㄌ吧，根本天才，畢業之後不要忘記我唷 &gt;&lt;!
      </p>
    </motion.div>
  );
};

export default GGDialogContent3;
