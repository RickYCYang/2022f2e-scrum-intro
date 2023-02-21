import Image from 'next/image';
import { motion } from 'framer-motion';

/** images */
import layer1LeafTop from '../../../public/background/layer1-leaf-top.png';
import layer1LeafBottom from '../../../public/background/layer1-leaf-bottom.png';
import layer1LeafLeft from '../../../public/background/layer1-leaf-left.png';
import layer1LeafRight from '../../../public/background/layer1-leaf-right.png';

interface Layer1BgImgsProps {
  duration: number;
  delay: number;
}

const Layer1BgImgs = ({ duration, delay }: Layer1BgImgsProps) => {
  return (
    <>
      <motion.img
        className={`absolute top-0 left-1/4`}
        transition={{ duration, delay }}
        exit={{ top: -999 }}
        src={layer1LeafTop.src}
      />
      <motion.img
        className={`absolute bottom-0 left-1/4 `}
        transition={{ duration, delay }}
        exit={{ bottom: -999 }}
        src={layer1LeafBottom.src}
      />
      <motion.img
        className={`absolute bottom-0 left-0`}
        transition={{ duration, delay }}
        exit={{ left: -999 }}
        src={layer1LeafLeft.src}
      />
      <motion.img
        className={`absolute bottom-0 right-0`}
        transition={{ duration, delay }}
        exit={{ right: -999 }}
        src={layer1LeafRight.src}
      />
    </>
  );
};

export default Layer1BgImgs;
