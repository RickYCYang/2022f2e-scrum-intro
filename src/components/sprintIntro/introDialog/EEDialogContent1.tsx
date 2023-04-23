import { motion } from 'framer-motion';

/** utils */
import type { TransitionProps, ElementStyleProps } from '@/utils/types';

const EEDialogContent1 = ({
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
      <p>
        等等等等等 ， 你都還不知道什麼是 Sprint 吧 ！ 讓我先為你介紹一下～
        仔細聽好唷 ， 等等會考考你 ！
      </p>
    </motion.div>
  );
};

export default EEDialogContent1;
