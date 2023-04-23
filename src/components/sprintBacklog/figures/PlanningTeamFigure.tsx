import { motion } from 'framer-motion';

/** utils */
import { ElementStyleProps, TransitionProps } from '@/utils/types';

/** images */
import planningTeam from '../../../../public/role/planning_team.png';

interface PlanningTeamFigureProps extends ElementStyleProps, TransitionProps {}

const PlanningTeamFigure = ({
  duration = 0,
  delay = 0,
  visible = true,
}: PlanningTeamFigureProps) => {
  if (!visible) return null;
  return (
    <motion.img
      className="absolute top-[calc(50%-16rem)] left-[calc(50%-12rem)] rounded-full w-96 h-96 shadow-3xl shadow-purple bg-purple/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      transition={{ duration, delay }}
      src={planningTeam.src}
    />
  );
};

export default PlanningTeamFigure;
