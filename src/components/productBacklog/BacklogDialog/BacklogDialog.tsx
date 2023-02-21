import { motion } from 'framer-motion';

/** components */
import Dialog from '@/components/Dialog';
import Role from '@/components/Role';
import Intro1DialogContent from './Intro1DialogContent';
import Intro2DialogContent from './Intro2DialogContent';
import ExampleDialogContent from './ExampleDialogContent';
import ExerciseDialogContent from './ExerciseDialogContent';
import PassDialogContent from './PassDialogContent';

/** utils */
import { roles, INTRO_1, INTRO_2, EXAMPLE, EXEC, PASS } from '@/utils/const';
import { TButtonSVGClickHandler } from '@/utils/types';

interface BacklogDialogProps {
  content: string;
  showNextContent: (e: TButtonSVGClickHandler) => void;
}

const duration = 1;
const delay = 1;

const BacklogDialog = ({ content, showNextContent }: BacklogDialogProps) => {
  const getContent = () => {
    switch (content) {
      case INTRO_1:
        return (
          <Intro1DialogContent
            showNextContent={showNextContent}
            duration={duration}
            delay={delay}
          />
        );
      case INTRO_2:
        return <Intro2DialogContent duration={duration} />;
      case EXAMPLE:
        return (
          <ExampleDialogContent
            showNextContent={showNextContent}
            duration={duration}
          />
        );
      case EXEC:
        return <ExerciseDialogContent duration={duration} />;
      case PASS:
        return <PassDialogContent duration={duration} />;
    }
  };

  return (
    <div className={`flex justify-start gap-10`}>
      <Role role={roles.PO} duration={0.4} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Dialog label={roles.PO} className="w-[998px] text-base">
          {getContent()}
        </Dialog>
      </motion.div>
    </div>
  );
};

export default BacklogDialog;
