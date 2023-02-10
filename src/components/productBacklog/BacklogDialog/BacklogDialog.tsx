import { motion } from 'framer-motion';

/** components */
import Dialog from '@/components/Dialog';
import Role from '@/components/Role';
import FirstDialogContent from './FirstDialogContent';
import SecondDialogContent from './SecondDialogContent';
import ThirdDialogContent from './ThirdDialogContent';
import ForthDialogContent from './ForthDialogContent';
import FifthDialogContent from './FifthDialogContent';

/** utils */
import { roles } from '@/utils/const';

interface IBacklogDialog {
  contentSeq: number;
  showNextContent: () => void;
}

const duration = 1;
const delay = 1;

const BacklogDialog = ({ contentSeq, showNextContent }: IBacklogDialog) => {
  const getContent = () => {
    switch (contentSeq) {
      case 1:
        return (
          <FirstDialogContent
            showNextContent={showNextContent}
            duration={duration}
            delay={delay}
          />
        );
      case 2:
        return <SecondDialogContent duration={duration} />;
      case 3:
        return (
          <ThirdDialogContent
            showNextContent={showNextContent}
            duration={duration}
          />
        );
      case 4:
        return <ForthDialogContent duration={duration} />;
      case 5:
        return <FifthDialogContent duration={duration} />;
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
        <Dialog label="PO" className="w-[998px] text-base">
          {getContent()}
        </Dialog>
      </motion.div>
    </div>
  );
};

export default BacklogDialog;
