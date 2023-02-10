import { motion } from 'framer-motion';

/** components */
import { AiFillCaretDown } from 'react-icons/ai';

interface IFifthDialogContent {
  duration: number;
}

const FifthDialogContent = ({ duration }: IFifthDialogContent) => {
  return (
    <motion.div
      className="relative w-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
    >
      <p>哇喔完成惹 ， 尼太棒ㄌ！ 我們繼續吧 ！</p>
      <AiFillCaretDown
        className="absolute -bottom-5 -right-5 text-2xl text-primary 
          animate-bounce cursor-pointer"
      />
    </motion.div>
  );
};

export default FifthDialogContent;
