import { motion } from 'framer-motion';

/** images */
import scrumPlanning from '../../../../public/scrum/planning_sprint.png';

interface SprintPlanDiagramProps {
  duration: number;
  delay: number;
}

const SprintPlanDiagram = ({
  duration = 0,
  delay = 0,
}: SprintPlanDiagramProps) => {
  return (
    <motion.img
      className="rounded-full w-96 h-96 m-auto shadow-3xl shadow-primary"
      style={{ backgroundColor: 'rgba(	0, 255, 224, 0.5)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      transition={{ duration, delay }}
      src={scrumPlanning.src}
    />
  );
};

export default SprintPlanDiagram;
