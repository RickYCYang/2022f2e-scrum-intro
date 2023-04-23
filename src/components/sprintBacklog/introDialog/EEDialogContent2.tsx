import { motion } from 'framer-motion';

/** utils */
import type { TransitionProps, ElementStyleProps } from '@/utils/types';

const EEDialogContent2 = ({
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
        以
        <span className="text-primary">
          「 費氏數列 」 的 1 、2 、3 、5 、8 、13 、21
        </span>
        來估算各項 Story 的分數 。 Story Point 越小 ， 表示這個 Story
        花費時間越少 ； 越大 ， 花費時間則越多 。 如果出現了一個 21 分 ，
        可能表示這個 Story 太龐大 ， 需要再拆分細項執行唷 ！
      </p>
    </motion.div>
  );
};

export default EEDialogContent2;
