import { motion } from 'framer-motion';

/** utils */
import type { TransitionProps, ElementStyleProps } from '@/utils/types';

const GGDialogContent2 = ({
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
        我們會在會議裡請團隊成員提出哪些是做得好的地方 、 哪些可以繼續改善的地方
        ？ 並記錄再 Confluence 中 。 Retro 重點在於「正面表述」， 你也思考看看
        ， 哪一些是適合 Retro 的回饋呢 ？
      </p>
    </motion.div>
  );
};

export default GGDialogContent2;
