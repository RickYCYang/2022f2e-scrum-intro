import { motion } from 'framer-motion';
import { AiFillCaretDown } from 'react-icons/ai';

/** components */
import Dialog from '@/components/Dialog';
import Role from '@/components/Role';

/** utils */
import { roles, dialogColors } from '@/utils/const';
import React from 'react';

interface MMDialogProps {
  onClick: (event: React.MouseEvent<SVGAElement>) => void;
  duration: number;
  delay: number;
}

const MMDialog = ({ onClick, duration = 0, delay = 0 }: MMDialogProps) => {
  return (
    <div className={`flex justify-start items-end gap-10`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay }}
        exit={{ opacity: 0, transition: { delay: 0 } }}
      >
        <Dialog
          label={roles.PO}
          color={dialogColors.PURPLE}
          className="w-[998px] text-base relative mb-5"
        >
          哦哦 ， 你是新來的前端吧 ！ 我是這次的
          <span className="text-primary">ScrumMaster MM</span> ，
          我的工作主要是促成開發團隊成員協作 、 引導團隊進行自省會議 ，
          提升團隊成員對 Scrum 瞭解 。
          <motion.div
            className="absolute bottom-2 right-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration, delay: delay + duration }}
          >
            <AiFillCaretDown
              className="text-2xl text-purple animate-bounce cursor-pointer"
              onClick={onClick}
            />
          </motion.div>
        </Dialog>
      </motion.div>
      <Role role={roles.MM} duration={0.4} />
    </div>
  );
};

export default MMDialog;
