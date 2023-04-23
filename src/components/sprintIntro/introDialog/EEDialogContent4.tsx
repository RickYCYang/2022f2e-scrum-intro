import { motion } from 'framer-motion';

/** utils */
import type { TransitionProps, ElementStyleProps } from '@/utils/types';

const EEDialogContent4 = ({
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
        哼哼沒想到你這麼快就學會惹 ， 快結束了加油加油 ！
      </p>
    </motion.div>
  );
};

export default EEDialogContent4;
