import { motion } from 'framer-motion';

/** images */
import scrumPlanning from '../../../../public/scrum/planning_sprint1.png';

/** utils */
import { TransitionProps, ElementStyleProps } from '@/utils/types';

const SprintPlan1Figure = ({
  duration = 0,
  delay = 0,
  visible = true,
}: TransitionProps & ElementStyleProps) => {
  if (!visible) return null;

  return (
    <motion.img
      className="relative rounded-full w-96 h-96 mx-auto align-middle mt-8 shadow-3xl shadow-primary bg-primary/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      transition={{ duration, delay }}
      src={scrumPlanning.src}
    />
  );
};

export default SprintPlan1Figure;
