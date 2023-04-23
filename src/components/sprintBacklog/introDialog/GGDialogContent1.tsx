import { motion } from 'framer-motion';

/** utils */
import { ElementStyleProps, TransitionProps } from '@/utils/types';

const GGDialogContent1 = ({
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
        沒錯，如 EE 說的，我這邊已經把剛剛討論好的點數標上去囉～
        你來練習把任務排到短衝待辦清單吧 ！
      </p>
    </motion.div>
  );
};

export default GGDialogContent1;
