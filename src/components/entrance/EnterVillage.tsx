import Image from 'next/image';
import { Inter } from '@next/font/google';
import { motion } from 'framer-motion';

/** components */
import Button from '@/components/common/Button';

/** images */
import scrum from '../../../public/logo/scrum.png';

const inter = Inter({ subsets: ['latin'] });

interface EnterVillageProps {
  enterVillage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  duration: number;
}

const EnterVillage = ({ enterVillage, duration }: EnterVillageProps) => {
  return (
    <motion.div
      className={`flex flex-col justify-center items-center z-50 relative`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
      exit={{ opacity: 0 }}
    >
      <Image src={scrum} alt="scurm" width={700} className="-mt-24" />
      <div className="-mt-36 flex flex-col justify-center items-center gap-5">
        <h2 className={`${inter.className} text-white text-2xl`}>
          深入敏捷の村一探究竟
        </h2>
        <Button label="進入村莊" onClick={enterVillage} />
      </div>
    </motion.div>
  );
};

export default EnterVillage;
