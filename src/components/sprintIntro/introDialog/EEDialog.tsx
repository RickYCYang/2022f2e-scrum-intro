/** components */
import Role from '@/components/common/Role';
import Dialog from '@/components/common/Dialog';
import EEDialogContent1 from '@/components/sprintIntro/introDialog/EEDialogContent1';
import EEDialogContent2 from '@/components/sprintIntro/introDialog/EEDialogContent2';
import EEDialogContent3 from '@/components/sprintIntro/introDialog/EEDialogContent3';
import EEDialogContent4 from '@/components/sprintIntro/introDialog/EEDialogContent4';

/** utils */
import { RoleDialogProps } from '@/utils/types';
import { roles, themeColors } from '@/utils/const';

interface EEDialogProps extends RoleDialogProps {
  showEEDialog1: boolean;
  showEEDialog2: boolean;
  showEEDialog3: boolean;
  showEEDialog4: boolean;
}

const EEDialog = ({
  duration = 1,
  delay = 1,
  visible,
  onClick,
  showEEDialog1,
  showEEDialog2,
  showEEDialog3,
  showEEDialog4,
}: EEDialogProps) => {
  if (!visible) return null;

  return (
    <div className={`flex items-start gap-10 mb-4`}>
      <Dialog
        duration={duration - 0.5}
        delay={delay}
        visible={visible}
        showNextButton={!showEEDialog3}
        onClick={onClick}
        color={themeColors.YELLOW}
        label={roles.EE}
        className="mb-4"
      >
        <EEDialogContent1 visible={showEEDialog1} duration={duration} />
        <EEDialogContent2 visible={showEEDialog2} duration={duration} />
        <EEDialogContent3 visible={showEEDialog3} duration={duration} />
        <EEDialogContent4 visible={showEEDialog4} duration={duration} />
      </Dialog>
      <Role role={roles.EE} visible={visible} className="min-h-[165px]" />
    </div>
  );
};

export default EEDialog;
