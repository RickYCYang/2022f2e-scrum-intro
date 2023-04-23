import { motion } from 'framer-motion';

/** utils */
import type { TransitionProps, ElementStyleProps } from '@/utils/types';

const EEDialogContent3 = ({
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
      <p className="text-xl mb-2">換你來試試看吧 ！</p>
      <p>在這經典的 Surum 流程圖中 ， 這些流程分別代表哪一個會議呢 ？</p>
      <p>提示 ： 把右側的三個流程拖移至正確的位置上吧 ！</p>
    </motion.div>
  );
};

export default EEDialogContent3;
