import { motion } from 'framer-motion';

/** components */
import Image from 'next/image';

/** utils */
import type { ElementStyleProps, TransitionProps } from '@/utils/types';

/** assets */
import jiraIcon from '../../../../public/logo/jira.png';

const Frame3DialogContent = ({
  duration,
  visible,
}: ElementStyleProps & TransitionProps) => {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
      className="relative"
    >
      <p>
        在這階段我們要把需求放進產品待辦清單 ， 並調整其優先順序 。 對了 ！
        我們公司也推薦使用
        <Image
          src={jiraIcon}
          alt="jira"
          width={60}
          className="inline-block mx-4"
        />
        來做任務的管理呢 ！
      </p>
    </motion.div>
  );
};

export default Frame3DialogContent;
