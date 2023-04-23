import { motion } from 'framer-motion';

/** utils */
import type { ElementStyleProps, TransitionProps } from '@/utils/types';

const Frame2DialogContent = ({
  duration,
  visible,
}: ElementStyleProps & TransitionProps) => {
  if (!visible) return null;

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
    >
      剛好我最近手邊有一個 「 人才招募系統 」 的案子 ， 我才剛列出了
      <span className="text-primary">「 產品需求清單 」</span> 。 既然你都來了
      ， 來試試看調整產品優先度 ， 排出產品待辦清單吧 ！
    </motion.p>
  );
};

export default Frame2DialogContent;
