import Image from 'next/image';
import { motion } from 'framer-motion';

/** images */
import layer1LeafTop from '../../../public/background/layer1-leaf-top.png';
import layer1LeafBottom from '../../../public/background/layer1-leaf-bottom.png';
import layer1LeafLeft from '../../../public/background/layer1-leaf-left.png';
import layer1LeafRight from '../../../public/background/layer1-leaf-right.png';

interface ILayer1BgImgs {
  duration: number;
  delay: number;
}

const Layer1BgImgs = ({ duration, delay }: ILayer1BgImgs) => {
  return (
    <>
      <motion.div
        className={`absolute top-0 left-1/4`}
        transition={{ duration, delay }}
        exit={{ top: -999 }}
      >
        <Image src={layer1LeafTop} alt="layer1LeafTop" />
      </motion.div>
      <motion.div
        className={`absolute bottom-0 left-1/4 `}
        transition={{ duration, delay }}
        exit={{ bottom: -999 }}
      >
        <Image src={layer1LeafBottom} alt="layer1LeafBottom" />
      </motion.div>
      <motion.div
        className={`absolute bottom-0 left-0`}
        transition={{ duration, delay }}
        exit={{ left: -999 }}
      >
        <Image src={layer1LeafLeft} alt="layer1LeafLeft" />
      </motion.div>
      <motion.div
        className={`absolute bottom-0 right-0`}
        transition={{ duration, delay }}
        exit={{ right: -999 }}
      >
        <Image src={layer1LeafRight} alt="layer1LeafRight" />
      </motion.div>
    </>
  );
};

export default Layer1BgImgs;
