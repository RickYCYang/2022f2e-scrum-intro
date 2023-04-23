import { motion } from 'framer-motion';

/** utils */
import type { TransitionProps, ElementStyleProps } from '@/utils/types';

const MMDialogContent2 = ({
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
        這兩位是 EE 和 GG ， 是我們開發團隊的成員唷～ 我們團隊
        <span className="text-primary">一次 Sprint 週期是兩週</span>的時間 ，
        依照我的觀察 ， 目前團隊可以負擔的點數 (Story Point) 大約是 20 點左右。
      </p>
    </motion.div>
  );
};

export default MMDialogContent2;
