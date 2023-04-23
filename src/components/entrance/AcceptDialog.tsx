import { motion } from 'framer-motion';

/** components */
import Dialog from '@/components/common/Dialog';
import Button from '@/components/common/Button';

/** utils */
import { roles } from '@/utils/const';

interface AcceptDialogProps {
  acceptChallenge: (e: React.MouseEvent<HTMLButtonElement>) => void;
  duration: number;
  delay: number;
}

const AcceptDialog = ({
  acceptChallenge,
  duration,
  delay,
}: AcceptDialogProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      className={`w-2/3 h-0 flex flex-col justify-center items-center`}
    >
      <Dialog label={roles.ANONUMITY} className="pt-24 pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration, delay: delay + duration }}
          className="mb-8"
        >
          呦呼 ， 歡迎進入 「SCRUM 新手村」 ， 在正式加入專案開發之前
          ，需要請你先了解 Scrum 的流程與精神 ！
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration, delay: delay + duration * 2 }}
        >
          請接受挑戰任務 ， 成功通過 Scrum 新手村的挑戰任務吧～
        </motion.p>
      </Dialog>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay: delay + duration * 3 }}
      >
        <Button
          label="接受挑戰"
          onClick={acceptChallenge}
          className="relative z-20 mt-8"
        />
      </motion.div>
    </motion.div>
  );
};

export default AcceptDialog;
