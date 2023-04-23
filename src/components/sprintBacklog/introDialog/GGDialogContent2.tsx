import { motion } from 'framer-motion';

/** utils */
import { ElementStyleProps, TransitionProps } from '@/utils/types';

const GGDialogContent2 = ({
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
      <p className="text-xl -mt-2 mb-1">換你來試試看吧 ！ </p>
      <p className="mb-1">
        把<span className="text-primary">「 產品待辦清單 」</span>的項目拖進
        <span className="text-primary">「 開發Ａ組的短衝待辦清單 」</span>裡吧
        ！
      </p>
      <p className="mb-1">
        提示 ： 置入兩項以上的 Story ， 點數總和不能超過團隊負擔上限 20 點唷 ！
      </p>
    </motion.div>
  );
};

export default GGDialogContent2;
