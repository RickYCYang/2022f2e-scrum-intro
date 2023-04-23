import { motion } from 'framer-motion';

/** utils */
import type { TransitionProps, ElementStyleProps } from '@/utils/types';

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
        嗚啊啊新來的 ， 你真的很幸運 ， 今天剛好是開發 B 組的 Retro ，
        你也來見識一下 ， 看看 Retro 都該做些什麼吧～～
      </p>
    </motion.div>
  );
};

export default GGDialogContent1;
