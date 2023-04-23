import { motion } from 'framer-motion';

/** utils */
import { ElementStyleProps, TransitionProps } from '@/utils/types';

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
      <p className="text-xl -mt-2 mb-1">
        噢嗚嗚 ， 太厲害ㄌ ！ 又完成了一關 ！ 還有下一關等著你 ！
      </p>
    </motion.div>
  );
};

export default GGDialogContent3;
