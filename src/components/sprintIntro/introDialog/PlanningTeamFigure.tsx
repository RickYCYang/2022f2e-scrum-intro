import { motion } from 'framer-motion';

/** images */
import planningTeam from '../../../../public/role/planning_team.png';

interface PlanningTeamFigureProps {
  duration: number;
  delay: number;
}

const PlanningTeamFigure = ({
  duration = 0,
  delay = 0,
}: PlanningTeamFigureProps) => {
  return (
    <motion.img
      className="rounded-full w-96 h-auto m-auto shadow-3xl shadow-purple bg-purple/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ marginTop: '80px' }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      transition={{ duration, delay }}
      src={planningTeam.src}
    />
  );
};

export default PlanningTeamFigure;
