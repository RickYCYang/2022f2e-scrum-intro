import { motion } from 'framer-motion';

interface IForthDialogContent {
  duration: number;
}

const ForthDialogContent = ({ duration }: IForthDialogContent) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
      className="relative"
    >
      <p>換你來試試看吧 ！</p>
      <span className="text-base">
        提示 ： 請把需求拖移至產品待辦清單，並調整其優先順序 。
      </span>
    </motion.div>
  );
};

export default ForthDialogContent;
