import Image from 'next/image';
import { motion } from 'framer-motion';

/** images */
import layer2LeafLeft from '../../../public/background/layer2-leaf-left.png';
import layer2LeafTop from '../../../public/background/layer2-leaf-top.png';
import layer2LeafRight from '../../../public/background/layer2-leaf-right.png';
import layer2LeafBottom from '../../../public/background/layer2-leaf-bottom.png';

interface ILayer2BgImgs {
  duration: number;
  delay: number;
}

const Layer2BgImgs = ({ duration, delay }: ILayer2BgImgs) => {
  return (
    <>
      <motion.div
        className={`absolute top-0 left-1/3 z-10 `}
        transition={{ duration, delay }}
        exit={{ top: -999 }}
      >
        <Image src={layer2LeafTop} alt="layer2LeafTop" />
      </motion.div>
      <motion.div
        className={`absolute top-0 left-0 z-10`}
        transition={{ duration, delay }}
        exit={{ top: -999, left: -999 }}
      >
        <Image src={layer2LeafLeft} alt="layer2LeafLeft" />
      </motion.div>
      <motion.div
        className={`absolute right-0 bottom-0 z-10`}
        transition={{ duration, delay }}
        exit={{ right: -999, bottom: -999 }}
      >
        <Image src={layer2LeafRight} alt="layer2LeafRight" />
      </motion.div>
      <motion.div
        className={`absolute bottom-0 left-0 z-10`}
        transition={{ duration, delay }}
        exit={{ left: -999, bottom: -999 }}
      >
        <Image src={layer2LeafBottom} alt="layer2LeafBottom" />
      </motion.div>
    </>
  );
};

export default Layer2BgImgs;
