import { motion } from 'framer-motion';

/** utils */
import { ElementStyleProps, TransitionProps } from '@/utils/types';

const MMDialogContent1 = ({
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
        哦哦 ， 你是新來的前端吧 ！ 我是這次的
        <span className="text-primary">ScrumMaster MM</span> ，
        我的工作主要是促成開發團隊成員協作 、 引導團隊進行自省會議 ，
        提升團隊成員對 Scrum 瞭解 。
      </p>
    </motion.div>
  );
};

export default MMDialogContent1;
