import { motion } from 'framer-motion';

/** components */
import { AiFillCaretDown } from 'react-icons/ai';
import Image from 'next/image';

/** assets */
import jiraIcon from '../../../../public/logo/jira.png';

interface IThirdDialogContent {
  showNextContent: () => void;
  duration: number;
}

const ThirdDialogContent = ({
  showNextContent,
  duration,
}: IThirdDialogContent) => {
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
      <AiFillCaretDown
        className="absolute -bottom-5 -right-5 text-2xl text-primary 
          animate-bounce cursor-pointer"
        onClick={showNextContent}
      />
    </motion.div>
  );
};

export default ThirdDialogContent;
