import { motion } from 'framer-motion';
import { AiFillCaretDown } from 'react-icons/ai';

/** components */
import Dialog from '@/components/Dialog';
import Role from '@/components/Role';

/** utils */
import { roles } from '@/utils/const';
import React from 'react';

interface PODialogProps {
  onClick: (event: React.MouseEvent<SVGAElement>) => void;
  duration: number;
  delay: number;
}

const PODialog = ({ onClick, duration = 0, delay = 0 }: PODialogProps) => {
  return (
    <div className={`flex justify-start gap-10`}>
      <Role role={roles.PO} duration={0.4} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay }}
        exit={{ opacity: 0, transition: { delay: 0 } }}
      >
        <Dialog label={roles.PO} className="w-[998px] text-base relative">
          產品待辦清單好了之後 ， 我們來召集 ScrumMaster 和開發團隊共同召開
          <span className="text-primary">短衝規劃會議（Sprint Planning）</span>
          。 短衝即是一個迭代 ， 具有固定時間限制 ， 我們會在這個會議中 ，
          決定要完成哪些工作事項來達到商業需求 ， 列出
          <span className="text-primary">短衝待辦清單 （Sprint Backlog）</span>
          ， 並由開發團隊在接下來的產品開發週期裡執行 。
          <motion.div
            className="absolute bottom-2 right-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration, delay: delay + duration }}
          >
            <AiFillCaretDown
              className="text-2xl text-primary animate-bounce cursor-pointer"
              onClick={onClick}
            />
          </motion.div>
        </Dialog>
      </motion.div>
    </div>
  );
};

export default PODialog;
