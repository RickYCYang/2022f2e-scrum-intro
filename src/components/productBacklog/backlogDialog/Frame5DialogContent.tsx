import { motion } from 'framer-motion';

/** utils */
import type { ElementStyleProps, TransitionProps } from '@/utils/types';

const Frame5DialogContent = ({
  duration,
  visible,
}: ElementStyleProps & TransitionProps) => {
  if (!visible) return null;

  return (
    <motion.div
      className="relative w-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
    >
      <p>哇喔完成惹 ， 尼太棒ㄌ！ 我們繼續吧 ！</p>
    </motion.div>
  );
};

export default Frame5DialogContent;
