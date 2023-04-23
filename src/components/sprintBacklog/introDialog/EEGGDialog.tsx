/** components */
import Role from '@/components/common/Role';
import Dialog from '@/components/common/Dialog';
import EEDialogContent1 from '@/components/sprintBacklog/introDialog/EEDialogContent1';
import EEDialogContent2 from '@/components/sprintBacklog/introDialog/EEDialogContent2';
import GGDialogContent1 from '@/components/sprintBacklog/introDialog/GGDialogContent1';
import GGDialogContent2 from '@/components/sprintBacklog/introDialog/GGDialogContent2';
import GGDialogContent3 from '@/components/sprintBacklog/introDialog/GGDialogContent3';

/** utils */
import { RoleDialogProps } from '@/utils/types';
import { roles, themeColors } from '@/utils/const';

interface EEGGDialogProps extends RoleDialogProps {
  showEERole: boolean;
  showGGRole: boolean;
  showEEDialog: boolean;
  showEEDialog1: boolean;
  showEEDialog2: boolean;
  showGGDialog: boolean;
  showGGDialog1: boolean;
  showGGDialog2: boolean;
  showGGDialog3: boolean;
}

const EEGGDialog = ({
  duration = 1,
  onClick,
  showEERole,
  showGGRole,
  showEEDialog,
  showEEDialog1,
  showEEDialog2,
  showGGDialog,
  showGGDialog1,
  showGGDialog2,
  showGGDialog3,
}: EEGGDialogProps) => {
  /** EE is the first appearing role */
  let role = roles.EE;
  let color = themeColors.YELLOW;
  if (showGGDialog) {
    color = themeColors.ORANGE;
    role = roles.GG;
  }

  return (
    <div className="flex items-start justify-end gap-8">
      <Dialog
        duration={duration}
        visible={showEEDialog}
        showNextButton={true}
        onClick={onClick}
        color={themeColors.YELLOW}
        label={roles.EE}
        delay={0}
        exitDuration={0}
      >
        <EEDialogContent1 duration={duration} visible={showEEDialog1} />
        <EEDialogContent2 duration={duration} visible={showEEDialog2} />
      </Dialog>
      <Dialog
        duration={duration}
        visible={showGGDialog}
        showNextButton={!showGGDialog2}
        onClick={onClick}
        color={themeColors.ORANGE}
        label={roles.GG}
        delay={1}
      >
        <GGDialogContent1 duration={duration} visible={showGGDialog1} />
        <GGDialogContent2 duration={duration} visible={showGGDialog2} />
        <GGDialogContent3 duration={duration} visible={showGGDialog3} />
      </Dialog>

      <Role
        role={roles.EE}
        duration={0.3}
        visible={showEERole}
        className="min-h-[165px]"
      />
      <Role
        role={roles.GG}
        duration={0.3}
        visible={showGGRole}
        className="min-h-[165px]"
      />
    </div>
  );
};

export default EEGGDialog;
