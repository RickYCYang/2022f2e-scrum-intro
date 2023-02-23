import { motion } from 'framer-motion';

/** images */
import scrumPlanning from '../../../../public/scrum/planning_sprint.png';

interface SprintPlanFigureProps {
  duration: number;
  delay: number;
}

const SprintPlanFigure = ({
  duration = 0,
  delay = 0,
}: SprintPlanFigureProps) => {
  return (
    <motion.img
      className="rounded-full w-96 h-96 m-auto shadow-3xl shadow-primary bg-primary/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      transition={{ duration, delay }}
      src={scrumPlanning.src}
    />
  );
};

export default SprintPlanFigure;
