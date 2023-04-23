import { motion } from 'framer-motion';

/** utils */
import type { ElementStyleProps, TransitionProps } from '@/utils/types';

const delay = 1;
const Frame1DialogContent = ({
  duration = 1,
  visible,
}: ElementStyleProps & TransitionProps) => {
  if (!visible) return null;

  return (
    <div className="relative">
      <motion.p
        className="mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay }}
      >
        <span className="text-primary">\ 碰 /</span> 我是短衝小精靈 ， 開發 A
        組的 PO 。
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay: delay + duration }}
      >
        <span className="text-primary">
          PO 也就是產品負責人（Product Owner）{' '}
        </span>
        ， 產品負責人會負責評估產品待辦清單的價值與重要性，
        依序排列要執行的優先順序 ， 對齊產品目標 。 最後排出產品待辦清單
        （Product Backlog） 唷 ！
      </motion.p>
    </div>
  );
};

export default Frame1DialogContent;
