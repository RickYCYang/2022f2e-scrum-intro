import { motion } from 'framer-motion';

/** utils */
import type { ElementStyleProps, TransitionProps } from '@/utils/types';

interface Frame4DialogContentProps extends ElementStyleProps, TransitionProps {
  duration: number;
}

const Frame4DialogContent = ({
  duration,
  visible,
}: Frame4DialogContentProps) => {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
      className="relative"
    >
      <p>換你來試試看吧 ！</p>
      <span className="text-base">
        提示 ： 請把需求拖移至產品待辦清單，並調整其優先順序 。
      </span>
    </motion.div>
  );
};

export default Frame4DialogContent;
