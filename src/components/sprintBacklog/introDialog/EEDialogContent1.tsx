import { motion } from 'framer-motion';

/** utils */
import type { TransitionProps, ElementStyleProps } from '@/utils/types';

const EEDialogContent1 = ({
  duration,
  visible,
}: TransitionProps & ElementStyleProps) => {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
    >
      <p>
        欸新來的 ， 你應該不知道點數是什麼意思吧ㄏㄏ ， 我來跟你介紹一下吧～
        <span className="text-primary">Story Point</span> 目的是為了
        <span className="text-primary">衡量速度</span> ，
        是用大概花費的時間預估出的相對點數哦 。
      </p>
    </motion.div>
  );
};

export default EEDialogContent1;
