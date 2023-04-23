import { motion } from 'framer-motion';
import Image from 'next/image';

/** images */
import scrumPlanning2 from '../../../../public/scrum/planning_sprint2.png';

/** utils */
import { TransitionProps, ElementStyleProps } from '@/utils/types';

const SprintPlan2Figure = ({
  duration = 0,
  delay = 0,
  visible = true,
}: TransitionProps & ElementStyleProps) => {
  if (!visible) return null;

  return (
    <motion.div
      className="relative rounded-full p-16 w-[360px] h-auto mx-auto -mt-14 shadow-3xl shadow-purple bg-purple/80 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      transition={{ duration, delay }}
    >
      <span
        className="absolute top-[calc(50%-2rem)] left-[calc(50%-2rem)] 
                  rounded-full w-16 h-16 
                  flex justify-center items-center 
                  bg-primary text-white text-2xl"
      >
        20
      </span>
      <span
        className="absolute bottom-[2rem] left-[calc(50%-2rem)] 
                  rounded px-3 py-1
                  flex justify-center items-center 
                  bg-black/50 text-white"
      >
        Story Point
      </span>
      <span
        className="absolute top-[2.3rem] left-[calc(50%-2rem)] 
                  rounded px-3 py-1
                  flex justify-center items-center 
                  bg-black/50 text-white "
      >
        Team limit
      </span>
      <Image src={scrumPlanning2} alt="planning_sprint2" />
    </motion.div>
  );
};

export default SprintPlan2Figure;
