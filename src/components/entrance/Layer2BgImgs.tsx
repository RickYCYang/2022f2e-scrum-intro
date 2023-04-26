import { motion } from 'framer-motion';

/** images */
import layer2LeafLeft from '../../../public/background/layer2-leaf-left.png';
import layer2LeafTop from '../../../public/background/layer2-leaf-top.png';
import layer2LeafRight from '../../../public/background/layer2-leaf-right.png';
import layer2LeafBottom from '../../../public/background/layer2-leaf-bottom.png';

interface Layer2BgImgsProps {
  duration: number;
  delay: number;
}

const Layer2BgImgs = ({ duration, delay }: Layer2BgImgsProps) => {
  return (
    <>
      <motion.img
        className={`absolute top-0 left-1/3 z-10 `}
        transition={{ duration, delay }}
        exit={{ top: -999 }}
        src={layer2LeafTop.src}
      />
      <motion.img
        className={`absolute top-0 left-0 z-10`}
        transition={{ duration, delay }}
        exit={{ top: -999, left: -999 }}
        src={layer2LeafLeft.src}
      />
      <motion.img
        className={`absolute right-0 bottom-0 z-10`}
        transition={{ duration, delay }}
        exit={{ right: -999, bottom: -999 }}
        src={layer2LeafRight.src}
      />
      <motion.img
        className={`absolute bottom-0 left-0 z-10`}
        transition={{ duration, delay }}
        exit={{ left: -999, bottom: -999 }}
        src={layer2LeafBottom.src}
      />
    </>
  );
};

export default Layer2BgImgs;
