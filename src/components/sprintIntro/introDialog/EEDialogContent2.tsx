import { motion } from 'framer-motion';

/** utils */
import type { TransitionProps, ElementStyleProps } from '@/utils/types';

const EEDialogContent2 = ({
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
        Sprint 是一個短衝 ， 開發團隊會在這期間執行開發 。 在這段期間內 ，
        開發團隊舉辦
        <span className="text-primary">每日站立會議 (Daily Scrum)</span>，
        追蹤成員間的工作狀況 ， 在 Sprint 的結束也會包含
        <span className="text-primary">短衝檢視會議 (Sprint Review)</span>
        以及
        <span className="text-primary">
          短衝自省會議 (Sprint Retrospective)
        </span>
        。
      </p>
    </motion.div>
  );
};

export default EEDialogContent2;
